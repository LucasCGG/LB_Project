package ch.wiss.sq2c.Repositorys;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import ch.wiss.sq2c.Game;

/**
 * Wird verwendet um das Programm mit der Datenbank zu verbinden
 * 
 * @author Lucas Colaco
 */
public interface GameRepository extends CrudRepository<Game, Integer> {
    List<Game> findByNameContaining(String Name);

    List<Game> findByPlayerId(int id);
}