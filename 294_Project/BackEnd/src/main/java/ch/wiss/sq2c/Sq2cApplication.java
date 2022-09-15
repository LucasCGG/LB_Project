package ch.wiss.sq2c;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.wiss.sq2c.Repositorys.PlayerRepository;

@SpringBootApplication
@RestController
public class Sq2cApplication {
	ArrayList<String> categories = new ArrayList<>() {
		{
			add("This is the Startpage.");
			add(" Pls continue...");
		}
	};
	@Autowired
	PlayerRepository playerRepository;

	public static void main(String[] args) {
		SpringApplication.run(Sq2cApplication.class, args);
	}

	@GetMapping("/")
	public ArrayList<String> index() {
		return categories;
	}

	@DeleteMapping("/deleteCat")
	public String removeCategory(@RequestParam String category) {
		categories.remove(category);
		return category;
	};
}
