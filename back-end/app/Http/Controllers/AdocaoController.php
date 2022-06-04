<?php

namespace App\Http\Controllers;

use App\Models\Adocao;
use Illuminate\Http\Request;

class AdocaoController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'pet_id' => 'required|exists:pets,id',
            'email'  => 'required|email',
            'valor'  => 'required|numeric|between:10,100',
        ],
        [
            'required' => ':attribute é obrigatório',
            'email' => 'Preencha um e-mail valido',
            'valor.between' => 'O valor deve estar entre (10 e 100)',
        ]);
        return Adocao::create($request->all());
    }
}
