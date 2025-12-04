"use client";
import { CharactersResponse, fetchCharacters } from "@/lib/api/character";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDebounce } from "@/app/hooks/useDebounce";
import { TextInput } from "../ui/TextInput";
import { CharacterList } from "./CharacterList";
import { CharacterListSkeleton } from "./CharacterListSkeleton";
import { AsyncView } from "../ui/AsyncView";
import { Pagination } from "../ui/Pagination";

interface CharacterSectionProps {
  id: string;
  title: string;
}
export const CharacterSection = ({ id, title }: CharacterSectionProps) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["characters", page, debouncedSearch],
    queryFn: () => fetchCharacters(page, debouncedSearch),
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-4 p-8 rounded-lg bg-cyan-50 min-h-full">
      <h2 className="text-2xl font-bold">{title}</h2>
      <TextInput
        placeholder="Search by character name"
        value={search}
        onChange={handleSearchChange}
      />

      <div className="flex-1">
        <AsyncView<CharactersResponse>
          loading={isLoading}
          error={error}
          data={data}
          loadingView={<CharacterListSkeleton />}
          errorView={
            <div className="text-red-500">Error loading characters.</div>
          }
          isEmpty={(data) => !data?.results || data.results.length === 0}
          emptyView={
            <div className="h-full flex items-center justify-center">
              No data found.
            </div>
          }
        >
          {(data) => (
            <>
              <CharacterList characters={data.results} sectionId={id} />
              <Pagination
                currentPage={page}
                totalPages={data.info.pages}
                onPageChange={setPage}
              />
            </>
          )}
        </AsyncView>
      </div>
    </div>
  );
};
