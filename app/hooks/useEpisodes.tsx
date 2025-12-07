"use client";
import { Character } from "@/lib/api/character";
import React, { createContext, useContext, useState } from "react";

export type CharacterListId = "1" | "2";

type EpisodesContextType = null | {
  selectedCharacters: Record<CharacterListId, Character | null>;
  episodes: {
    character1Episodes: string[] | undefined;
    character2Episodes: string[] | undefined;
    sharedEpisodes: string[] | undefined;
  };
  setCharacter: (listId: CharacterListId, character: Character | null) => void;
};

const EpisodesContext = createContext<EpisodesContextType>(null);

export const EpisodesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characters, setCharacters] = useState<
    Record<CharacterListId, Character | null>
  >({
    "1": null,
    "2": null,
  });

  const setCharacter = (
    listId: CharacterListId,
    character: Character | null
  ) => {
    setCharacters((prev) => ({ ...prev, [listId]: character }));
  };

  const character1Episodes = characters["1"]?.episode.map(
    (episodeUrl) => new URL(episodeUrl).pathname.split("/").pop() || ""
  );
  const character2Episodes = characters["2"]?.episode.map(
    (episodeUrl) => new URL(episodeUrl).pathname.split("/").pop() || ""
  );

  const sharedEpisodes = character1Episodes?.filter((episode) =>
    character2Episodes?.includes(episode)
  );

  return (
    <EpisodesContext.Provider
      value={{
        selectedCharacters: characters,
        episodes: { character1Episodes, character2Episodes, sharedEpisodes },
        setCharacter,
      }}
    >
      {children}
    </EpisodesContext.Provider>
  );
};

export const useEpisodes = () => {
  const context = useContext(EpisodesContext);
  if (!context) {
    throw new Error("useEpisodes must be used within an EpisodesProvider");
  }
  return context;
};
