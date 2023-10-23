package tn.esprit.test_ms.entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Test implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idTest;
    private String test_name;
    private String description;
    private int passing_score;
    private Long duree;
    private String responsable;

    @ManyToOne
    private Formation formation;
}
