package wiss.Project.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import wiss.Project.Player;
import wiss.Project.Application;
import wiss.Project.Repositorys.PlayerRepository;

@RestController
@RequestMapping(path = "/Player")
public class PlayerController {
    Application application;

    @Autowired
    private PlayerRepository playerRepository;

    /**
     * this adds a new player
     */
    @PostMapping(path = "/add/")
    public @ResponseBody ResponseEntity<String> addPlayer(@RequestParam String Name, @RequestParam String Username,
            @RequestParam String email, @RequestParam Integer age) {
        String confirmedEmail;
        boolean isOk = email.indexOf("@") != -1 ? true : false;
        if (isOk) {
            confirmedEmail = email;
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid Email... Please provide a valide E-Mail");
        }

        if (age > 0 && age < 100) {
            Player p = new Player();
            p.setName(Name);
            p.setUserName(Username);
            p.setEmail(confirmedEmail);
            p.setAge(age);
            playerRepository.save(p);

            return ResponseEntity
                    .ok("User '" + Username + "' identified by E-Mailadress '" + email + "' has been created");
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid Age... Please provide a valide Age");
        }
    }

    /*
     * Delete Player with the ID
     */
    @DeleteMapping(path = "/delete/")
    public @ResponseBody ResponseEntity<String> delPlayer(@RequestParam Integer id) {
        System.out.println(id);
        if (id == null) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid ID... Please provide a valide ID");
        }
        playerRepository.deleteById(id);
        return ResponseEntity.ok("User identified by id: '" + id + "' has been deleted!");
    }

    /*
     * Get ONE Player using username
     */
    @GetMapping(path = "/one/")
    public @ResponseBody Optional<Player> getPlayer(@RequestParam String username) {
        System.out.println("Find 1 Player Request");

        List<Player> players = playerRepository.findByUsernameContaining(username);

        return players.stream().findFirst();
    }

    /*
     * Get ALL Players
     */
    @GetMapping(path = "/all/")
    public @ResponseBody Iterable<Player> getAllPlayers() {
        System.out.println("FindAll Player Request");
        return playerRepository.findAll();
    }
}