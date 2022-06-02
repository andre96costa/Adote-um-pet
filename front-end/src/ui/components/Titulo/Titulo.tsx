import { TituloStyled, Subtitulo } from "./Titulo.style";

interface TituloProps {
    titulo: string;
    subTitulo?: string | JSX.Element;
}

export default function Titulo({titulo, subTitulo}: TituloProps) {
    return (
       <>
            <TituloStyled>{titulo}</TituloStyled>
            <Subtitulo>{subTitulo}</Subtitulo>
       </>
    );
}