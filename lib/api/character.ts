export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  episode: string[];
}

export interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export async function fetchCharacters(
  page: number = 1,
  search: string = ""
): Promise<CharactersResponse> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`
  );
  return response.json();
}
