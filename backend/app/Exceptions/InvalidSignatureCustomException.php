<?php

namespace App\Exceptions;
use Symfony\Component\HttpKernel\Exception\HttpException;

use Exception;


class InvalidSignatureCustomException extends HttpException
{
    public function __construct()
    {
        parent::__construct(403, 'O link expirou, por favor solicite um novo!');
    }
}
