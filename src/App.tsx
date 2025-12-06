import { useEffect, useState } from "react";
import { fetchAllPokemon } from "./data/api.ts";
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
    <>
      <div>
        {loading && <p>Loading Pokemon...</p>}
        {!loading && pokemon.length === 0 && <p>No Pokemon Found</p>}
        {pokemon.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
