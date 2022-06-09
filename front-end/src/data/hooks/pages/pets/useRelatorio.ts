import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Relatorio } from "../../../@types/Relatorio";
import { ApiService } from "../../../services/ApiServices";

export function useRelatorio() {
    const [listaRelatorio, setListaRelatorio] = useState<Relatorio[]>([]);

    useEffect(() => {
        ApiService.get('/adocoes')
        .then((response) => {
            setListaRelatorio(response.data);
        })
        .catch((error: AxiosError) => {
            console.log(error.message);
        });
    }, []);

    return {
        listaRelatorio,
    }
}