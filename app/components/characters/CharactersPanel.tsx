import { CharacterSection } from "./CharacterSection";

export const CharactersPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <CharacterSection id="1" title="Character #1" />
      <CharacterSection id="2" title="Character #2" />
    </div>
  );
};
