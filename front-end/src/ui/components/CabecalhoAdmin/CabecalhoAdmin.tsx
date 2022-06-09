import { CabecalhoContainer, LinksContainer, Logo } from "./CabecalhoAdmin.style";
import { Link, Box } from "@mui/material";
import NextLink from 'next/link';

export default function CabecalhoAdmin() {
    return (
        <CabecalhoContainer>
            <div>
                <Link component={NextLink} href={'/'}><a><Logo src={'/imagem/logo.svg'} alt={'Adote um pet'}/></a></Link>
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}><a>Cadastrar pet</a></Link>
                    <Link component={NextLink} href={'/pets/relatorio'}>
                        <a>
                            Relatório 
                            <Box 
                                component={'span'}
                                sx={{display: {sm: 'initial', xs: 'none'}}}
                            > de adoção
                            </Box>
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </CabecalhoContainer>
    );
}