package ch.wiss.sq2c.Repositorys;

import org.springframework.data.repository.CrudRepository;

import ch.wiss.sq2c.Game;

public interface GameRepository extends CrudRepository<Game, Integer> {
    // List<Game> findByNameContaining(String name);
}