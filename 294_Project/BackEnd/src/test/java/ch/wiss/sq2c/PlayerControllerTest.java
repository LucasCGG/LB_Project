package ch.wiss.sq2c;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.*;

import ch.wiss.sq2c.Controller.PlayerController;
import ch.wiss.sq2c.Repositorys.GameRepository;
import ch.wiss.sq2c.Repositorys.LeaderboardRepository;
import ch.wiss.sq2c.Repositorys.PlayerRepository;

@ExtendWith(SpringExtension.class)
@WebMvcTest
@AutoConfigureMockMvc
public class PlayerControllerTest {
    @MockBean
    private PlayerRepository playerRepository;

    @MockBean
    private GameRepository gameRepository;

    @MockBean
    private LeaderboardRepository leaderboardRepository;

    @Autowired
    private PlayerController playerController;

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void CheckPlayerControllerInjectNotNull() throws Exception {
        assertThat(playerController).isNotNull();
    }

}
