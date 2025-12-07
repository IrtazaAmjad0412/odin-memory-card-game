import { useEffect, useState } from "react";
import { fetchAllPokemon } from "./data/api.ts";
import { PokemonList } from "./components/PokemonList/PokemonList.tsx";
import type { PokemonListItem } from "./types/pokemon.ts";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllPokemon()
      .then((data) => setPokemon(data.results))
      .catch((error) => console.error("Error fetching Pokemon:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <PokemonList pokemon={pokemon} loading={loading} />
    </div>
  );
}

export default App;
