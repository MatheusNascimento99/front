'use client'
import { useState } from "react";  

const CadastroNoticiaForm =() => {

const [titulo, setTitulo] = useState('')
const [img, setImg] = useState('')
const [texto, setTexto] = useState('')

    const aoSubmeter= (e) =>{
        e.preventDefault();
        console.log('Enviado', titulo, img, texto)
    }

    const AlterarValores = (e) =>{
        const {name, value} =e.target;
        if (name === 'titulo'){
            setTitulo(value)
        }

        if (name === 'img'){
            setImg(value)
        }

        if (name === 'texto'){
            setTexto(value)
        }
    }


    return(
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="Titulo">Titulo</label>
                <input type="text" name="titulo" onChange={AlterarValores} />
            </div>
            <div>
                <label htmlFor="img">Imagem</label>
                <input type="text" name="img" onChange={AlterarValores} />
            </div>
            <div>
                <label htmlFor="texto">Texto</label>
                <textarea type="text" name="texto" onChange={AlterarValores} />
            </div>
            <button type="submit">Criar Notícia</button>
        </form>
    )
}
export default CadastroNoticiaForm