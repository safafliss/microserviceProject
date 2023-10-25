package com.esprit.offremss.entities;
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
public class OffreEmploi  implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idOffreEmploi;
    private String title;
    private String description;
    private String category;
    private String company;
    private long salary;

    // Constructors, getters, and setters as needed
}
