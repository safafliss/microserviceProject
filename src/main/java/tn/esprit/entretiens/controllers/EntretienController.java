package tn.esprit.entretiens.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.entretiens.entities.Entretien;
import tn.esprit.entretiens.services.ServiceEntretien;

import java.util.List;

@RestController
@RequestMapping("/entretiens")
public class EntretienController {
    private final ServiceEntretien serviceEntretien;

    @Autowired
    public EntretienController(ServiceEntretien serviceEntretien) {
        this.serviceEntretien = serviceEntretien;
    }

    @PostMapping
    public ResponseEntity<Entretien> createEntretien(@RequestBody Entretien entretien) {
        Entretien createdEntretien = serviceEntretien.saveEntretien(entretien);
        return new ResponseEntity<>(createdEntretien, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Entretien> getEntretienById(@PathVariable Long id) {
        Entretien entretien = serviceEntretien.getEntretienById(id);
        if (entretien != null) {
            return new ResponseEntity<>(entretien, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/byUser/{userId}")
    public ResponseEntity<List<Entretien>> getEntretiensByUserId(@PathVariable Long userId) {
        List<Entretien> entretiens = serviceEntretien.getEntretiensByUserId(userId);
        return new ResponseEntity<>(entretiens, HttpStatus.OK);
    }

    @GetMapping("/byUserNom/{nom}")
    public ResponseEntity<List<Entretien>> getEntretiensByUserNom(@PathVariable String nom) {
        List<Entretien> entretiens = serviceEntretien.getEntretiensByUserNom(nom);
        return new ResponseEntity<>(entretiens, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Entretien> updateEntretien(@PathVariable Long id, @RequestBody Entretien entretien) {
        if (serviceEntretien.getEntretienById(id) != null) {
            entretien.setId(id);
            Entretien updatedEntretien = serviceEntretien.updateEntretien(entretien);
            return new ResponseEntity<>(updatedEntretien, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEntretien(@PathVariable Long id) {
        serviceEntretien.deleteEntretien(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<List<Entretien>> getAllEntretiens() {
        List<Entretien> entretiens = serviceEntretien.getAllEntretiens();
        return new ResponseEntity<>(entretiens, HttpStatus.OK);
    }
}
