'use client';
import { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();
    const [formulario, setFormulario] = useState ({
        email:'',
        senha:''
    })

    const aoSubmeter = async(e) => {
        e.preventDefault()
        try {
            const result = await axios.post('http://localhost:8080/login', formulario)
            alert(result.data.message)
            router.push('/admin/noticia/criar')
        } catch (error) {
            alert(error.data.message)
        }
        
        c
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