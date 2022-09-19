package ch.wiss.sq2c;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Player")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;
    @NotNull(message = "Name cannot be null")
    private String name;

    public String email;
    public String password;

    @Min(value = 18, message = "Age should not be less than 18")
    @Max(value = 150, message = "Age should not be greater than 150")
    private int age;

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
    public Integer getId() {
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
