'use client';
import { useState } from "react";



const CadastroForm = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSubmeter = (e) => {
        //TODO enviar para o servidor
        e.preventDefault()
        console.log('Enviado', nome, email, senha)
    }

    const AlterarValores = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'nome':
                setNome(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'senha':
                setSenha(value)
                break;
        }
    }

    return (
        <form onSubmit={aoSubmeter}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="" onChange={AlterarValores} />
            </div>
            <div>
                <label htmlFor="e-mail">E-mail</label>
                <input type="text" name="email" id="" onChange={AlterarValores} />
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="" onChange={AlterarValores} />
            </div>
            <button type="submit" >Enviar</button>
        </form>

    )

}

export default CadastroForm