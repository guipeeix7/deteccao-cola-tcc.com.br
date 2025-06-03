<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Http\Requests\StorePermissionsRequest;

class StoreRolesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|unique:roles|max:255|min:3',
            'permissions' => ''
            // 'guard_name' => 'required|min:2',
        ];
    }

    public function dataTypes(){
        return [
            'name' => 'text',
            // 'guard_name' => 'text',
            'permissions' => StorePermissionsRequest::dataTypes()
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'O campo :attribute é necessário',
            'name.unique' => 'Parece que o nome escolhido já está em uso',
            'name.min' => 'Por favor escolha um nome significativo com pelo menos 3 caracteres',
            // 'guard_name.required' => 'O campo guard é obrigatorio',
            // 'guard_name.min' => 'Por favor escolha um nome significativo com pelo menos 2 caracteres',
        ];
    }

    public function failedValidation(Validator $validator){
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));
    }
}
