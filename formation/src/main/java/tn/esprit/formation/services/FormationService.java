package tn.esprit.formation.services;

import tn.esprit.formation.entities.Formation;

import java.util.List;

public interface FormationService {
    List<Formation> getAllFormations();
    Formation addFormation(Formation f);
    Formation updateFormation(Formation f);
    Formation getFormationById(long idFormation);
    void deleteFormation(long idFormation);
}
