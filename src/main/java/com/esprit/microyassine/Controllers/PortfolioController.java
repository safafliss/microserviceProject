package com.esprit.microyassine.Controllers;

import com.esprit.microyassine.Services.PortfolioService;
import com.esprit.microyassine.entities.Portfolio;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
public class PortfolioController {
    PortfolioService portfolioService;
    @GetMapping("/getAllPortfolios")
    public List<Portfolio> getAllPortfolios(){
        return portfolioService.getAllPortfolios();
    }


    @PostMapping("/addPortfolio")
    public Portfolio addPortfolio(@RequestBody Portfolio Portfolio){
        return portfolioService.addPortfolio(Portfolio);
    }

    @PutMapping("/updatePortfolio")
    public Portfolio updatePortfolio(@RequestBody Portfolio Portfolio){
        return portfolioService.updatePortfolio(Portfolio);
    }

    @GetMapping("/getPortfolioById/{idPortfolio}")
    public Portfolio getPortfolioById(@PathVariable("idPortfolio") long idPortfolio){
        return portfolioService.getPortfolioById(idPortfolio);
    }

    @DeleteMapping("/deletePortfolio/{idPortfolio}")
    public void deletePortfolio(@PathVariable("idPortfolio") long idPortfolio){
        portfolioService.deletePortfolio(idPortfolio);
    }
}
