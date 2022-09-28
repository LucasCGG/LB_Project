package ch.wiss.sq2c.Controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ch.wiss.sq2c.Player;
import ch.wiss.sq2c.Sq2cApplication;
import ch.wiss.sq2c.Exceptions.UserInvalid;
import ch.wiss.sq2c.Repositorys.PlayerRepository;

@CrossOrigin
@RestController
@RequestMapping(path = "/Player")
public class PlayerController {
    Sq2cApplication application;

    @Autowired
    private PlayerRepository playerRepository;

    /**
     * this adds a new player
     */
    @PostMapping(path = "/add/")
    public @ResponseBody ResponseEntity<String> addPlayer(@Valid @RequestBody Player newPlayer) {
        List<Player> players = playerRepository.findByEmailContaining(newPlayer.email);
        System.out.println("Adding Player...");
        System.out.println(players);
        if (players.isEmpty()) {
            try {
                String confirmedEmail;
                boolean isOk = newPlayer.email.indexOf("@") != -1 ? true : false;
                if (isOk) {
                    confirmedEmail = newPlayer.email;
                } else {
                    return ResponseEntity.status(HttpStatus.FORBIDDEN)
                            .body("Invalid Email... Please provide a valide E-Mail");
                }
                newPlayer.email = confirmedEmail;

                playerRepository.save(newPlayer);
            } catch (Exception ex) {
                throw new UserInvalid(newPlayer.username);
            }

            return ResponseEntity.ok("User is valid");
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body("E-Mail is already in use. Please provide a different E-mail");
        }

    }

    @DeleteMapping(path = "/del/")
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
    public @ResponseBody Optional<Player> getPlayerUsername(@RequestParam String username) {
        System.out.println("Find 1 Player Request");

        List<Player> players = playerRepository.findByUsernameContaining(username);

        return players.stream().findFirst();
    }

    /*
     * Get ONE Player using username
     */
    @CrossOrigin
    @GetMapping(path = "/one/Email")
    public @ResponseBody Optional<Player> getPlayerEmail(@RequestParam String email) {
        System.out.println("Find 1 Player Request");

        List<Player> players = playerRepository.findByEmailContaining(email);

        return players.stream().findFirst();
    }

    /*
     * Get ONE player by Email
     */
    @CrossOrigin
    @PostMapping(path = "/email/")
    public @ResponseBody ResponseEntity<String> getPlayerEmail(@Valid @RequestBody Player player) {
        System.out.println("Find 1 Player Request");
        List<Player> players = playerRepository.findByEmailContaining(player.email);
        if (players != null) {
            return ResponseEntity.ok("Email is valid");
        } else {
            return ResponseEntity.("Email is not valid");
        }
    }

    /*
     * Get ALL Players
     */
    @CrossOrigin
    @PostMapping(path = "/login/")
    public @ResponseBody ResponseEntity<String> login(@Valid @RequestParam String email,
            @RequestParam Integer password) {
        System.out.println("login in");
        List<Player> players = playerRepository.findByEmailContaining(email);
        if (players != null) {
            var data = players.get(0).password;
            if (password.toString().equals(data.toString())) {
                return ResponseEntity.ok("Login was succesfull");
            } else {
                return ResponseEntity.status(HttpStatus.CONFLICT).body("Password or Email is not correct");
            }
        } else {
            return null;
        }

    }

    @GetMapping(path = "/all/")
    public @ResponseBody Iterable<Player> getAllPlayers() {
        System.out.println("FindAll Player Request");
        return playerRepository.findAll();
    }

    /**
     * Validate Player
     */
}
