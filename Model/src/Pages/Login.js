/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import './Login.css'
import api from '../services/api'


export default function Login() {
    
    const [usuario, setUuario] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await api.post('/login',{
            usuario,
            senha
        })
        if(response.data.status === 1){
            console.log("Logado");            
        }else{
            console.log(response.data.message);
        }
    }
    return (
        <div className="container">
            <div className="login-container">
                <header>
                    <h1>Login</h1>
                </header>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Usuario"
                        value={usuario}
                        onChange={
                            e => setUuario(e.target.value)
                        } />
                    <input placeholder="Senha" type="password"
                        value={senha}
                        onChange={
                            e => setSenha(e.target.value)
                        } />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}