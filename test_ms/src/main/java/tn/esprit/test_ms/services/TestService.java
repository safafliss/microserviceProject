package tn.esprit.test_ms.services;

import tn.esprit.test_ms.entities.Test;

import java.util.List;

public interface TestService {
    List<Test> getAllTests();
    Test addTest(Test f,long idFormation);
    Test updateTest(Test f);
    Test getTestById(long idTest);
    void deleteTest(long idTest);
}
