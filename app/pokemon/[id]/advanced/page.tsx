import { PokemonLocationArea } from "@/app/interfaces/locarea.interface";
import { BASE_API } from "@/app/utils/API";
import transformName from "@/app/utils/transformName";

type Ctx = { params: { id: string } };

async function pokemonData (id: string | number): Promise<PokemonLocationArea[]> {
  return fetch(`${BASE_API}/${id}/encounters`, {
      next: {
        revalidate: 120,
      }
    }).then((val) => val.json());
}

export default async function PokemonCharacteristics({ params }: Ctx) {
  
  const data: PokemonLocationArea[] = await pokemonData(params.id);
  
  return (
    <section className="w-4/5 mx-auto mt-16 text-white">
      <h2 className="pb-2">Pokemon Location Area</h2>
      <hr className="mb-2"/>
      <div className="flex flex-col gap-y-4">
      {data.map(({location_area: { name, url }, version_details }, ind) => (
        <article key={`pokemon-location-area-${url}`}>
          <h2 className="font-bold">Can be found on: </h2>
          <p className="text-lg">{transformName(name)}</p>
          <h2 className="mt-4 font-bold">On those game versions: </h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {version_details.map(({ version: { name, url } }, index) => (
              <li 
                key={`${url}-index-${index}`} 
                className="border border-purple-700 py-1 px-4 rounded-sm"
              >
                Pokemon {name}
              </li>
            ))}
          </ul>
        </article>
      ))}
      </div>  
    </section>
  )
} 