package ch.wiss.sq2c.Exceptions;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public class UserInvalid extends RuntimeException {
    public UserInvalid(String playerName) {
        super("The Player with Username " + playerName + " could not be saved.");
    }
}