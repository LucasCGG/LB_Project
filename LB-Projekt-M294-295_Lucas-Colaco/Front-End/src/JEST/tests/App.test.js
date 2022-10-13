import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import snake from '../../Games/Snake-game'

/* Mocked Components */
jest.mock("../../Home", () => () => <div>Mocked_Home</div>);
jest.mock("../../About", () => () => <div>Mocked_About</div>);
jest.mock("../../Leaderboard", () => () => <div>Mocked_Leaderboard</div>);
jest.mock("../../OverviewGames", () => () => <div>Mocked_OverviewGames</div>);
jest.mock("../../AddGame", () => () => <div>Mocked_AddGame</div>);
jest.mock("../../Games/Snake-game", () => () => <div>Mocked_Snake</div>);
jest.mock("../../UserRegister", () => () => <div>Mocked_UserRegister</div>);
jest.mock("../../UserLogin", () => () => <div>Mocked_UserLogin</div>);
jest.mock("../../User", () => () => <div>Mocked_User</div>);
jest.mock("../../notFound", () => () => <div>Mocked_NotFound</div>);
jest.mock("../../GlobalNavigation", () => () => <div> Mocked_GlobalNavigation</div>);

describe("Routing tests for App.js", () => {
    test("Default route should render Home component", () => {
      // Arrange

      // Act
      render(
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      );

      // Assert
      expect(screen.getByText("Mocked_Home"))
      expect(screen.getByText("Mocked_GlobalNavigation"))
    });

    test("Rules route should render Rule component", () => {
      // Arrange

      // Act
      render(
        <MemoryRouter initialEntries={["/About"]}>
          <App/>
        </MemoryRouter>
      );

      // Assert
      expect(screen.getByText("Mocked_About"))
      expect(screen.getByText("Mocked_GlobalNavigation"))
    });

    test("AboutUs route should render AboutUs component", () => {
      // Arrange

      // Act
      render(
        <MemoryRouter initialEntries={["/Leaderboard"]}>
          <App/>
        </MemoryRouter>
      );

      // Assert
      expect(screen.getByText("Mocked_Leaderboard"))
      expect(screen.getByText("Mocked_GlobalNavigation"))
    });

    test("Quiz route should render GameSession component", () => {
      // Arrange

      // Act
      render(
        <MemoryRouter initialEntries={["/OverviewGames"]}>
          <App/>
        </MemoryRouter>
      );

      // Assert
      expect(screen.getByText("Mocked_OverviewGames"))
      expect(screen.getByText("Mocked_GlobalNavigation"))
    });

    test("Unknown path should trigger NotFound component", () => {
      // Arrange

      // Act
      render(
        <MemoryRouter initialEntries={["/1337"]}>
          <App/>
        </MemoryRouter>
      );

      // Assert
      expect(screen.getByText("Mocked_NotFound"))
    });
});