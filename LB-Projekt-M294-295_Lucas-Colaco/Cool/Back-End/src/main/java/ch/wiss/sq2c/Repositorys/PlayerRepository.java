package ch.wiss.sq2c.Repositorys;

import java.util.*;

import org.springframework.data.repository.CrudRepository;

import ch.wiss.sq2c.Player;

/**
 * Wird verwendet um das Programm mit der Datenbank zu verbinden
 * 
 * @author Lucas Colaco
 */
public interface PlayerRepository extends CrudRepository<Player, Integer> {
    List<Player> findByUsernameContaining(String username);

    List<Player> findByEmailContaining(String email);

    List<Player> findByPasswordContaining(String password);

    List<Player> findById(int id);
}