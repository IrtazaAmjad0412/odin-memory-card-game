import { useEffect, useState } from "react";
import { loadAllPokemonDetails } from "./data/api.ts";
import { AppHeader } from "./components/AppHeader/AppHeader.tsx";
import { PokemonList } from "./components/PokemonList/PokemonList.tsx";
import { WinModal } from "./components/WinModal/WinModal.tsx";
import { capitalizeName, shuffleArray } from "./utils/utils.ts";
import type { PokemonCardItem } from "./types/pokemon.ts";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState<PokemonCardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState<string[]>([]);
  const [showWinModal, setShowWinModal] = useState(false);

  useEffect(() => {
    loadAllPokemonDetails()
      .then((data) => {
        const formattedData = capitalizeName(data);
        setPokemon(shuffleArray(formattedData));
      })
      .catch((err) => console.error("Error fetching Pokemon:", err))
      .finally(() => setLoading(false));
  }, []);

  const handleCardClick = (clicked: PokemonCardItem) => {
    if (clickedPokemon.includes(clicked.name)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setClickedPokemon([]);
    } else {
      const newScore = score + 1;
      if (newScore === pokemon.length) {
        setHighScore(newScore);
        setShowWinModal(true);
      }
      setScore(newScore);
      setClickedPokemon([...clickedPokemon, clicked.name]);
    }
    setPokemon(shuffleArray(pokemon));
  };

  const restartGame = () => {
    setScore(0);
    setClickedPokemon([]);
    setPokemon(shuffleArray([...pokemon]));
    setShowWinModal(false);
  };

  return (
    <div className="app-container">
      <AppHeader score={score} highScore={highScore} />
      {showWinModal ? (
        <WinModal restartGame={restartGame} />
      ) : (
        <PokemonList
          pokemon={pokemon}
          loading={loading}
          handleCardClick={handleCardClick}
        />
      )}
    </div>
  );
}

export default App;
