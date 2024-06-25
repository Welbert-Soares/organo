import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const times = [
    'Programação',
    'Front-end',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Back-end',
    'Inovação e Gestão',
  ]


  const aoSalvar = (evento) => {
    evento.preventDefault()

    console.log("Salvando...")
  }

  return (


    <div>
      <section className="formulario">
        <form onSubmit={aoSalvar} >
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <CampoTexto obrigatorio={true} label="Nome" />
          <CampoTexto obrigatorio={true} label="Cargo" />
          <CampoTexto label="Imagem" />
          <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
          <Botao>
            Criar Card
          </Botao>
        </form>
      </section>
    </div>
  );
};

export default Formulario;
