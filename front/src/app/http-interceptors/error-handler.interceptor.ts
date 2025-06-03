import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Location } from '@angular/common';

import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private location:Location, private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    var errorMessages = {
      // "200": "OK. A requisição foi bem sucedida.",
      "201": "Criado. A requisição foi bem sucedida.",
      "204": "Sem Conteúdo. A requisição foi bem sucedida, mas não há conteúdo para retornar.",
      "301": "Movido Permanentemente. O recurso solicitado foi movido permanentemente para um novo local.",
      "302": "Encontrado. O recurso solicitado foi movido temporariamente para um novo local.",
      "304": "Não Modificado. O recurso solicitado não foi modificado desde a última vez que foi acessado.",
      "400": "Solicitação Inválida. A requisição foi mal formada ou inválida.",
      "401": "Não Autorizado. A autenticação falhou ou o usuário não tem permissão para acessar o recurso.",
      "403": "Proibido. <br> O servidor entende a requisição, mas se recusa a processá-la.",
      "404": "Não Encontrado. O recurso solicitado não foi encontrado no servidor.",
      "409": "Conflito. A requisição não pode ser completada devido a um conflito com o estado atual do recurso.",
      "422": "Conflito. A requisição não pode ser completada.",
      "500": "Erro Interno do Servidor. O servidor encontrou um erro ao processar a requisição.",
      "503": "Serviço Indisponível. O servidor está indisponível no momento e não pode processar a requisição.",
      "419": "Cookie expirado, por favor faça o login novamente."
    };
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        console.log("ERROR OCURRED",error.status)

        if(error.status == 401){
          Swal.fire({
            // position: 'top-end',
            icon: 'error',
            title: 'Aviso',
            html: '<p> Nao foi possível completar a solicitação: </p><p> '+errorMessages[error.status]+' </p>  <p> Error code: <strong>'+error.status+'</strong></p>Detalhes: <small>'+error.error.message+'</small><br>',
            timer: 5000,
            showConfirmButton: false,

          }).then(() => {
            this.router.navigate(['login'])
          })
          return;
        }
        if (error.error instanceof ErrorEvent) {

          if (error.status === 0) {
            console.error('An error occurred:', error.error);
            return throwError(() => new Error('Erro na solicitação... '+errorMessages[error.error]));
          }

          else {
            return throwError(() => new Error("Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde."));
          }
        }
        else {
          if(error.error.message == 'Your email address is not verified.'){
            this.router.navigate(['resend-account-confirm'])
          }

          else{
            Swal.fire({
              // position: 'top-end',
              icon: 'warning',
              title: 'Aviso',
              html: '<p> Nao foi possível completar a solicitação: </p><p> '+errorMessages[error.status]+' </p>  <p> Error code: <strong>'+error.status+'</strong></p>Detalhes: <small>'+error.error.message+'</small>',
              showCancelButton: true,
              cancelButtonText: "Voltar!",
              showConfirmButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();

              } else if (result.isDismissed) {
                // this.location.back();
              }
            })
          }
          console.log('This is server side error');
          errorMsg = `Código de erro: ${error.status},  Message: ${error.message}`;
        }
        console.log(errorMsg);
        return throwError(errorMsg);
     })

    )
  }
}
