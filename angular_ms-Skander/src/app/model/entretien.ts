import { StatutEntretien } from './StatutEntretien';
import {TypeEntretien } from './TypeEntretien';

export class Entretien {
  id: number;
  date_heure: Date;
  lieu: string;
  statut: StatutEntretien; // Assuming you have an enum for StatutEntretien
  notes: string;
  userId: number;
  created_at: Date;
  updated_at: Date;
  type_entretien: TypeEntretien; // Assuming you have an enum for TypeEntretien

  constructor() {
    this.id = null;
    this.date_heure = null;
    this.lieu = '';
    this.statut = null;
    this.notes = '';
    this.userId = null;
    this.created_at = null;
    this.updated_at = null;
    this.type_entretien = null;
  }

}