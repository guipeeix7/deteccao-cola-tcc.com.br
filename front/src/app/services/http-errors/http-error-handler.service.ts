import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerService {

  constructor(private http: HttpClient) { }

  public handleError(error: HttpErrorResponse) {

    // return this.http.get<any>('//localhost:8000/sanctum/csrf-cookie')

    var errorMessages = {
      "200": "OK. A requisição foi bem sucedida.",
      "201": "Criado. A requisição foi bem sucedida e um novo recurso foi criado como resultado.",
      "204": "Sem Conteúdo. A requisição foi bem sucedida, mas não há conteúdo para retornar.",
      "301": "Movido Permanentemente. O recurso solicitado foi movido permanentemente para um novo local.",
      "302": "Encontrado. O recurso solicitado foi movido temporariamente para um novo local.",
      "304": "Não Modificado. O recurso solicitado não foi modificado desde a última vez que foi acessado.",
      "400": "Solicitação Inválida. A requisição foi mal formada ou inválida.",
      "401": "Não Autorizado. A autenticação falhou ou o usuário não tem permissão para acessar o recurso.",
      "403": "Proibido. O servidor entende a requisição, mas se recusa a processá-la.",
      "404": "Não Encontrado. O recurso solicitado não foi encontrado no servidor.",
      "409": "Conflito. A requisição não pode ser completada devido a um conflito com o estado atual do recurso.",
      "500": "Erro Interno do Servidor. O servidor encontrou um erro ao processar a requisição.",
      "503": "Serviço Indisponível. O servidor está indisponível no momento e não pode processar a requisição.",
      "419": "Cookie expirado, por favor faça o login novamente."
    };

    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      return throwError(() => new Error('Erro na solicitação... '+errorMessages[error.error]));
    }
    // else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong.
    //   console.error(
    //     `Backend returned code ${error.status}, body was: `, error.error);
    //     // alert(error.status)
    // }
    // Return an observable with a user-facing error message.
    // if(error.status == 419){
    //   // alert('token renewed')
    //   // this.authService.getUpdatedCrsfToken().subscribe(resp=>{
    //   //   console.log(resp)}
    //   // )
    // }
    else if (errorMessages[error.status]) {
      return throwError(() => new Error('Erro na solicitação... '+errorMessages[error.status]));
      // return throwError(() => new Error('Erro na solicitação... '+this.errorMessages[error.status]));
    } else {
      return throwError(() => new Error("Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde."));
    }
  }

  public handleLogin(error: HttpErrorResponse){

  }

}
