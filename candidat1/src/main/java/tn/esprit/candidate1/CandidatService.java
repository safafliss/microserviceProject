package tn.esprit.candidate1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CandidatService {
    @Autowired
    private CandidatRepository candidatRepository;

    public Candidat addCandidat(Candidat c){
        return candidatRepository.save(c);
    }

    public Candidat updateCandidat(Candidat updatedCandidat, int id){
        if(candidatRepository.findById(id).isPresent()){
            Candidat existingCandidat = candidatRepository.findById(id).get();
            existingCandidat.setNom(updatedCandidat.getNom());
            existingCandidat.setPrenom(updatedCandidat.getPrenom());
            existingCandidat.setEmail(updatedCandidat.getEmail());
        }
        return null;
    }

    public String deleteCandidat(int id){
        if(candidatRepository.findById(id).isPresent()){
            candidatRepository.deleteById(id);
            return "Candidat deleted";
        }
        return  "Candidat not found";
    }
}
