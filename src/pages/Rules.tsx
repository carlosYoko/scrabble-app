import { Link } from 'react-router-dom';
const Rules = () => {
  return (
    <>
      <h1 id="title">Normas</h1>
      <div className="rules-container">
        <ul>
          <li>
            El que empieza primero no tiene el beneficio de doble punto de
            palabra.
          </li>
          <li>
            El creador de la App puede cambiar las reglas a medida que le
            convenga.
          </li>
        </ul>
      </div>
      <br />
      <Link to={'/'}>Volver</Link>
    </>
  );
};

export default Rules;
