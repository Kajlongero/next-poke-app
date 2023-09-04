type SmallPokemon = {
  name: string;
  url: string;
}

type PokemonsApiResponse = {
  count: number;
  next: string;
  previous: string;
  results: SmallPokemon[];
}