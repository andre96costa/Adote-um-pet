import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Pet } from "../../@types/Pet";
import { ApiService } from "../../services/ApiServices";

export function useIndex() {
    const [listaPets, setListaPets] = useState<Pet[]>([]);
    const [petSelecinado, setPetSelecionado] = useState<Pet|null>(null);
    const [email, setEmail] = useState('');
    const [valor, setValor] = useState('');
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        ApiService.get('/pets')
            .then((respota) => {
                setListaPets(respota.data);
            });
    }, []);

    useEffect(() => {
        if (petSelecinado === null) {
            limparFormulario();
        }
    }, [petSelecinado]);

    function adotar() {
        if (petSelecinado !== null) {
            if (validarDadosAdocao()) {
                ApiService.post('/adocoes', {
                    pet_id: petSelecinado.id,
                    email: email,
                    valor: valor,
                })
                .then(() => {
                    setPetSelecionado(null);
                    setMensagem('Pet adotado com sucesso!');
                })
                .catch((error: AxiosError| any) => {
                   
                    //const errorsList = error.response?.data.errors;
                    // let errol = '';
                    // for (const property in errorsList) {
                    //     errol += errorsList[property];
                    // }
                    // setMensagem(errol);
                    setMensagem(error.response?.data.message);
                });
            } else {
                setMensagem('Preencha os campos corretamente');
            }
        }
    }

    function limparFormulario() {
        setEmail('');
        setValor('');
    }

    function validarDadosAdocao() {
        return email.length > 0 && valor.length > 0;
    }

    return{
        listaPets,
        petSelecinado,
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem, 
        setMensagem,
        adotar,
    };
}