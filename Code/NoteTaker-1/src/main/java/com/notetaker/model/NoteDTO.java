package com.notetaker.model;

import javax.persistence.*;

@Entity
@Table(name = "NOTE", schema = "MY_DATABASE")
public class NoteDTO {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @Column(name = "body", nullable = false)
    private String body;


    public NoteDTO(){}

    /**
     *
     * @param id
     * @param body
     */
    public NoteDTO(Integer id, String body){
        this.id = id;
        this.body = body;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Integer getId() {
        return id;
    }

    public String getBody() {
        return body;
    }


    @Override
    public String toString() {
        return String.format("NoteDTO(id=%d, body='%s')", id, body);
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        NoteDTO noteDTO = (NoteDTO) o;

        if (id != null ? !id.equals(noteDTO.id) : noteDTO.id != null) return false;
        return body != null ? body.equals(noteDTO.body) : noteDTO.body == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (body != null ? body.hashCode() : 0);
        return result;
    }
}
