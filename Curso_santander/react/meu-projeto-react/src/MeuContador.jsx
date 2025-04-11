import { useState } from 'react';
export default function MeuContador() {

    const [contador, setContador] = useState(0) //useState é um Hook

    function aumentar() {
        setContador(contador + 1)//setContador serve para atualizar o valor do contador
    }

    function diminuir() {
        setContador(contador - 1)//setContador serve para atualizar o valor do contador
    }

    if (contador > 10) {
        return (
            <div>
                <h1>Valor Muito Alto!!</h1>
                <button onclick={aumentar}>Aumentar</button>
                <button onclick={diminuir}>Diminuir</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Meu Contador: {contador}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onclick={diminuir}>Diminuir</button>
        </div>
    )
}