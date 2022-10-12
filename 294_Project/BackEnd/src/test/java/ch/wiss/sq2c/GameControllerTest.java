package ch.wiss.sq2c;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import ch.wiss.sq2c.Controller.GameController;
import ch.wiss.sq2c.Repositorys.GameRepository;
import ch.wiss.sq2c.Repositorys.LeaderboardRepository;
import ch.wiss.sq2c.Repositorys.PlayerRepository;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.util.List;

@ExtendWith(SpringExtension.class)
@WebMvcTest
@AutoConfigureMockMvc
public class GameControllerTest {
    @MockBean
    private PlayerRepository playerRepository;

    @MockBean
    private GameRepository gameRepository;

    @MockBean
    private LeaderboardRepository leaderboardRepository;

    @Autowired
    private GameController gameController;

    @Autowired
    private MockMvc mockMvc;

    @Test
    @DisplayName("Check if the GamesController gets injected correctly")
    public void CheckGameInjectNotNull() throws Exception {
        assertThat(gameController).isNotNull();
    }

    @Test
    @DisplayName("Checks the Get request for all games")
    public void CheckGetAllGamesIsOk() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/game/all/"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    public void CheckSearchGameIsOk() throws Exception {
        when(gameRepository.findByNameContaining(anyString())).thenReturn(List.of(new Game()));

        mockMvc.perform(MockMvcRequestBuilders.get("/game/search/?name=Snake"))
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON));

    }
}
