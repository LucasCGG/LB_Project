package ch.wiss.sq2c.Exceptions;

/*
 * Exception für wenn Alter falsch ist
 */
public class AgeIsWrongException extends RuntimeException {
    public AgeIsWrongException(String message) {
        super(message);
    }
}
