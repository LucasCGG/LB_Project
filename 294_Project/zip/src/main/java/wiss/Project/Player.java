package wiss.Project;
import javax.persistence.*;

@Entity
@Table(name = "Player")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;
    private String name;
    private String email;
    private String password;
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
