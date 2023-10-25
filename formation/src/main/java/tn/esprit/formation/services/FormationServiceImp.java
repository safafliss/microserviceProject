package tn.esprit.formation.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.formation.entities.Formation;
import tn.esprit.formation.repositories.FormationRepository;

import java.util.List;

@AllArgsConstructor
@Service
public class FormationServiceImp implements FormationService{
    FormationRepository formationRepository;

    @Override
    public List<Formation> getAllFormations() {
        return formationRepository.findAll();
    }

    @Override
    public Formation addFormation(Formation f) {
        return formationRepository.save(f);
    }

    @Override
    public Formation updateFormation(Formation f) {
        return formationRepository.save(f);
    }

    @Override
    public Formation getFormationById(long idFormation) {
        return formationRepository.findById(idFormation).orElse(null);
    }

    @Override
    public void deleteFormation(long idFormation) {
        formationRepository.deleteById(idFormation);
    }
}
