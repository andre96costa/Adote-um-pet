<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adocao extends Model
{
    use HasFactory;

    protected $table = 'adocoes';
    protected $fillable = [
        'pet_id',
        'email',
        'valor',		
    ];

    public function pet()
    {
        return $this->belongsTo(Pet::class, 'pet_id', 'id');
    }
    
}
