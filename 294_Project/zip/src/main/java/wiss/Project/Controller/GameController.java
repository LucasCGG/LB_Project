package wiss.Project.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.RepositoryDefinition;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import wiss.Project.*;
import wiss.Project.Repositorys.GameRepository;

@RestController
@RequestMapping(path = "/game")
public class GameController {
    Application application;

    @Autowired
    private GameRepository gameRepository;

    /**
     * this adds a game
     */
    @PostMapping(path = "/add/")
    public @ResponseBody ResponseEntity<String> addGame(@RequestParam String Name, @RequestParam String description) {
        Game g = new Game();
        g.setName(Name);
        g.setDescription(description);

        gameRepository.save(g);
        return ResponseEntity.ok("Your game '" + Name + "' has been addet to the library");
    }

    /**
     * This deletes a game
     */

    @DeleteMapping(path = "/delete/")
    public @ResponseBody ResponseEntity<String> delGame(@RequestParam Integer id) {
        System.out.println(id);
        if (id == null) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid ID... Please provide a valide ID");
        }
        gameRepository.deleteById(id);
        return ResponseEntity.ok("Game identified by ID:' " + id + " ' has been deleted!");
    }

    /**
     * this reads 1 game
     * 
     * @GetMapping(path = "/one/")
     *                  public @ResponseBody Optional<Game> getGame(@RequestParam
     *                  String Name) {
     *                  System.out.println("Find 1 Player Request");
     * 
     *                  List<Game> games =
     *                  gameRepository.findByNameContaining(Name);
     * 
     *                  return games.stream().findFirst();
     *                  }
     */
    /**
     * this reads all games
     */
    @GetMapping(path = "/all/")
    public @ResponseBody Iterable<Game> getAllGames() {

        return gameRepository.findAll();
    }
}
