package ch.wiss.sq2c.Controller;

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

import ch.wiss.sq2c.*;
import ch.wiss.sq2c.Repositorys.GameRepository;

@CrossOrigin
@RestController
@RequestMapping(path = "/game")
public class GameController {
    @Autowired
    private GameRepository gameRepository;

    /**
     * this adds a game
     */

    @PostMapping(path = "/add/")
    public @ResponseBody ResponseEntity<String> addGame(@Valid @RequestBody Game game) {
        gameRepository.save(game);
        return ResponseEntity.ok("Game is valid and has been uploaded.");
    }

    /**
     * This deletes a game
     */
    @DeleteMapping(path = "/delete/")
    public @ResponseBody ResponseEntity<String> deleteGame(@RequestParam Integer id) {
        if (id == null) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("This id is Invalid... Please provide a valid id");
        }

        return ResponseEntity.ok("Game identified by ID:' " + id + " ' was deleted!");
    }

    /**
     * this reads all games
     */
    @GetMapping(path = "/all/")
    public @ResponseBody Iterable<Game> getAllPlayers() {

        return gameRepository.findAll();
    }
}
