package tn.esprit.formation.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.formation.entities.Formation;

public interface FormationRepository extends JpaRepository<Formation, Long> {

}
