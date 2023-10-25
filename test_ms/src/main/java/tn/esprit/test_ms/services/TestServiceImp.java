package tn.esprit.test_ms.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tn.esprit.test_ms.entities.Formation;
import tn.esprit.test_ms.entities.Test;
import tn.esprit.test_ms.repositories.TestRepository;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

@AllArgsConstructor
@Service
public class TestServiceImp implements TestService{
    TestRepository testRepository;

    @Override
    public List<Test> getAllTests() {
        return testRepository.findAll();
    }

    @Override
    public Test addTest(Test f,long idFormation) {
        try {
            String apiUrl = "http://formation:8088/api/formations/getFormationById/"+idFormation; // Replace with the actual URL

            URL url = new URL(apiUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();

            if (responseCode == 200) {
                ObjectMapper objectMapper = new ObjectMapper();
                Formation formation = objectMapper.readValue(connection.getInputStream(), Formation.class);
                f.setFormation(formation);
                return testRepository.save(f);
            } else {
                System.out.println("HTTP GET request failed with response code: " + responseCode);
            }

            connection.disconnect();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Test updateTest(Test f) {
        return testRepository.save(f);
    }

    @Override
    public Test getTestById(long idTest) {
        return testRepository.findById(idTest).orElse(null);
    }

    @Override
    public void deleteTest(long idTest) {
        testRepository.deleteById(idTest);
    }


}
