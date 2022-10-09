package ch.wiss.sq2c.Exceptions;

/* Exception für wenn der User ungültig Daten angibt
*/
public class UpdateUserException extends RuntimeException {
    public UpdateUserException(String message) {
        super(message);
    }
}