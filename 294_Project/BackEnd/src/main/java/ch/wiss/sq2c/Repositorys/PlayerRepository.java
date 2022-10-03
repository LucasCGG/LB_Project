package ch.wiss.sq2c.Repositorys;

import java.util.*;

import org.springframework.data.repository.CrudRepository;

import ch.wiss.sq2c.Player;

/*
 * Wird verwendet um mit der Datenbank zu verbinden
*/
public interface PlayerRepository extends CrudRepository<Player, Integer> {
    List<Player> findByUsernameContaining(String username);

    List<Player> findByEmailContaining(String email);

    List<Player> findByPasswordContaining(String password);
}