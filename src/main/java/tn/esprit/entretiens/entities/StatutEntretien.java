package tn.esprit.entretiens.entities;

public enum StatutEntretien {
    PAS_ENCORE("Pas encore"),
    EN_COURS("En cours"),
    FINI("Fini");

    private String label;

    StatutEntretien(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
