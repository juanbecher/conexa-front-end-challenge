import { Character } from "@/lib/api/character";
import Image from "next/image";
import { CharacterStatus } from "./CharacterStatus";
import { cn } from "@/lib/utils/cn";

interface CharacterCardProps {
  character: Character;
  selected: boolean;
  onClick: () => void;
}
export const CharacterCard = ({
  character,
  selected,
  onClick,
}: CharacterCardProps) => {
  return (
    <li onClick={onClick} className="cursor-pointer">
      <div
        className={cn(
          "bg-white rounded-lg shadow-md p-4 flex items-center justify-start gap-4 hover:bg-gray-100 transition-colors",
          selected && "bg-gray-100 border-2 border-cyan-600"
        )}
      >
        <Image
          src={character.image}
          alt={character.name}
          width={100}
          height={100}
          className="rounded-md object-cover object-center"
        />
        <div>
          <h3 className="text-xl font-bold">{character.name}</h3>
          <div className="flex items-center gap-2">
            <CharacterStatus status={character.status} />
            <p className="text-gray-500">{character.species}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
