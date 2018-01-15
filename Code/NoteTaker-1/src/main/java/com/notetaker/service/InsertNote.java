package com.notetaker.service;

import com.notetaker.model.NoteDTO;

public interface InsertNote {

    /**
     * Inserts or saves a note into the database
     * @param noteDTO
     * @return the note that just got inserted or saved
     */
    NoteDTO save(NoteDTO noteDTO);
}
