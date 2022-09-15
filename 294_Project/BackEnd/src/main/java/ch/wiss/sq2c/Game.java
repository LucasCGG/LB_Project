package ch.wiss.sq2c;

import javax.persistence.*;

@Entity
@Table(name = "Game")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String Name;
    private String Description;

    // SETTER
    public void setID(int x) {
        id = x;
    }

    public void setName(String x) {
        Name = x;
    }

    public void setDescription(String x) {
        Description = x;
    }

    // GETTER
    public Integer getId() {
        return id;
    }

    public String getName() {
        return Name;
    }

    public String getDescription() {
        return Description;
    }

}