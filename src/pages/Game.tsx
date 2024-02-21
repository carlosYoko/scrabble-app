import { useLocation, Link } from 'react-router-dom';
import PlayerTable from '../components/PlayerTable';

const Game = () => {
  const location = useLocation();
  const numberOfPlayers = location.state?.numberOfPlayers;

  const playersArray = Array.from({ length: numberOfPlayers });
  return (
    <>
      <div>ScrabbleApp</div>
      {playersArray.map((_, i) => (
        <PlayerTable key={i} />
      ))}
      <Link to={'/'}> Volver</Link>
    </>
  );
};

export default Game;
