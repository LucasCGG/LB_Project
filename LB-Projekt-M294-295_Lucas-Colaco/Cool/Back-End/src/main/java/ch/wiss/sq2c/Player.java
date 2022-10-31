package ch.wiss.sq2c;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;

/**
 * Diese Klasse erstellt die Tabelle "Player"
 * 
 * @author Lucas Colaco
 */

@Entity
@Table(name = "Player")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;

    public String username;
    @NotNull(message = "Name cannot be null")
    public String name;

    public String email;
    public String password;

    @Max(value = 100, message = "Age should not be greater than 100")
    public int age;

    // SETTER
    public void setID(int x) {
        id = x;
    }

    public void setUserName(String x) {
        username = x;
    }

    public void setEmail(String x) {
        email = x;
    }

    public void setName(String x) {
        name = x;
    }

    public void setPassword(String x) {
        password = x;
    }

    public void setAge(int x) {
        age = x;
    }

    // GETTER
    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public Integer getAge() {
        return age;
    }
}
