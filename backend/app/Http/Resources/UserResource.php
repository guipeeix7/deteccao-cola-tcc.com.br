<?php

namespace App\Http\Resources;
use App\Http\Resources\ProfessorResource;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            // 'apelido' => $this->apelido == null ? "" : $this->apelido,
            // // 'cpf' => $this->cpf == null ? "" : $this->cpf,
            // 'dataNascimento' => $this->dataNascimento == null ? "" : $this->dataNascimento,
            // 'status' => $this->status  == null ? "" : $this->status,
            // 'lastIpAddress' => $this->lastIpAddress == null ? "" : $this->lastIpAddress,
            // 'email_verified_at' => Carbon::parse($this->email_verified_at)->format('Y-m-d H:i:s'),
            // 'fotoPerfil' => $this->fotoPerfil == null ? "" : $this->fotoPerfil

            'cpf' => $this->cpf,
            'dataNascimento' => $this->dataNascimento,
            'status' => $this->status,
            'lastIpAddress' => $this->lastIpAddress,
            'email_verified_at' => Carbon::parse($this->email_verified_at)->format('Y-m-d H:i:s'),
            'fotoPerfil' => $this->fotoPerfil,
            'aluno' => [],
            'professor' => []

        ];
    }
}
