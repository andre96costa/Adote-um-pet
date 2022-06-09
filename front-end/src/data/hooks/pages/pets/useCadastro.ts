import { AxiosError } from "axios";
import { useState } from "react";
import { ApiService } from "../../../services/ApiServices";

export function useCadastro() {
    const [nome, setNome] = useState('');
    const [historia, setHistoria] = useState('');
    const [foto, setFoto] = useState('');
    const [mensagem, setMensagem] = useState('');

    function cadastrar() {
        if (validarFormulario()) {
            ApiService.post('/pets', {
                nome,
                historia,
                foto,
            })
            .then(() => {
                limpar();
                setMensagem('Pet cadastrado com sucesso!');
            })
            .catch((error: AxiosError) => {
                setMensagem('Error: Não foi possível realizar o cadastro');
            });
        } else {
            setMensagem('Preencha todos os campos!');
        }
    }

    function validarFormulario() {
        return nome.length > 2 && historia.length > 20 && foto.length > 5;
    }

    function limpar() {
        setNome('');
        setHistoria('');
        setFoto('');
    }


    return {
        nome,
        setNome,
        historia,
        setHistoria,
        foto,
        setFoto,
        mensagem,
        setMensagem,
        cadastrar,
    };

}