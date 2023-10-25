package tn.esprit.candidate1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/candidats")
public class CandidatRestAPI {
    private String title = "Hello, I'm the candidate Microservice";
    @Autowired
    private CandidatService candidatService;

    @RequestMapping("/hello")
    public String sayHello() {
        System.out.println(title);
        return title;
    }

    @PostMapping
    @ResponseStatus
    public ResponseEntity<Candidat> CreateCandidat (@RequestBody Candidat c){
        return new ResponseEntity<>(candidatService.addCandidat(c), HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus
    public ResponseEntity<Candidat> UpdateCandidat (@RequestBody Candidat c, @PathVariable(value = "id") int id){
        return new ResponseEntity<>(candidatService.updateCandidat(c, id), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus
    public ResponseEntity<String> DeleteCandidat (@PathVariable(value = "id") int id){
        return new ResponseEntity<>(candidatService.deleteCandidat(id), HttpStatus.OK);
    }
}
