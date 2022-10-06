package ch.wiss.sq2c.Repositorys;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import ch.wiss.sq2c.Game;
import ch.wiss.sq2c.Player;

/*
 * Wird verwendet um mit der Datenbank zu verbinden
*/
public interface GameRepository extends CrudRepository<Game, Integer> {
    List<Game> findByNameContaining(String Name);

    List<Game> findByPlayerId(int id);

    void deleteByPlayerId(int i);
}