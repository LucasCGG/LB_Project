package ch.wiss.sq2c;

import javax.persistence.*;

/*
 * Diese Klasse erstellt die Tabelle
 */
@Entity
@Table(name = "Game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String description;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "creatorId", nullable = false)
    private Player player;

    // SETTER
    public void setID(int x) {
        id = x;
    }

    public void setName(String x) {
        name = x;
    }

    public void setPlayer(Player p) {
        player = p;
    }

    public void setDescription(String x) {
        description = x;
    }

    // GETTER
    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Player getPlayer() {
        return player;
    }

}