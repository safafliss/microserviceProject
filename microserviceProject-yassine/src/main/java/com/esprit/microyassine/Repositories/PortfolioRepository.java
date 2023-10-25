package com.esprit.microyassine.Repositories;

import com.esprit.microyassine.entities.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
}
