package tn.esprit.test_ms.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.test_ms.entities.Test;

public interface TestRepository extends JpaRepository<Test, Long> {
}
