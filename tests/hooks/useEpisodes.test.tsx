import { useEpisodes, EpisodesProvider } from "@/app/hooks/useEpisodes";
import { renderHook } from "@testing-library/react";
import { act } from "react";
import React from "react";
import { mockRickSanchez, mockJohnnyDepp } from "../mocks/characters";

describe("useEpisodes", () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <EpisodesProvider>{children}</EpisodesProvider>
  );

  test("sets character 1", () => {
    const { result } = renderHook(() => useEpisodes(), { wrapper });

    act(() => {
      result.current.setCharacter("1", mockRickSanchez);
    });

    expect(result.current.selectedCharacters["1"]).toEqual(mockRickSanchez);
    expect(result.current.episodes.character1Episodes).toEqual(["1", "2", "8"]);
  });

  test("sets character 2", () => {
    const { result } = renderHook(() => useEpisodes(), { wrapper });

    act(() => {
      result.current.setCharacter("2", mockJohnnyDepp);
    });

    expect(result.current.selectedCharacters["2"]).toEqual(mockJohnnyDepp);
    expect(result.current.episodes.character2Episodes).toEqual(["8"]);
  });

  test("calculates shared episodes", () => {
    const { result } = renderHook(() => useEpisodes(), { wrapper });

    act(() => {
      result.current.setCharacter("1", mockRickSanchez);
      result.current.setCharacter("2", mockJohnnyDepp);
    });

    expect(result.current.episodes.character1Episodes).toEqual(["1", "2", "8"]);
    expect(result.current.episodes.character2Episodes).toEqual(["8"]);
    expect(result.current.episodes.sharedEpisodes).toEqual(["8"]);
  });
});
