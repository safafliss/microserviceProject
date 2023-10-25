package tn.esprit.entretiens.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.entretiens.entities.Entretien;
import tn.esprit.entretiens.repositories.EntretienRepository;

import java.util.List;

@Service
public class ServiceEntretienImpl implements ServiceEntretien{
    private final EntretienRepository entretienRepository;

    @Autowired
    public ServiceEntretienImpl(EntretienRepository entretienRepository) {
        this.entretienRepository = entretienRepository;
    }

    @Override
    public Entretien saveEntretien(Entretien entretien) {
        return entretienRepository.save(entretien);
    }

    @Override
    public Entretien getEntretienById(Long id) {
        return entretienRepository.findById(id).orElse(null);
    }

    @Override
    public List<Entretien> getEntretiensByUserId(Long userId) {
        return entretienRepository.findByUserId(userId);
    }

    @Override
    public List<Entretien> getEntretiensByUserNom(String nom) {
        return entretienRepository.findByUserFullName(nom);
    }

    @Override
    public Entretien updateEntretien(Entretien entretien) {
        return entretienRepository.save(entretien);
    }

    @Override
    public void deleteEntretien(Long id) {
        entretienRepository.deleteById(id);
    }

    @Override
    public List<Entretien> getAllEntretiens() {
        return entretienRepository.findAll();
    }


}

