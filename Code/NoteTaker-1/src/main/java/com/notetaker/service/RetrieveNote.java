package com.notetaker.service;

import com.notetaker.errors.NoteDataException;
import com.notetaker.model.NoteDTO;

import java.util.List;

/**
 * RetrieveNoteRepository interface handles all retrieval operations for Retrieving Notes
 */
public interface RetrieveNote {

    /**
     * Returns all notes
     * @return all notes in the database
     */
    List<NoteDTO> retrieveNotes();

    /**
     * Returns a note with a specific id if it exists
     * @param id
     * @return the note with a specific id
     * @throws NoteDataException
     */
    NoteDTO retrieveNoteById(Integer id) throws NoteDataException;

    /**
     * Returns all notes containing a specific serious of text in the body
     * @param query
     * @return a list of notes that contain a specific text
     */
    List<NoteDTO>  retrieveNotesByQuery(String query);
}
