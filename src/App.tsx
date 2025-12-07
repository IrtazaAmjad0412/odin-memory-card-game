import { useEffect, useState } from "react";
import { loadAllPokemonDetails } from "./data/api.ts";
import { PokemonList } from "./components/PokemonList/PokemonList.tsx";
import type { PokemonCardItem } from "./types/pokemon.ts";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState<PokemonCardItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllPokemonDetails()
      .then((data) => setPokemon(data))
      .catch((err) => console.error("Error fetching Pokemon:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app-container">
      <PokemonList pokemon={pokemon} loading={loading} />
    </div>
  );
}

export default App;
