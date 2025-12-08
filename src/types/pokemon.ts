export type PokemonListItem = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
};

export type PokemonListProps = {
  pokemon: PokemonCardItem[];
  loading: boolean;
  handleCardClick: (pokemon: PokemonCardItem) => void;
};

export type PokemonCardItem = {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
  };
};

export type PokemonCardProp = {
  pokemon: PokemonCardItem;
  handleCardClick: () => void;
};
