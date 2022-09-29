package ch.wiss.sq2c.Exceptions;

public class UserInvalidException extends RuntimeException {

    public UserInvalidException(String name) {
        super("User identified by " + name + " is not okey");
    }
}
