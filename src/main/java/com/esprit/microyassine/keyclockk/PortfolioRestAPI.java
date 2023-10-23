package com.esprit.microyassine.keyclockk;

import com.esprit.microyassine.Services.PortfolioService;
import com.esprit.microyassine.entities.Portfolio;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.KeycloakSecurityContext;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/Portfolios")
public class PortfolioRestAPI {
	private String title = "Hello, I'm the Portfolioe Microservice";
	@Autowired
	private PortfolioService PortfolioService;
	@RequestMapping("/hello")
	public String sayHello() {
		System.out.println(title);
		return title;
	}
	@PostMapping
	@RequestMapping(value = "/user")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Portfolio> createPortfolio(@RequestBody Portfolio Portfolio, KeycloakAuthenticationToken auth) {
		KeycloakPrincipal<KeycloakSecurityContext> principal = (KeycloakPrincipal<KeycloakSecurityContext>) auth.getPrincipal();
		KeycloakSecurityContext context = principal.getKeycloakSecurityContext();
		boolean hasUserRole = context.getToken().getRealmAccess().isUserInRole("user");

		if (hasUserRole) {
			return new ResponseEntity<>(PortfolioService.addPortfolio(Portfolio), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}
	@PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Portfolio> updatePortfolio(@PathVariable(value = "id") Long id,
												   @RequestBody Portfolio Portfolio){
		return new ResponseEntity<>(PortfolioService.updatePortfolio(Portfolio), HttpStatus.OK);
	}
	@DeleteMapping(value = "/admin/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deletePortfolio(@PathVariable(value = "id") Long id, KeycloakAuthenticationToken auth){
		KeycloakPrincipal<KeycloakSecurityContext> principal = (KeycloakPrincipal<KeycloakSecurityContext>) auth.getPrincipal();
		KeycloakSecurityContext context = principal.getKeycloakSecurityContext();
		boolean hasUserRole = context.getToken().getRealmAccess().isUserInRole("admin");
		if (hasUserRole) {
		return new ResponseEntity<>(PortfolioService.deletePortfolio(id), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}
}
