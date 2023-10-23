package tn.esprit.test_ms.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Formation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idFormation;
    private String title;
    private String description;
    private String category;
    private String instructor;
    private String language;
    private long duration;
    private long price;
    private int nbr_sessions;
}
