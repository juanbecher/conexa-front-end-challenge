import { EpisodeList } from "@/app/components/episodes/EpisodeList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockedEpisodes = [
  {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
  },
  {
    id: 2,
    name: "Lawnmower Dog",
    air_date: "December 9, 2013",
    episode: "S01E02",
  },
];

describe("EpisodeList", () => {
  it("should render the episode list", () => {
    render(<EpisodeList episodes={mockedEpisodes} />);
    expect(screen.getByText("Pilot")).toBeInTheDocument();
    expect(screen.getByText("Lawnmower Dog")).toBeInTheDocument();
  });

  it("should not render the episode list if there are no episodes", () => {
    render(<EpisodeList episodes={[]} />);
    expect(screen.queryByText("Pilot")).not.toBeInTheDocument();
    expect(screen.queryByText("Lawnmower Dog")).not.toBeInTheDocument();
  });
});
