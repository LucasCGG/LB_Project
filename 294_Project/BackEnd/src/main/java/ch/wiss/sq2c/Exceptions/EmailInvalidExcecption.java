package ch.wiss.sq2c.Exceptions;

public class EmailInvalidExcecption extends RuntimeException {

    public EmailInvalidExcecption(String name) {
        super("The E-Mail u provided is not valid or already used. ");
    }
}
