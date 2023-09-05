import PokemonCard from "@/app/components/PokemonCard";
import ShowMoreButton from "@/app/components/ShowMoreButton";
import { BASE_API } from "@/app/utils/API";
import { Metadata } from "next";
import Link from "next/link";

type Ctx = {
  params: {
    id: number | string;
  };
  children: React.ReactNode;
}

export async function generateMetadata ({ params }: Ctx): Promise<Metadata> {
  const pokemonData = await fetch(`${BASE_API}/${params.id}`);
  const { name, sprites: { front_default }, types }: Pokemon = await pokemonData.json();
  
  const typesToKeywords: string[] = [];

  types.forEach(({ slot, type: { name: n, url } }) => typesToKeywords.push(n)); 

  return {
    title: `${name.charAt(0).toUpperCase()}${name.substring(1, name.length)}`,
    icons: front_default,
    keywords: ['pokemon', name, ...typesToKeywords, 'pokewiki'],
  }
}

export async function getUniquePokemon(id: string | number): Promise<Pokemon> {
  if(isNaN(Number(id))) throw new Error ('invalid identifier');
  
  return fetch(`${BASE_API}/${id}`, {
    next: { revalidate: 180 }
  }).then((value) => value.json());
}


export default async function PokemonLayout({ params, children }: Ctx) {
  const { id, name, types, weight, height } = await getUniquePokemon(params.id);

  return (
    <main className="p-4 text-white mt-8">
      <section className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-y-6 sm:justify-evenly">
        <PokemonCard 
          id={params.id as string}
        />
        <div className="flex flex-col sm:justify-between">
          <div className="flex flex-col">
            <h2 
              className="text-xl"
            >
              {name.charAt(0).toUpperCase()}{name.substring(1, name.length)}
            </h2>
            <ul className="flex gap-x-3 mt-1">
              {types.map(({ type: { name }, slot }) => (
                <li key={`pokemon-type-${name}-slot-${slot}`} className="border border-purple-800 px-2 py-1 rounded-md">
                  {name.charAt(0).toUpperCase()}{name.substring(1, name.length)}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-y-1 mt-4">
              <p className="text-lg">Weight: {weight} in</p>
              <p className="text-lg">Height: {height} lbs</p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <ShowMoreButton 
              id={id as string}
            />
          </div>
        </div>
      </section>
      {children}
    </main>
  )
} 

