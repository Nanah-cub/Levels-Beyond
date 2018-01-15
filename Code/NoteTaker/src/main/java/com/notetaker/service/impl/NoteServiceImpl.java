package com.notetaker.service.impl;

import com.notetaker.doa.RetrieveNoteRepository;
import com.notetaker.errors.NoteDataException;
import com.notetaker.model.NoteDTO;
import com.notetaker.service.InsertNote;
import com.notetaker.service.RetrieveNote;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * NoteServiceImpl handles the implementation and business logic for retrieving notes
 *
 * Current State: It implements interfaces for retrieving and inserting notes. It might be beneficial later on to
 * seperate the different interfaces into their own specific classes
 */
@Service
public class NoteServiceImpl implements RetrieveNote, InsertNote {

    private static final Logger LOGGER = LoggerFactory.getLogger(NoteServiceImpl.class);


@Autowired
RetrieveNoteRepository noteRepository;


    @Override
    public List<NoteDTO> retrieveNotes(){
        List<NoteDTO> noteDTOS = noteRepository.findAll();;
        return noteDTOS;
    }

    @Override
    public NoteDTO retrieveNoteById(Integer id) throws NoteDataException {
        Optional<NoteDTO> response = Optional.ofNullable(noteRepository.findById(id));
        NoteDTO note = response.orElseThrow(() -> {
            LOGGER.warn("No note data found for id: {}",id);
            return new NoteDataException("No Note Data found for id: "+ id);
        });
        return note;
    }


    @Override
    public List<NoteDTO>  retrieveNotesByQuery(String query) {
        return this.noteRepository.findByBodyContaining(query);
    }

    @Override
    public NoteDTO save(NoteDTO noteDTO){
        NoteDTO savedNoteDTO = noteRepository.save(noteDTO);
        return savedNoteDTO;
    }
}

