import type { PokemonCardProp } from "../../types/pokemon";
import "./PokemonCard.css";

export const PokemonCard = ({ pokemon, handleCardClick }: PokemonCardProp) => {
  return (
    <div className="pokemon-card" onClick={() => handleCardClick()}>
      <img src={pokemon.sprites.front_default ?? ""} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};
