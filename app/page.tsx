import { EpisodesPanel } from "./components/episodes/EpisodesPanel";
import { CharactersPanel } from "./components/characters/CharactersPanel";

export default function Home() {
  return (
    <main>
      <div className="grid gap-4">
        <div>
          <h2 className="text-2xl font-bold text-center">
            Rick and Morty Episodes Comparison by Characters
          </h2>
          <p className="text-gray-500 text-center">
            Select two characters to compare their episodes
          </p>
        </div>
        <CharactersPanel />
        <EpisodesPanel />
      </div>
    </main>
  );
}
