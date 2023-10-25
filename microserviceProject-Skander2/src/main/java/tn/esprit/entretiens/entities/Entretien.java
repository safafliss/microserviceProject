package tn.esprit.entretiens.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Entretien implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date_heure;

    private String lieu;

    @Enumerated(EnumType.STRING)
    private StatutEntretien statut;

    @Lob
    private String notes;

    private Long userId;

    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

    @Temporal(TemporalType.TIMESTAMP)
    private Date updated_at;

    @Enumerated(EnumType.STRING)
    private TypeEntretien type_entretien;



    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate_heure() {
        return date_heure;
    }

    public void setDate_heure(Date date_heure) {
        this.date_heure = date_heure;
    }

    public String getLieu() {
        return lieu;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    public StatutEntretien getStatut() {
        return statut;
    }

    public void setStatut(StatutEntretien statut) {
        this.statut = statut;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long user_id) {
        this.userId = user_id;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Date updated_at) {
        this.updated_at = updated_at;
    }

    public TypeEntretien getType_entretien() {
        return type_entretien;
    }

    public void setType_entretien(TypeEntretien type_entretien) {
        this.type_entretien = type_entretien;
    }
}
