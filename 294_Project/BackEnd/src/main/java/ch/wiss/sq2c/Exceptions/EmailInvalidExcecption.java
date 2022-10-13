package ch.wiss.sq2c.Exceptions;

/**
 * Exception für wenn der User eine ungültig E-Mail angibt
 * 
 * @author Lucas
 */
public class EmailInvalidExcecption extends RuntimeException {

    public EmailInvalidExcecption(String name) {
        super("The E-Mail u provided is not valid or already used. ");
    }
}
