package ch.wiss.sq2c.Repositorys;

import org.springframework.data.repository.CrudRepository;

import ch.wiss.sq2c.Game;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
public interface GameRepository extends CrudRepository<Game, Integer> {

}