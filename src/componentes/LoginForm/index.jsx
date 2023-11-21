'use client';
import { useState } from "react"

const LoginForm = () => {
    const [formulario, setFormulario] = useState ({
        email:'',
        senha:''
    })

    const aoSubmeter = (e) => {
        e.preventDefault()
        console.log('enviado', formulario)
    }

    const AlterarValores =(e) => {
        const {name, value} = e.target
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return (
        <form onSubmit={aoSubmeter} >
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={AlterarValores}/>
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" onChange={AlterarValores} />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )

}    

export default LoginForm