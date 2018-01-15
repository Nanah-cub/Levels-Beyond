package com.notetaker;

import static org.assertj.core.api.Assertions.assertThat;

import com.notetaker.model.NoteDTO;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Small testing class
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {NoteTakerApplication.class, TestDatabaseConfig.class}, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class ApplicationTest {

    @LocalServerPort
    private int port;


    @Autowired
    private TestRestTemplate restTemplate;



    @Test
    public void Test_A_NoNoteDataError() throws Exception {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/api/notes/-44",
                String.class)).contains("No Note Data found for API call");
    }

    @Test
    public void Test_B_getAllData() {
        NoteDTO id0=new NoteDTO(0,"Cook test");
        NoteDTO id1=new NoteDTO(1, "Assignment Test");
        NoteDTO [] expecting = {id0, id1};
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/api/notes",
                NoteDTO[].class)).isEqualTo(expecting);

    }

    @Test
    public void Test_C_queryBodyTest() {
        NoteDTO note = new NoteDTO(0, "Cook test");
        NoteDTO [] expecting = {note};
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/api/notes?query=Cook",
                NoteDTO [].class)).isEqualTo(expecting);
    }

    @Test
    public void Test_D_getNoteById(){
        NoteDTO expecting = new NoteDTO(0, "Cook test");
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/api/notes/0",
                NoteDTO.class)).isEqualTo(expecting);
    }

    @Test
    public void Test_E_PostNote(){
        NoteDTO note = new NoteDTO();
        note.setBody("Third Note");
        NoteDTO expecting = new NoteDTO(2, "Third Note");
        assertThat(this.restTemplate.postForObject("http://localhost:" + port + "/api/notes",note, NoteDTO.class)).isEqualTo(expecting);

    }


}