export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
}

export async function fetchEpisodes(ids: string[]): Promise<Episode[]> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/${ids.join(",")}`
  );
  const data = await response.json();
  return Array.isArray(data) ? data : [data];
}
