import { PokemonCard } from "../PokemonCard/PokemonCard";
import type { PokemonListProps } from "../../types/pokemon";
import "./PokemonList.css";

export const PokemonList = ({ pokemon, loading, handleCardClick }: PokemonListProps) => {
  return (
    <div className="pokemon-list">
      {loading && <p>Loading Pokemon...</p>}
      {!loading && pokemon.length === 0 && <p>No Pokemon Found</p>}
      {!loading &&
        pokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            handleCardClick={() => handleCardClick(pokemon)}
          />
        ))}
    </div>
  );
};
