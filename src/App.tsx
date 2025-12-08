import { useEffect, useState } from "react";
import { loadAllPokemonDetails } from "./data/api.ts";
import { AppHeader } from "./components/AppHeader/AppHeader.tsx";
import { PokemonList } from "./components/PokemonList/PokemonList.tsx";
import type { PokemonCardItem } from "./types/pokemon.ts";
import "./App.css";
import { shuffleArray } from "./utils/utils.ts";

function App() {
  const [pokemon, setPokemon] = useState<PokemonCardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState<string[]>([]);

  useEffect(() => {
    loadAllPokemonDetails()
      .then((data) => setPokemon(shuffleArray(data)))
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
      setScore(score + 1);
      setClickedPokemon([...clickedPokemon, clicked.name]);
    }
    setPokemon(shuffleArray(pokemon));
  };

  return (
    <div className="app-container">
      <AppHeader score={score} highScore={highScore} />
      <PokemonList
        pokemon={pokemon}
        loading={loading}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}

export default App;
