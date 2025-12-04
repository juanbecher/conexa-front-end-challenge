import { CharacterSection } from "./components/characters/CharacterSection";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Section 1 */}
        <CharacterSection id="1" title="Character #1" />
        {/* Section 2 */}
        <CharacterSection id="2" title="Character #2" />
      </div>
    </main>
  );
}
