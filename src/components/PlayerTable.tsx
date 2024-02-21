import { ChangeEvent, useState } from 'react';

const PlayerTable = () => {
  const [playerName, setPlayerName] = useState('');
  const [addOrSubstract, setAddOrSubstract] = useState<number | string | null>(
    null
  );
  const [score, setScore] = useState(0);

  const handleAddOrSubstract = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = value ? +value : null;
    setAddOrSubstract(parsedValue);
  };

  const handleAdd = () => {
    if (addOrSubstract !== null) {
      setScore(score + +addOrSubstract!);
      setAddOrSubstract('');
    }
  };

  const handleSubstract = () => {
    if (addOrSubstract !== null || addOrSubstract !== '') {
      setScore(score - +addOrSubstract!);
      setAddOrSubstract('');
    }
  };

  const handleReset = () => {
    const isOk = confirm('¿Quieres borrar toda la puntuación?');
    if (isOk) {
      setScore(0);
    }
  };

  return (
    <>
      <div className="gamer-table">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <p>Total: {score}</p>
        <input
          className="input-add-or-substract"
          type="number"
          value={addOrSubstract!}
          onChange={handleAddOrSubstract}
        />
        <br />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubstract}>-</button>
        <button onClick={handleReset}>R</button>
      </div>
    </>
  );
};

export default PlayerTable;
