
package com.esprit.offremss.services;

        import lombok.AllArgsConstructor;
        import org.springframework.stereotype.Service;
        import com.esprit.offremss.entities.OffreEmploi;
        import com.esprit.offremss.repositories.OffreRepository;

        import java.util.List;

@AllArgsConstructor
@Service
public class OffreServiceImp implements OffreServicee {
    private final OffreRepository offreEmploiRepository;

    @Override
    public List<OffreEmploi> getAllOffresEmploi() {
        return offreEmploiRepository.findAll();
    }

    @Override
    public OffreEmploi addOffreEmploi(OffreEmploi offreEmploi) {
        return offreEmploiRepository.save(offreEmploi);
    }




    public OffreEmploi updateOffreEmploi(long idOffre, OffreEmploi offreEmploi) {



        if (offreEmploiRepository.findById(idOffre).isPresent()) {
            OffreEmploi offreEmploi1 = offreEmploiRepository.findById(idOffre).get();

            offreEmploi1.setTitle(offreEmploi.getTitle());
            offreEmploi1.setDescription(offreEmploi.getDescription());
            offreEmploi1.setCategory(offreEmploi.getCategory());
            offreEmploi1.setCompany(offreEmploi.getCompany());
            offreEmploi1.setSalary(offreEmploi.getSalary());

            // Enregistrez les modifications dans la base de données en utilisant le offreRepository
            return offreEmploiRepository.save(offreEmploi1);
        } else {
            // offre non trouvé, vous pouvez choisir de retourner null ou lever une exception
            return null;
        }
    }







    @Override
    public OffreEmploi getOffreEmploiById(long idOffreEmploi) {
        return offreEmploiRepository.findById(idOffreEmploi).orElse(null);
    }

    @Override
    public String deleteOffreEmploi(long idOffreEmploi) {
        if (offreEmploiRepository.findById(idOffreEmploi).isPresent()) {
            offreEmploiRepository.deleteById(idOffreEmploi);
            return "contrat supprimé";
        } else
            return "contrat non supprimé";
    }




}
