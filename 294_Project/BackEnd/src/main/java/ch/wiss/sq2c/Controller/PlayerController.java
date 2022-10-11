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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ch.wiss.sq2c.Game;
import ch.wiss.sq2c.Leaderboard;
import ch.wiss.sq2c.Player;
import ch.wiss.sq2c.Sq2cApplication;
import ch.wiss.sq2c.Exceptions.EmailInvalidExcecption;
import ch.wiss.sq2c.Exceptions.UserInvalidException;
import ch.wiss.sq2c.Exceptions.UpdateUserException;
import ch.wiss.sq2c.Exceptions.AgeIsWrongException;
import ch.wiss.sq2c.Exceptions.CustomMessage;
import ch.wiss.sq2c.Repositorys.PlayerRepository;
import ch.wiss.sq2c.Repositorys.GameRepository;
import ch.wiss.sq2c.Repositorys.LeaderboardRepository;

/*
 * Die Klasse wird benutzt um änderung in der "Player" Table zu machen.
 * (REST-API für "Player")
 */
@CrossOrigin
@RestController
@RequestMapping(path = "/Player")
public class PlayerController {
    Sq2cApplication application;

    @Autowired
    private PlayerRepository playerRepository;

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private LeaderboardRepository leaderboardRepository;

    @PostMapping(path = "/add/")
    public @ResponseBody ResponseEntity<String> addPlayer(@RequestBody Player newPlayer) {
        String confirmedEmail;
        boolean isOk = newPlayer.email.indexOf("@") != -1 ? true : false;
        if (isOk) {
            confirmedEmail = newPlayer.email;
        } else {
            throw new EmailInvalidExcecption(newPlayer.email);
        }
        newPlayer.email = confirmedEmail;

        if (newPlayer.age > 100 || newPlayer.age <= 0) {
            throw new AgeIsWrongException("The age you gave us is invalid...");
        }

        try {
            playerRepository.save(newPlayer);
        } catch (Exception ex) {
            throw new UserInvalidException(newPlayer.username);
        }

        return ResponseEntity.ok("User was successfully addet");
    }

    @DeleteMapping(path = "/del/")
    public @ResponseBody ResponseEntity<String> deletePlayer(@RequestParam int id) { 
        List<Game> games = gameRepository.findByPlayerId(id);
        List<Leaderboard> leaderboard = leaderboardRepository.findByPlayerId(id);

        for (int i = 0; i < games.size(); i++) {
            Game x = games.get(i);
            gameRepository.delete(x);
        }
        for (int i = 0; i < leaderboard.size(); i++) {
            Leaderboard x = leaderboard.get(i);
            leaderboardRepository.delete(x);
        }
        playerRepository.deleteById(id);
        return ResponseEntity.ok("User identified by id: '" + id + "' has been deleted!");
    }

    @PutMapping(path = "add")
    public @ResponseBody ResponseEntity<String> updatePlayer(@RequestBody @Valid Player newplayer) {
        Player player = playerRepository.findById(newplayer.id).get(0);
        List<Player> all = (List<Player>) playerRepository.findAll();

        player.setName(newplayer.name);

        for (Player x : all) {
            if (!player.username.equals(x.username)) {
                if (x.username.equals(newplayer.username)) {
                    throw new UpdateUserException("This Username already Exists");
                } else {
                    player.setUserName(newplayer.username);
                }
            }
        }
        player.setAge(newplayer.age);

        for (Player x : all) {
            if (!player.email.equals(x.email)) {
                if (x.email.equals(newplayer.email)) {
                    throw new UpdateUserException("The email already exists..");
                } else {
                    player.setEmail(newplayer.email);
                }
            }
        }

        player.setPassword(newplayer.password);
        playerRepository.save(player);
        return ResponseEntity.ok("Successfully updated the User");
    }

    /*
     * Get ONE Player using username
     */
    @GetMapping(path = "/one/")
    public @ResponseBody Optional<Player> getPlayerUsername(@RequestParam String username) {

        List<Player> players = playerRepository.findByUsernameContaining(username);

        return players.stream().findFirst();
    }

    /*
     * Get ONE Player using username
     */
    @CrossOrigin
    @GetMapping(path = "/one/Email")
    public @ResponseBody Optional<Player> getPlayerEmail(@RequestParam String email) {

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
            return ResponseEntity.ok("Email is not valid");
        }
    }

    /*
     * Get ALL Players
     */
    @CrossOrigin
    @PostMapping(path = "/login/")
    public @ResponseBody ResponseEntity<String> login(@Valid @RequestParam String email,
            @RequestParam String password) {
        System.out.println("login in");
        List<Player> players = playerRepository.findByEmailContaining(email);
        if (players != null) {
            var data = players.get(0).password;
            if (password.toString().equals(data.toString())) {
                return ResponseEntity.status(HttpStatus.OK).body("Login was Successfull");
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
}