package ch.wiss.sq2c.Repositorys;

import java.util.*;

import javax.validation.Valid;

import org.springframework.data.repository.CrudRepository;

import ch.wiss.sq2c.Leaderboard;
import ch.wiss.sq2c.Player;

public interface PlayerRepository extends CrudRepository<Player, Integer> {
    List<Player> findByUsernameContaining(String username);
}