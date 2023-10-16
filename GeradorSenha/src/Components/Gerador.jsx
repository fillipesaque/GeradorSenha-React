import GeradorStyle from './Gerador.module.css'
import { useState } from 'react'

function GeradorSenha (){

    const [password , setPassword] = useState('')
    const [text , setText] = useState('Copiar')

    function Generate (){
        const character =  "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
        const length = 12
        let newPassword = ''
        for (let i = 0; i <length; i++) {   
            const position = Math.floor(Math.random() * character.length)       
            newPassword += character[position]
        }
        setPassword(newPassword)
        setText('Copiar')
    }

    function CopyText (){
         navigator.clipboard.writeText(password)
         setText('Copiado')
     }

    return(
        <div className={GeradorStyle.pai}>
            <h1>Gerador De Senhas</h1>
            <div className={GeradorStyle.btnContainer}>
                <button onClick={Generate}>
                    Gerar
                </button>
                <button onClick={CopyText}>
                    {text}
                </button>
            </div>
            <div>
                {password}
            </div>
        </div>
    )
}

export default GeradorSenha