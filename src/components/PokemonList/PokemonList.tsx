import type { PokemonListProps } from "../../types/pokemon";

export const PokemonList = ({ pokemon, loading }: PokemonListProps) => {
  return (
    <>
      <div>
        {loading && <p>Loading Pokemon...</p>}
        {!loading && pokemon.length === 0 && <p>No Pokemon Found</p>}
        {!loading &&
          pokemon.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>)}
      </div>
    </>
  );
};
