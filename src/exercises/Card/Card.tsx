// Props 

import './Card.css'

interface myProps {
    title: string;
    description: string;
  }

function Card(props: myProps) {
  return (
    <>
      <h1 className="titulo">Card</h1>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img
        src="https://i.imgur.com/H88yIo2.png"
        alt="Imagem Tela Inicial"
        className="img"
      />
    </>
  );
}

export default Card