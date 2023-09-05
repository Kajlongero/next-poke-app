import { BASE_API } from "@/app/utils/API";
import PokemonCard from "../PokemonCard";

type Props = {
  offset: string | number;
}

async function getAllPokemons(offset: string | number): Promise<PokemonsApiResponse> {
  if(isNaN(Number(offset))) throw new Error('invalid params');

  if(offset === 0) 
    return fetch(`${BASE_API}/?offset=${offset}`).then((value) => value.json());

  return fetch(`${BASE_API}/?offset=${offset}`, {
    next: {
      revalidate: 60
    }
  }).then((value) => value.json());
}

export default async function AllPokemons({ offset }: Props) {
  const { results }: PokemonsApiResponse = await getAllPokemons(offset);

  return (
    <section className="grid max-sm:grid-cols-1 max-sm:gap-y-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 place-items-center gap-4">
      {results.map(({ name, url }) => { 
        const id = url.split('/').at(-2) as string;
        return (
          <PokemonCard 
            id={id} 
            name={name} 
            width={225}
            height={225}
            key={`pokemon-id-${id}`} 
          />
        )
      })}
    </section>
  )
} 