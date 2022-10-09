package ch.wiss.sq2c.Exceptions;

public class AgeIsWrongException extends RuntimeException {
    public AgeIsWrongException(String message) {
        super(message);
    }
}
