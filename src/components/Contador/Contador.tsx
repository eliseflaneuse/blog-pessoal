import { useState } from 'react'

function Contador() {
    const [valor = 0, setValor] = useState(0);
  
    function handleClick() {
      setValor(valor + 1);
    }
  
    return (
      <div>
        <p>O valor é: {valor}</p>
        <button onClick={handleClick}>Adicionar 1</button>
      </div>
    );
}

export default Contador