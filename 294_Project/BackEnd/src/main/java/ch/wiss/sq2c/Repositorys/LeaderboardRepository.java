package ch.wiss.sq2c.Repositorys;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import ch.wiss.sq2c.Leaderboard;

/*
 * Wird verwendet um mit der Datenbank zu verbinden
*/
public interface LeaderboardRepository extends CrudRepository<Leaderboard, Integer> {
    List<Leaderboard> findByPlayerId(int id);
}
