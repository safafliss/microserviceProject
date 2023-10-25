package tn.esprit.candidate1;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Candidat implements Serializable {
    private static final long serialVersionUID = 6711457437559348053L;
    @Id
    @GeneratedValue
    private int id;

    private String nom;
    private String prenom;
    private String email;

    public int getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public String getEmail() {
        return email;
    }


    public void setId(int id) {
        this.id = id;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Candidat(){

    }

    public Candidat(String nom) {
        this.nom = nom;
    }
}
