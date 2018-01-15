package com.notetaker.errors;

/**
 * NoteDataException occurs when no data exists for a specific API call.
 * The service is working as expected, but depending on the requirements returning no
 * data can be considered an error.
 */
public class NoteDataException extends RuntimeException {

    private String message;


    public NoteDataException(String message){
        super(message);
    }

    @Override
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
