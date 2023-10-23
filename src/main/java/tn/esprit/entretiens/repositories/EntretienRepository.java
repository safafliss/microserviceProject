package tn.esprit.entretiens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import tn.esprit.entretiens.entities.Entretien;

import java.util.List;

@Repository
public interface EntretienRepository extends JpaRepository<Entretien, Long> {

    // Recherche des entretiens par ID du candidat
    List<Entretien> findByUserId(Long userId);

    // Requête personnalisée pour rechercher des entretiens par nom complet de l'utilisateur
    @Query("SELECT e FROM Entretien e WHERE e.userId IN (SELECT u.id FROM User u WHERE CONCAT(u.firstName, ' ', u.lastName) = ?1)")
    List<Entretien> findByUserFullName(String fullName);




}
