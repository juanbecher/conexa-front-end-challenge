import { Character } from "@/lib/api/character";

export const mockRickSanchez = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/8",
  ],
};

export const mockJohnnyDepp = {
  id: 183,
  name: "Johnny Depp",
  status: "Alive",
  species: "Human",
  image: "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
  episode: ["https://rickandmortyapi.com/api/episode/8"],
};

export const mockedCharacters: Character[] = [mockRickSanchez, mockJohnnyDepp];
