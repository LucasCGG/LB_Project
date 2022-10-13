package ch.wiss.sq2c;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

/*
 * Diese Klasse startet die Back end Applikation
 */

@SpringBootApplication
@RestController
public class Sq2cApplication {

	public static void main(String[] args) {
		SpringApplication.run(Sq2cApplication.class, args);
	}
}
