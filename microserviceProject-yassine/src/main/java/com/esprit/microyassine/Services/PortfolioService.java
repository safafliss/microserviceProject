package com.esprit.microyassine.Services;

import com.esprit.microyassine.entities.Portfolio;

import java.util.List;

public interface PortfolioService {
    List<Portfolio> getAllPortfolios();
    Portfolio addPortfolio(Portfolio f);
    Portfolio updatePortfolio(Portfolio f);
    Portfolio getPortfolioById(long idPortfolio);
    String deletePortfolio(long idPortfolio);
}
