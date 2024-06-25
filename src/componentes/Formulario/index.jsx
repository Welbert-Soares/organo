import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

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

  return (
    <div>
      <section className="formulario">
        <form>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <CampoTexto label="Nome" />
          <CampoTexto label="Cargo" />
          <CampoTexto label="Imagem" />
          <ListaSuspensa label="Time" itens={times} />
        </form>
      </section>
    </div>
  );
};

export default Formulario;
