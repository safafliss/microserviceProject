package com.esprit.microyassine.Services;

import com.esprit.microyassine.Repositories.PortfolioRepository;
import com.esprit.microyassine.entities.Portfolio;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PortfolioServiceImp implements  PortfolioService{
    PortfolioRepository portfolioRepository;
    @Override
    public List<Portfolio> getAllPortfolios() {
        return portfolioRepository.findAll();

    }

    @Override
    public Portfolio addPortfolio(Portfolio f) {
        return portfolioRepository.save(f);

    }

    @Override
    public Portfolio updatePortfolio(Portfolio f) {
        return portfolioRepository.save(f);
    }

    @Override
    public Portfolio getPortfolioById(long idPortfolio) {
        return portfolioRepository.findById(idPortfolio).orElse(null);
    }

    @Override
    public String deletePortfolio(long idPortfolio) {
        if (portfolioRepository.findById(idPortfolio).isPresent()) {
            portfolioRepository.deleteById(idPortfolio);
            return "portfolio supprimé";
        } else
            return "portfolio non supprimé";

    }
}
