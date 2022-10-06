package ch.wiss.sq2c.Controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import ch.wiss.sq2c.Leaderboard;
import ch.wiss.sq2c.Sq2cApplication;
import ch.wiss.sq2c.Repositorys.LeaderboardRepository;

/*
 * Die Klasse wird benutzt um änderung in der "Leaderboard" Table zu machen.
 * (REST-API für "Leaderboard")
 */
@CrossOrigin
@RestController
@RequestMapping(path = "/Leaderboard")
public class LeaderboardController {
    Sq2cApplication application;

    @Autowired
    private LeaderboardRepository repo;

    @PostMapping(path = "/add/")
    public @ResponseBody ResponseEntity<String> updateBoard(@Valid @RequestBody Leaderboard board) {
        repo.save(board);
        return ResponseEntity.ok("Leaderboard has been updated");
    }

    @GetMapping(path = "/")
    public @ResponseBody Iterable<Leaderboard> getBoard() {
        return repo.findAll();
    }
}
