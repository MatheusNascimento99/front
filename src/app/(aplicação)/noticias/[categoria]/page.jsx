import GridNoticias from "@/componentes/GridNoticias"

const noticias = [
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

const   NoticiasPage = ({params}) => {
    return (
        <div>
            <h1>{params.categoria}</h1>
            <GridNoticias noticias={noticias}/>
        </div>
        )
}
    
export default NoticiasPage

