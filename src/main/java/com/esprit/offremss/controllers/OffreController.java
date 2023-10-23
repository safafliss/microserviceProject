package com.esprit.offremss.controllers;




        import lombok.AllArgsConstructor;
        import org.springframework.web.bind.annotation.*;
        import com.esprit.offremss.entities.OffreEmploi;
        import com.esprit.offremss.services.OffreServicee;

        import java.util.List;

@AllArgsConstructor
@RestController
public class OffreController {
     OffreServicee offreEmploiService;

    @GetMapping("/getAllOffresEmploi")
    public List<OffreEmploi> getAllOffresEmploi() {
        return offreEmploiService.getAllOffresEmploi();
    }

    @PostMapping("/addOffreEmploi")
    public OffreEmploi addOffreEmploi(@RequestBody OffreEmploi offreEmploi) {
        return offreEmploiService.addOffreEmploi(offreEmploi);
    }

    @PutMapping("/updateOffreEmploi/{idOffreEmploi}")
    public OffreEmploi updateOffreEmploi(@PathVariable("idOffreEmploi") long idOffreEmploi,@RequestBody OffreEmploi offreEmploi) {
        return offreEmploiService.updateOffreEmploi(idOffreEmploi,offreEmploi);
    }

    @GetMapping("/getOffreEmploiById/{idOffreEmploi}")
    public OffreEmploi getOffreEmploiById(@PathVariable("idOffreEmploi") long idOffreEmploi) {
        return offreEmploiService.getOffreEmploiById(idOffreEmploi);
    }

    @DeleteMapping("/deleteOffreEmploi/{idOffreEmploi}")
    public String deleteOffreEmploi(@PathVariable("idOffreEmploi") long idOffreEmploi) {
      return   offreEmploiService.deleteOffreEmploi(idOffreEmploi);
    }




}
