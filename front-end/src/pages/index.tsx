import type { NextPage } from 'next';
import Lista from '../ui/components/Lista/Lista';
import Titulo from '../ui/components/Titulo/Titulo';


const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
        titulo={"asdasdas"} 
        subTitulo={<span>
                    Como um pequeno valor mensal, <br /> você pode <strong>adotar um pet virtualmente</strong>.
                  </span>} 
      />

      <Lista 
        pets={[
          {
            id: 1,
            nome: 'Bidu',
            historia: 'dasdasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
            foto: 'http://veterinariadavinci.com.br/blog/wp-content/uploads/2017/04/as-menores-racas-de-cachorro-do-mundo.jpg',
          },
          {
            id: 2,
            nome: 'Scooby',
            historia: 'dasdasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
            foto: 'http://veterinariadavinci.com.br/blog/wp-content/uploads/2017/04/as-menores-racas-de-cachorro-do-mundo.jpg',
          },
        ]}
      />
    </div>
  )
}

export default Home
