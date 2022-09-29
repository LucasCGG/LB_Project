package ch.wiss.sq2c.Exceptions.Advisor;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.hibernate.annotations.FetchProfile.FetchOverride;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import ch.wiss.sq2c.Exceptions.EmailInvalidExcecption;
import ch.wiss.sq2c.Exceptions.UserInvalidException;

@ControllerAdvice
public class ControllerAdvisor extends ResponseEntityExceptionHandler {
    @Override
    protected ResponseEntity<Object> handleMissingServletRequestParameter(MissingServletRequestParameterException ex,
            HttpHeaders headers, HttpStatus status, WebRequest request) {
        return createDefaultErrorResponse(ex.getMessage());
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
            HttpHeaders headers, HttpStatus status, WebRequest request) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });

        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UserInvalidException.class)
    public ResponseEntity<Object> handleUserInvalidException(UserInvalidException ex,
            WebRequest request) {
        return createDefaultErrorResponse(ex.getMessage());
    }

    @ExceptionHandler(EmailInvalidExcecption.class)
    public ResponseEntity<Object> handleEmailInvalidException(EmailInvalidExcecption ex,
            WebRequest request) {
        return createDefaultErrorResponse(ex.getMessage());
    }

    private ResponseEntity<Object> createDefaultErrorResponse(String exceptionMessage) {
        Map<String, Object> errors = new HashMap<>();
        errors.put("timestamp", LocalDateTime.now());
        errors.put("error", exceptionMessage);

        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}