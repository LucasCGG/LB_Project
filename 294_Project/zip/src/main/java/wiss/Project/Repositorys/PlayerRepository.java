package wiss.Project.Repositorys;

import java.util.*;
import org.springframework.data.repository.CrudRepository;
import wiss.Project.Player;

public interface PlayerRepository extends CrudRepository<Player, Integer> {
    List<Player> findByUsernameContaining(String username);
}