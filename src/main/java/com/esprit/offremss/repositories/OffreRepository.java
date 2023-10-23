package com.esprit.offremss.repositories;



        import org.springframework.data.jpa.repository.JpaRepository;
        import com.esprit.offremss.entities.OffreEmploi;

public interface OffreRepository extends JpaRepository<OffreEmploi, Long> {

}
