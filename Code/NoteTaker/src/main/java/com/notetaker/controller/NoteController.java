package com.notetaker.controller;

import com.notetaker.errors.NoteDataException;
import com.notetaker.model.NoteDTO;
import com.notetaker.service.InsertNote;
import com.notetaker.service.RetrieveNote;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.*;


import java.util.List;

/**
 * NoteController handles the API endpoints and delegates the NoteService
 * to handle the business logic of a specific service call.
 */
@RestController
@RequestMapping("/api")
public class NoteController {


    private static final Logger LOGGER = LoggerFactory.getLogger(NoteController.class);

    /**
     * Handles the retrieval methods for Notes
     */
    @Autowired
    private RetrieveNote retrieveNote;

    /**
     * Handles the insert methods for notes
     */
    @Autowired
    private InsertNote insertNote;


    /**
     * Retrieves all notes in the database
     * @return a list of NoteDTOs
     */
    @RequestMapping(value = "/notes", method = RequestMethod.GET)
    public List<NoteDTO> getNotes() {
        return this.retrieveNote.retrieveNotes();
    }

    /**
     * Retrieves all notes that have a body that contain a specific text
     * @param query determines what the body should contain
     * @return a list of notes that contain text in the body
     */
    @RequestMapping(value = "/notes", method = RequestMethod.GET, params = {"query"})
    public List<NoteDTO> getNotes(@RequestParam String query) {
        return this.retrieveNote.retrieveNotesByQuery(query);
    }

    /**
     * Retrieves the note with a specific id
     * @param id
     * @return the note with a specific id
     * @throws NoteDataException
     */
    @RequestMapping(value = "notes/{id}", method = RequestMethod.GET)
    public NoteDTO getNote(@PathVariable Integer id) throws NoteDataException {
        return this.retrieveNote.retrieveNoteById(id);
    }

    /**
     * Inserts (or possibly saves) a specific note
     * @param noteDTO
     * @return the note that just got inserted or updated.
     */
    @RequestMapping(value = "/notes", method = RequestMethod.POST)
    public NoteDTO saveNote(@RequestBody NoteDTO noteDTO) {
        return insertNote.save(noteDTO);
    }

}
