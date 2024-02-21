import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedNumberOfPlayers = Number(e.target.value);
    setNumberOfPlayers(selectedNumberOfPlayers);
    navigate('/game', { state: { numberOfPlayers: selectedNumberOfPlayers } });
  };

  return (
    <>
      <h1>ScrabbleApp</h1>
      <p>Selecciona el numero de jugadores:</p>
      <select name="" id="" value={numberOfPlayers} onChange={handleChange}>
        <option value="">Jugadores</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
    </>
  );
};

export default Home;
