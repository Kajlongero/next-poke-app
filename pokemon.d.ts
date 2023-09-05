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

type PokemonId = number | string;

type PokemonSprites = {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
}

type PokemonTypes = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

type Pokemon = {
  id: PokemonId;
  name: string;
  sprites: PokemonSprites,
  types: PokemonTypes[];
  weight: number;
  height: number;
  
}