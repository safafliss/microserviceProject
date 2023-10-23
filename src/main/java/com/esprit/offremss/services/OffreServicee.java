

package com.esprit.offremss.services;

        import com.esprit.offremss.entities.OffreEmploi;

        import java.util.List;



public interface OffreServicee {
    List<OffreEmploi> getAllOffresEmploi();
    OffreEmploi addOffreEmploi(OffreEmploi offreEmploi);
    OffreEmploi updateOffreEmploi(long idOffre, OffreEmploi offreEmploi);
    OffreEmploi getOffreEmploiById(long idOffreEmploi);
    String deleteOffreEmploi(long idOffreEmploi);
}