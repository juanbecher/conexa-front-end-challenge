import { Episode } from "@/lib/api/episode";

export const EpisodeList = ({ episodes }: { episodes: Episode[] }) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-[300px] overflow-y-auto pr-2">
      {episodes.map((episode) => (
        <li key={episode.id} className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-md font-bold">{episode.name}</h3>
          <p className="text-gray-500">{episode.air_date}</p>
          <p className="text-gray-500">{episode.episode}</p>
        </li>
      ))}
    </ul>
  );
};
