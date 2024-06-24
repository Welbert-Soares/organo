import "./Formulario.css";
import CampoTexto from "../CampoTexto";

const Formulario = () => {
  return (
    <div>
      <section className="formulario">
        <form>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <CampoTexto label="Nome" />
          <CampoTexto label="Cargo" />
          <CampoTexto label="Imagem" />
        </form>
      </section>
    </div>
  );
};

export default Formulario;
