import './CampoTexto.css'

const CampoTexto = (props) => {
  const placehoderModificada = `Digite o seu ${props.label}...`

  return (
    <div className="campo-texto">
      <label>
        { props.label }
      </label>
      <input required={props.obrigatorio} placeholder={placehoderModificada} />
    </div>
  )
}

export default CampoTexto
