package tn.esprit.formation.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.formation.entities.Formation;
import tn.esprit.formation.services.FormationService;

import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/formations")
public class FormationController {
    FormationService formationService;

    @GetMapping("/getAllFormations")
    public List<Formation> getAllFormations(){
        return formationService.getAllFormations();
    }

    @PostMapping("/addFormation")
    public Formation addFormation(@RequestBody Formation formation) {
        return formationService.addFormation(formation);
    }

    /*@PostMapping("/addFormation")
    public ResponseEntity<?> addFormation(@RequestBody Formation formation, KeycloakAuthenticationToken auth) {
        KeycloakPrincipal<KeycloakSecurityContext> principal = (KeycloakPrincipal<KeycloakSecurityContext>) auth.getPrincipal();
        KeycloakSecurityContext context = principal.getKeycloakSecurityContext();
        boolean hasUserRole = context.getToken().getRealmAccess().isUserInRole("user");

        if (hasUserRole) {
            Formation addedFormation = formationService.addFormation(formation);
            return new ResponseEntity<>(addedFormation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }*/


    @PutMapping("/updateFormation")
    public Formation updateFormation(@RequestBody Formation formation){
        return formationService.updateFormation(formation);
    }

    @GetMapping("/getFormationById/{idFormation}")
    public Formation getFormationById(@PathVariable("idFormation") long idFormation){
        return formationService.getFormationById(idFormation);
    }

    @DeleteMapping("/deleteFormation/{idFormation}")
    public void deleteFormation(@PathVariable("idFormation") long idFormation){
        formationService.deleteFormation(idFormation);
    }

}
