import type { PokemonCardItem, PokemonListResponse } from "../types/pokemon.ts";

export const fetchAllPokemon = async (): Promise<PokemonListResponse> => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
    if (!res.ok) {
      throw new Error("Failed to fetch all Pokemon!");
    }
    return await res.json();
  } catch (err) {
    console.error("Api Error:", err);
    throw err;
  }
};

export const fetchPokemonDetails = async (url: string): Promise<PokemonCardItem> => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch Pokemon details!");
    }
    return await res.json();
  } catch (err) {
    console.error("Detail Fetch Error:", err);
    throw err;
  }
};

export const loadAllPokemonDetails = async (): Promise<PokemonCardItem[]> => {
  const pokemonList = await fetchAllPokemon();
  const detailedPokemonList = pokemonList.results.map((pokemon) =>
    fetchPokemonDetails(pokemon.url)
  );
  return await Promise.all(detailedPokemonList);
};
