import { cn } from "@/lib/utils/cn";

const getStatusColor = (status: string) => {
  const normalizedStatus = status.toLowerCase();
  switch (normalizedStatus) {
    case "alive":
      return "bg-green-400 text-white";
    case "dead":
      return "bg-red-400 text-white";
    case "unknown":
      return "bg-gray-400 text-white";
    default:
      return "bg-gray-400 text-white";
  }
};

interface CharacterStatusProps {
  status: string;
}

export const CharacterStatus = ({ status }: CharacterStatusProps) => {
  return (
    <span
      className={cn(
        "inline-block px-2 py-1 text-xs font-semibold rounded-full",
        getStatusColor(status)
      )}
    >
      {status}
    </span>
  );
};
