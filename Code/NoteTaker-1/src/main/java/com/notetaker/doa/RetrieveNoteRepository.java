package com.notetaker.doa;

import com.notetaker.model.NoteDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * RetrieveNoteRepository queries the database for notes
 */

@Transactional
public interface RetrieveNoteRepository extends JpaRepository<NoteDTO,Long>{

    /**
     * Finds a note by id
     * @param id of a specific note
     * @return the note that contains the id
     */
    NoteDTO findById(Integer id);

    /**
     * Finds all notes containing a specific body
     * @param body: the body of a note
     * @return all notes containing a specific piece of text
     */
     List<NoteDTO> findByBodyContaining(String body);
}
