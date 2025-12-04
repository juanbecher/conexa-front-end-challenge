import { Character } from "@/lib/api/character";
import { CharacterCard } from "./CharacterCard";

interface CharacterListProps {
  sectionId: string;
  characters: Character[];
}

export const CharacterList = ({
  sectionId,
  characters,
}: CharacterListProps) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          selected={false}
          onClick={() =>
            console.log(sectionId, character.id, character.episode)
          }
        />
      ))}
    </ul>
  );
};
