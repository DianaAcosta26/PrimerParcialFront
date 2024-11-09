
const Card = ({nombre, color}) => {
  return (
    <div className="card">
      <h2> Hola {nombre}</h2>
        <h3>Sabemos que tu color favorito es:</h3>
          {color}
    </div>
  )
}

export default Card
