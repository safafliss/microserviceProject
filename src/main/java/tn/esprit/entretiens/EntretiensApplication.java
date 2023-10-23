package tn.esprit.entretiens;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import tn.esprit.entretiens.entities.Entretien;
import tn.esprit.entretiens.entities.StatutEntretien;
import tn.esprit.entretiens.entities.TypeEntretien;
import tn.esprit.entretiens.entities.User;
import tn.esprit.entretiens.repositories.EntretienRepository;
import tn.esprit.entretiens.repositories.UserRepository;

import java.util.Date;
import java.util.List;

@SpringBootApplication
@EnableEurekaClient
public class EntretiensApplication {

	public static void main(String[] args) {
		SpringApplication.run(EntretiensApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;

	@Bean
	public ApplicationRunner init(EntretienRepository entretienRepository) {
		return (args) -> {
			User user1 = new User();
			user1.setFirstName("John");
			user1.setLastName("Doe");
			user1.setEmail("john.doe@example.com");

			User user2 = new User();
			user2.setFirstName("Jane");
			user2.setLastName("Smith");
			user2.setEmail("jane.smith@example.com");

			// Enregistrement des utilisateurs dans la base de données
			userRepository.save(user1);
			userRepository.save(user2);



			// Créer deux entretiens
			Entretien entretien1 = new Entretien();
			entretien1.setDate_heure(new Date());
			entretien1.setLieu("Salle A");
			entretien1.setStatut(StatutEntretien.EN_COURS);
			entretien1.setNotes("Entretien en cours");
			entretien1.setUserId(1L);
			entretien1.setCreated_at(new Date());
			entretien1.setUpdated_at(new Date());
			entretien1.setType_entretien(TypeEntretien.PRESENTIEL);

			Entretien entretien2 = new Entretien();
			entretien2.setDate_heure(new Date());
			entretien2.setLieu("Salle B");
			entretien2.setStatut(StatutEntretien.PAS_ENCORE);
			entretien2.setNotes("Entretien à venir");
			entretien2.setUserId(2L);
			entretien2.setCreated_at(new Date());
			entretien2.setUpdated_at(new Date());
			entretien2.setType_entretien(TypeEntretien.EN_LIGNE);

			entretienRepository.save(entretien1);
			entretienRepository.save(entretien2);

			// Afficher tous les entretiens
			List<Entretien> entretiens = entretienRepository.findAll();
			System.out.println("Tous les entretiens :");
			for (Entretien entretien : entretiens) {
				System.out.println(entretien);
			}
		};
	}

}
