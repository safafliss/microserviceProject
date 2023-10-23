package tn.esprit.entretiens.services;

import tn.esprit.entretiens.entities.Entretien;

import java.util.List;

public interface ServiceEntretien {
    // Enregistrer un nouvel entretien
    Entretien saveEntretien(Entretien entretien);

    // Rechercher un entretien par ID
    Entretien getEntretienById(Long id);

    // Rechercher des entretiens par candidat (utilisateur)
    List<Entretien> getEntretiensByUserId(Long userId);

    // Rechercher des entretiens par nom du candidat
    List<Entretien> getEntretiensByUserNom(String nom);

    // Mettre à jour un entretien existant
    Entretien updateEntretien(Entretien entretien);

    // Supprimer un entretien
    void deleteEntretien(Long id);

    // Liste de tous les entretiens
    List<Entretien> getAllEntretiens();

}
