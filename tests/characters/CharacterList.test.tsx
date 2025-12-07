import { CharacterList } from "@/app/components/characters/CharacterList";
import { EpisodesProvider, useEpisodes } from "@/app/hooks/useEpisodes";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { mockedCharacters } from "../mocks/characters";

jest.mock("../../app/hooks/useEpisodes");

describe("CharacterList", () => {
  const mockSetCharacter = jest.fn();

  beforeEach(() => {
    jest.mocked(useEpisodes).mockReturnValue({
      selectedCharacters: {
        "1": null,
        "2": null,
      },
      setCharacter: mockSetCharacter,
      episodes: {
        character1Episodes: undefined,
        character2Episodes: undefined,
        sharedEpisodes: undefined,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the character list", () => {
    render(<CharacterList listId="1" characters={mockedCharacters} />);
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Johnny Depp")).toBeInTheDocument();
  });

  it("should not render the character list if there are no characters", () => {
    render(<CharacterList listId="1" characters={[]} />);
    expect(screen.queryByText("Rick Sanchez")).not.toBeInTheDocument();
    expect(screen.queryByText("Johnny Depp")).not.toBeInTheDocument();
  });

  test("clicking item in section 1 calls setCharacter with listId 1", () => {
    render(<CharacterList listId="1" characters={mockedCharacters} />);

    fireEvent.click(screen.getByText("Rick Sanchez"));

    expect(mockSetCharacter).toHaveBeenCalledWith("1", mockedCharacters[0]);
  });

  test("clicking item in section 2 calls setCharacter with listId 2", () => {
    render(<CharacterList listId="2" characters={mockedCharacters} />);

    fireEvent.click(screen.getByText("Johnny Depp"));

    expect(mockSetCharacter).toHaveBeenCalledWith("2", mockedCharacters[1]);
  });

  test("marks selected characters correctly", () => {
    jest.mocked(useEpisodes).mockReturnValue({
      selectedCharacters: {
        "1": mockedCharacters[1],
        "2": null,
      },
      setCharacter: mockSetCharacter,
      episodes: {
        character1Episodes: undefined,
        character2Episodes: undefined,
        sharedEpisodes: undefined,
      },
    });

    render(<CharacterList listId="1" characters={mockedCharacters} />);

    const johnnyDeppButton = screen.getByTestId(
      `character-button-${mockedCharacters[1].id}`
    );
    expect(johnnyDeppButton).toHaveAttribute("data-selected", "true");
  });
});
