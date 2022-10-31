package ch.wiss.sq2c.Repositorys;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import ch.wiss.sq2c.Leaderboard;

/**
 * Wird verwendet um die Scripte mit der Datenbank zu verbinden
 * 
 * @author Lucas Colaco
 */
public interface LeaderboardRepository extends CrudRepository<Leaderboard, Integer> {
    List<Leaderboard> findByPlayerId(int id);
}
