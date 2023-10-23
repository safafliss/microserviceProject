package tn.esprit.test_ms.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.test_ms.entities.Test;
import tn.esprit.test_ms.services.TestService;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/tests")
public class TestController {
    TestService testService;

    @GetMapping("/getAllTests")
    public List<Test> getAllTests(){
        return testService.getAllTests();
    }

    @PostMapping("/addTest/{idFormation}")
    public Test addTest(@RequestBody Test test,@PathVariable(value = "idFormation") long idFormation) {
        return testService.addTest(test,idFormation);
    }

    @PutMapping("/updateTest")
    public Test updateTest(@RequestBody Test test){
        return testService.updateTest(test);
    }

    @GetMapping("/getTestById/{idTest}")
    public Test getTestById(@PathVariable("idTest") long idTest){
        return testService.getTestById(idTest);
    }

    @DeleteMapping("/deleteTest/{idTest}")
    public void deleteTest(@PathVariable("idTest") long idTest){
        testService.deleteTest(idTest);
    }
}
