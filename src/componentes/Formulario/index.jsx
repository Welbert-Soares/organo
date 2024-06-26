import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
 

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();

    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <div>
      <section className="formulario">
        <form onSubmit={aoSalvar}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <CampoTexto
            obrigatorio={true}
            label="Nome"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
          />
          <CampoTexto
            obrigatorio={true}
            label="Cargo"
            valor={cargo}
            aoAlterado={(valor) => setCargo(valor)}
          />
          <CampoTexto
            label="Imagem"
            valor={imagem}
            aoAlterado={(valor) => setImagem(valor)}
          />
          <ListaSuspensa 
            obrigatorio={true} 
            label="Time" 
            itens={props.times} 
            valor={time}
            aoAlterado={valor => setTime(valor)}
          />
          <Botao>Criar Card</Botao>
        </form>
      </section>
    </div>
  );
};

export default Formulario;
