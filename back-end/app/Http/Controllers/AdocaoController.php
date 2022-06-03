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
        ]);
        return Adocao::create($request->all());
    }
}
