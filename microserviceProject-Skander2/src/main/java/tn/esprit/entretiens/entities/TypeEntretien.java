package tn.esprit.entretiens.entities;

public enum TypeEntretien {
    EN_LIGNE("En ligne"),
    PRESENTIEL("Présentiel");

    private String label;

    TypeEntretien(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
