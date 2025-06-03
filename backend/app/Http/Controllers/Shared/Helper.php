<?php

namespace App\Http\Controllers\Shared;

class Helper{
    public static function convertStringToArrayNumber($string = ""){
        $arr = explode(",", $string);

        $filtered = [];
        foreach($arr as $item)
            if(is_numeric($item))
                $filtered[] = (int)$item;
        return $filtered;
    }

    public static function validaCPF($cpf) {

        // Extrai somente os números
        $cpf = preg_replace( '/[^0-9]/is', '', $cpf );
        // Verifica se foi informado todos os digitos corretamente
        if (strlen($cpf) != 11) {
            return false;
        }

        // Verifica se foi informada uma sequência de digitos repetidos. Ex: 111.111.111-11
        if (preg_match('/(\d)\1{10}/', $cpf)) {
            return false;
        }

        // Faz o calculo para validar o CPF
        for ($t = 9; $t < 11; $t++) {
            for ($d = 0, $c = 0; $c < $t; $c++) {
                $d += $cpf[$c] * (($t + 1) - $c);
            }
            $d = ((10 * $d) % 11) % 10;
            if ($cpf[$c] != $d) {
                return false;
            }
        }
        return true;

    }

    public static function convertQueryBuilderPaginationToEloquent($data){
        $converted_data = [];
        var_dump($converted_data, $data);
        // $converted_data['data'] = $data;
        return;
        $converted_data['links'] = [];
        $converted_data['links']['first']    = $data->first_page_url;
        $converted_data['links']['last']     = $data['last_page_url'];
        $converted_data['links']['prev']     = $data['prev_page_url'];
        $converted_data['links']['next']     = $data['next_page_url'];

        $converted_data['meta'] = [];
        $converted_data['meta']['current_page']     = $data['current_page'];
        $converted_data['meta']['from']             = $data['from'];
        $converted_data['meta']['last_page']        = $data['last_page'];
        $converted_data['meta']['links']            = $data['links'];

        return $converted_data;
    }

    // {
    //     "data": [
    //         {
    //             "id": 1,
    //             "nomeQuestao": "Ratione quam numquam unde similique. Sequi pariatur expedita consequatur aut ab.",
    //             "opcaoCorreta": 2930,
    //             "idBanca": 7699,
    //             "areas": [],
    //             "disciplinas": [],
    //             "posicoes": [],
    //             "orgaos": [],
    //             "concursos": [],
    //             "assuntos": [],
    //             "alternativas": [],
    //             "explicada": [],
    //             "responde": []
    //         }
    //     ],
    //     "links": {
    //         "first": "http:\/\/localhost:8000\/questao\/single?page=1",
    //         "last": "http:\/\/localhost:8000\/questao\/single?page=2000",
    //         "prev": null,
    //         "next": "http:\/\/localhost:8000\/questao\/single?page=2"
    //     },
    //     "meta": {
    //         "current_page": 1,
    //         "from": 1,
    //         "last_page": 2000,
    //         "links": [
    //             {
    //                 "url": null,
    //                 "label": "&laquo; Previous",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=1",
    //                 "label": "1",
    //                 "active": true
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=2",
    //                 "label": "2",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=3",
    //                 "label": "3",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=4",
    //                 "label": "4",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=5",
    //                 "label": "5",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=6",
    //                 "label": "6",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=7",
    //                 "label": "7",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=8",
    //                 "label": "8",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=9",
    //                 "label": "9",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=10",
    //                 "label": "10",
    //                 "active": false
    //             },
    //             {
    //                 "url": null,
    //                 "label": "...",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=1999",
    //                 "label": "1999",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=2000",
    //                 "label": "2000",
    //                 "active": false
    //             },
    //             {
    //                 "url": "http:\/\/localhost:8000\/questao\/single?page=2",
    //                 "label": "Next &raquo;",
    //                 "active": false
    //             }
    //         ],
    //         "path": "http:\/\/localhost:8000\/questao\/single",
    //         "per_page": 1,
    //         "to": 1,
    //         "total": 2000
    //     }
    // }
}
