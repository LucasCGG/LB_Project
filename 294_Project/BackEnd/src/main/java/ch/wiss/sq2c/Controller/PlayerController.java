package ch.wiss.sq2c.Controller;

import java.util.ArrayList;
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
        String confirmedEmail;
        boolean isOk = newPlayer.email.indexOf("@") != -1 ? true : false;
        if (isOk) {
            confirmedEmail = newPlayer.email;
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid Email... Please provide a valide E-Mail");
        }
        newPlayer.email = confirmedEmail;
        playerRepository.save(newPlayer);
        return ResponseEntity.ok("User is valid");
    }
    /*
     * public @ResponseBody ResponseEntity<String> addPlayer(@Valid @RequestBody
     * Player player, @RequestParam String Name,
     * 
     * @RequestParam String Username,
     * 
     * @RequestParam String email, @RequestParam Integer age) {
     * String confirmedEmail;
     * boolean isOk = email.indexOf("@") != -1 ? true : false;
     * if (isOk) {
     * confirmedEmail = email;
     * } else {
     * return ResponseEntity.status(HttpStatus.FORBIDDEN).
     * body("Invalid Email... Please provide a valide E-Mail");
     * }
     * 
     * Player p = new Player();
     * p.setName(Name);
     * p.setUserName(Username);
     * p.setEmail(confirmedEmail);
     * p.setAge(age);
     * playerRepository.save(p);
     * 
     * return ResponseEntity
     * .ok("User '" + Username + "' identified by E-Mailadress '" + email +
     * "' has been created");
     * }
     */

    /*
     * Delete Player with the ID
     */

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
     * Get ONE player by Email
     */
    @GetMapping(path = "/email/")
    public @ResponseBody ResponseEntity<String> getPlayerEmail(@Valid @RequestBody Player player) {
        System.out.println("Find 1 Player Request");
        List<Player> players = playerRepository.findByEmailContaining(player.email);
        if (players != null) {
            List<Player> pwPlayer = playerRepository.findByPasswordContaining(player.password);
            if (pwPlayer != null) {
                return ResponseEntity.ok("You succesefully loged in");
            } else {
                return ResponseEntity.badRequest("Password is not valid");
            }
        } else {
            return ResponseEntity.ok("Email is not valid");
        }
    }

    /*
     * Get ALL Players
     */
    @GetMapping(path = "/all/")
    public @ResponseBody Iterable<Player> getAllPlayers() {
        System.out.println("FindAll Player Request");
        return playerRepository.findAll();
    }

    /**
     * Validate Player
     */
}
