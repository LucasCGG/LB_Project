package wiss.Project;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import wiss.Project.Repositorys.PlayerRepository;

@SpringBootApplication
public class Application {

	ArrayList<String> categories = new ArrayList<>() {
		{
			add("This is the Startpage.");
			add(" Pls continue...");
		}
	};
	@Autowired
	PlayerRepository playerRepository;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@GetMapping("")
	public ArrayList<String> index() {
		return categories;
	}

	@DeleteMapping("/deleteCat")
	public String removeCategory(@RequestParam String category) {
		categories.remove(category);
		return category;
	};

}
