import type { PokemonListResponse } from "../types/pokemon.ts";

export const fetchAllPokemon = async (): Promise<PokemonListResponse> => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
    if (!res.ok) {
      throw new Error("Failed to fetch all Pokémon!");
    }
    return await res.json();
  } catch (error) {
    console.error("Api Error:", error);
    throw error;
  }
};
