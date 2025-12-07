"use client";
import { useEpisodes } from "@/app/hooks/useEpisodes";
import { EpisodeSection } from "./EpisodeSection";

export const EpisodesPanel = () => {
  const { episodes, selectedCharacters } = useEpisodes();

  if (
    !episodes.character1Episodes ||
    !episodes.character2Episodes ||
    !episodes.sharedEpisodes
  ) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <EpisodeSection
        title={`${selectedCharacters["1"]?.name} Episodes`}
        episodesIds={episodes.character1Episodes}
      />
      <EpisodeSection
        title="Shared Episodes"
        episodesIds={episodes.sharedEpisodes}
      />
      <EpisodeSection
        title={`${selectedCharacters["2"]?.name} Episodes`}
        episodesIds={episodes.character2Episodes}
      />
    </div>
  );
};
