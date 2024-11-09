import { useState } from "react";
import Card from "./Card";
import "../styles/Form.module.css";


const Form = () => {
    const [nombre, setNombre] =useState("");
    const [color, setColor] =useState("");
    const [error, setError] = useState(false);
    const [envio, setEnvio] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidNombre = nombre.length >= 3 && !nombre.startsWith(" ");
        const isValidColor = color.length >= 6;

        if (isValidNombre && isValidColor) {
            setError(false);
            setEnvio(true);
        } else {
            setError(true);
            setEnvio(false);
        }

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Ingresa tu nombre</label>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <label>Ingresa tu color favorito</label>
            <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
             />
            <button type="submit">Enviar</button>
            {error ? <p style={{color: "red"}}> Por favor chequea que la información sea correcta </p> : null}
            
        </form>
        {envio && !error ? <Card nombre ={nombre} color ={color}/> : null}
    </div>
  )
}

export default Form
