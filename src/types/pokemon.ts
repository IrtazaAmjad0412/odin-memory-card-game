export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListProps = {
  pokemon: PokemonListItem[];
  loading: boolean;
};
