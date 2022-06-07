<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdocaoCollection;
use App\Models\Adocao;
use App\Rules\AdocaoUnicaPet;
use Illuminate\Http\Request;

class AdocaoController extends Controller
{


    /**
     * Lista de todas as adocoes cadastradas
     * 
     * @return Adocao
     */
    public function index()
    {
        $adocoes = Adocao::with('pet')->get();
        
        return new AdocaoCollection($adocoes);
    }

    /**
     * Cria no banco de dados o cadastro de uma adoção
     * 
     * @param Request $request
     * @return Adocao
     */
    public function store(Request $request)
    {
        $request->validate([
            'pet_id' => 'required|exists:pets,id',
            'email'  => ['required', 'email', new AdocaoUnicaPet($request->input('pet_id', 0))],
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
