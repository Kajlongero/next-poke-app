import AllPokemons from "./components/AllPokemons";
import ExplorePokemons from "./components/ExplorePokemons";

type Ctx = {
  searchParams: {
    [key: string]: string;
  }
}

export default function Home({ searchParams }: Ctx) {

  const offset = searchParams['offset'] ?? '0';
  const isValidOffset = isNaN(Number(offset)) ? '0' : offset;  

  return (
    <main className="p-4 mt-4">
      <AllPokemons offset={offset}/>
      <ExplorePokemons offset={offset} />
    </main>
  )
}
