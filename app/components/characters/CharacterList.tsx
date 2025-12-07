import { Character } from "@/lib/api/character";
import { CharacterCard } from "./CharacterCard";
import { useEpisodes, CharacterListId } from "@/app/hooks/useEpisodes";

interface CharacterListProps {
  listId: CharacterListId;
  characters: Character[];
}

export const CharacterList = ({ listId, characters }: CharacterListProps) => {
  const { setCharacter, selectedCharacters } = useEpisodes();

  const handleCharacterClick = (character: Character) => {
    setCharacter(listId, character);
  };

  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          selected={character.id === selectedCharacters[listId]?.id}
          onClick={() => handleCharacterClick(character)}
        />
      ))}
    </ul>
  );
};
