<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Shared\Helper;
use Egulias\EmailValidator\EmailValidator;
use Egulias\EmailValidator\Validation\RFCValidation;
use LaravelLegends\PtBrValidator\Rules\Cpf;
use LaravelLegends\PtBrValidator\Rules\FormatoCpf;

class UpdateusersRequest extends FormRequest
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
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => 'nullable|string|min:8',
            'apelido' => 'nullable|string|max:60',
            'cpf' => ['nullable|numeric|digits:11', new FormatoCpf, new Cpf],
            // 'dataNascimento' => 'nullable|date',
            'status' => 'nullable|boolean',
            'schoolSufix' => 'nullable|string',
            'lastIpAddress' => 'nullable|ipv4',
            'fotoPerfil' => 'nullable|file|image|max:2048', // or whatever rules you need
            'roles.*' => 'numeric',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'O campo nome é obrigatório.',
            'name.string' => 'O campo nome deve ser uma string.',
            'name.max' => 'O campo nome deve ter no máximo :max caracteres.',
            'email.required' => 'O campo e-mail é obrigatório.',
            'email.string' => 'O campo e-mail deve ser uma string.',
            'email.email' => 'O campo e-mail deve ser um endereço de e-mail válido.',
            'email.unique' => 'O e-mail informado já está em uso.',
            'email.max' => 'O campo e-mail deve ter no máximo :max caracteres.',
            'password.required' => 'O campo senha é obrigatório.',
            'password.string' => 'O campo senha deve ser uma string.',
            'schoolSufix.string' => 'O campo schoolSufix deve ser uma string.',
            'password.min' => 'O campo senha deve ter no mínimo :min caracteres.',
            'apelido.string' => 'O campo apelido deve ser uma string.',
            'apelido.max' => 'O campo apelido deve ter no máximo :max caracteres.',
            'cpf.numeric' => 'O campo CPF deve conter apenas números.',
            'cpf.digits' => 'O campo CPF deve conter :digits dígitos.',
            'cpf.cpf' => 'O CPF não é válido.',
            'dataNascimento.date' => 'O campo data de nascimento deve ser uma data válida.',
            'status.boolean' => 'O campo status deve ser verdadeiro ou falso.',
            'lastIpAddress.ipv4' => 'O campo último endereço IP deve ser um endereço IPv4 válido.',
            'fotoPerfil.string' => 'O campo foto do perfil deve ser uma string.',
            'fotoPerfil.max' => 'O campo foto do perfil deve ter no máximo :max caracteres.',
            'roles.numeric' => 'O campo de roles deve conter somente inteiros.',
        ];
    }
}
