"use client";
import { Episode, fetchEpisodes } from "@/lib/api/episode";
import { useQuery } from "@tanstack/react-query";
import { AsyncView } from "../ui/AsyncView";
import { EpisodeList } from "./EpisodeList";
import { EpisodeListSkeleton } from "./EpisodeListSkeleton";

interface EpisodeSectionProps {
  title: string;
  episodesIds: string[];
}

export const EpisodeSection = ({ title, episodesIds }: EpisodeSectionProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["episodes", episodesIds],
    queryFn: () => fetchEpisodes(episodesIds),
    enabled: episodesIds.length > 0,
  });

  return (
    <div className="flex flex-col gap-4 p-8 rounded-lg bg-cyan-50 min-h-[400px]">
      <h2 className="text-xl font-bold">
        {title} ({episodesIds.length})
      </h2>
      <AsyncView<Episode[]>
        loading={isLoading}
        error={error}
        data={data}
        isEmpty={(data) => !data || data.length === 0}
        errorView={<div>Error loading episodes.</div>}
        emptyView={<div>No episodes found.</div>}
        loadingView={<EpisodeListSkeleton />}
      >
        {(data) => <EpisodeList episodes={data} />}
      </AsyncView>
    </div>
  );
};
