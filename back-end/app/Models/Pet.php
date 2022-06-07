<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'historia',
    	'foto',
    ];

    public function adocao()
    {
        return $this->hasOne(Adocao::class, 'pet_id', 'id');
    }
}
