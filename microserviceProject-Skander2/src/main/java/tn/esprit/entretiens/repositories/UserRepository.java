package tn.esprit.entretiens.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.entretiens.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
