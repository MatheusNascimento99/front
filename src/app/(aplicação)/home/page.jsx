import Noticia from "@/componentes/Noticia/noticia"

const Noticias = [
    {
        id: 1,
        titulo:'Noticia 1',
        img:'http://via.placeholder.com/150',
        texto:'Texto da <b>noticia</b>'
    },{
        id: 2,
        titulo:'Noticia 2',
        img:'http://via.placeholder.com/150',
        texto:'Texto da <b>noticia</b>'
    },{
        id: 3,
        titulo:'Noticia 3',
        img:'http://via.placeholder.com/150',
        texto:'Texto da <b>noticia</b>'
    }

]

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            { Noticias.map(noticia =>
            <Noticia key={ noticia.id } noticia={ noticia } />)

            }
        </div>
    )
}

export default HomePage

