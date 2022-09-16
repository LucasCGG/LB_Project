package wiss.Project.Repositorys;

import java.util.*;
import org.springframework.data.repository.CrudRepository;
import wiss.Project.Game;

public interface GameRepository extends CrudRepository<Game, Integer> {
    List<Game> findByNameContaining(String name);
}