package ch.wiss.sq2c.Controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

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

import ch.wiss.sq2c.Game;
import ch.wiss.sq2c.Sq2cApplication;
import ch.wiss.sq2c.Repositorys.GameRepository;

/**
 * Die Klasse wird benutzt um änderung in der "Game" Table zu machen.
 * (REST-API für "Game")
 * 
 * @author Lucas Colaco
 */
@CrossOrigin
@RestController
@RequestMapping(path = "/game")
public class GameController {
    Sq2cApplication application;

    @Autowired
    private GameRepository gameRepository;

    @PostMapping(path = "/add/")
    public @ResponseBody ResponseEntity<String> addGame(@Valid @RequestBody Game game) {
        gameRepository.save(game);
        return ResponseEntity.ok("Game is valid and has been uploaded.");
    }

    @GetMapping(path = "/one/")
    public @ResponseBody Optional<Game> getGameByName(@RequestParam String name) {
        List<Game> games = gameRepository.findByNameContaining(name);

        return games.stream().findFirst();
    }

    /*
     * @GetMapping(path = "/player/")
     * public @ResponseBody Stream<Game> getGameByPlayerID(@RequestParam int id) {
     * List<Game> games = gameRepository.findByPlayerId(id);
     * 
     * return games.stream();
     * }
     */

    @GetMapping(path = "/search/")
    public @ResponseBody Stream<Game> getGamesByName(@RequestParam String name) {
        List<Game> games = gameRepository.findByNameContaining(name);

        return games.stream();
    }

    @DeleteMapping(path = "/delete/")
    public @ResponseBody ResponseEntity<String> deleteGame(@RequestParam Integer id) {
        if (id == null) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("This id is Invalid... Please provide a valid id");
        }
        gameRepository.deleteById(id);
        return ResponseEntity.ok("Game identified by ID:' " + id + " ' was deleted!");
    }

    @GetMapping(path = "/all/")
    public @ResponseBody Iterable<Game> getAllGames() {
        return gameRepository.findAll();
    }
}
