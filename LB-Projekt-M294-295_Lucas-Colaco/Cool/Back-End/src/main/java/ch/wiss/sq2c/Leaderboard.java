package ch.wiss.sq2c;

import javax.persistence.*;

/**
 * Diese Klasse erstellt die Tabelle "Leaderboard"
 * 
 * @author Lucas Colaco
 */
@Entity
@Table(name = "Leaderboard")
public class Leaderboard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer score;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "game_id", nullable = false)
    private Game game;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "player_id", nullable = false)
    private Player player;

    public void setGame(Game g) {
        this.game = g;
    }

    public void setPlayer(Player p) {
        this.player = p;
    }

    public void setScore(Integer x) {
        this.score = x;
    }

    public Game getGame() {
        return game;
    }

    public Player getPlayer() {
        return player;
    }

    public Integer getScore() {
        return score;
    }
}