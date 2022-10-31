package ch.wiss.sq2c.Exceptions;

/**
 * Exception für wenn der User ungültig Daten angibt
 * 
 * @author Lucas Colaco
 */
public class UserInvalidException extends RuntimeException {
    public UserInvalidException(String name) {
        super("User identified by " + name + " is not okey");
    }
}
