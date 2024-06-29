import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-nos-offres',
  templateUrl: './nos-offres.component.html',
  styleUrls: ['./nos-offres.component.css']
})
export class NosOffresComponent implements OnInit{

  jobs: any[] = []; // Exemple de tableau de jobs, à remplacer par votre logique de récupération de données

  pagedJobs: any[] = []; // Offres d'emploi pour la page actuelle
  pageSize: number = 6; // Nombre d'éléments par page
  pageSizeOptions: number[] = [6, 12, 18, 40]; // Options de taille de page


  constructor() { }

  ngOnInit(): void {
    // Exemple de données de jobs à afficher
    this.jobs = [
      { "title": "Développeur Web", "company": "ABC Company", "description": "Description de l'offre pour développeur web." },
      { "title": "Ingénieur Logiciel", "company": "XYZ Inc.", "description": "Description de l'offre pour ingénieur logiciel." },
      { "title": "Développeur Full Stack", "company": "123 Technologies", "description": "Description de l'offre pour développeur full stack." },
      { "title": "Analyste en Sécurité Informatique", "company": "SecureData", "description": "Description de l'offre pour analyste en sécurité informatique." },
      { "title": "Chef de Projet IT", "company": "TechPro Solutions", "description": "Description de l'offre pour chef de projet IT." },
      { "title": "Développeur Mobile", "company": "Mobile Solutions Ltd.", "description": "Description de l'offre pour développeur mobile." },
      { "title": "Ingénieur Réseaux", "company": "Network Experts", "description": "Description de l'offre pour ingénieur réseaux." },
      { "title": "Designer UX/UI", "company": "Creative Designs Inc.", "description": "Description de l'offre pour designer UX/UI." },
      { "title": "Spécialiste en Intelligence Artificielle", "company": "AI Innovations", "description": "Description de l'offre pour spécialiste en intelligence artificielle." },
      { "title": "Développeur Java", "company": "Java Experts", "description": "Description de l'offre pour développeur Java." },
      { "title": "Administrateur Systèmes", "company": "SysAdmin Solutions", "description": "Description de l'offre pour administrateur systèmes." },
      { "title": "Consultant ERP", "company": "ERP Consulting Group", "description": "Description de l'offre pour consultant ERP." },
      { "title": "Architecte Cloud", "company": "Cloud Architects Inc.", "description": "Description de l'offre pour architecte cloud." },
      { "title": "Analyste de Données", "company": "Data Analytics Solutions", "description": "Description de l'offre pour analyste de données." },
      { "title": "Développeur Front-End", "company": "FrontEnd Solutions", "description": "Description de l'offre pour développeur front-end." },
      { "title": "Développeur Python", "company": "Python Masters Ltd.", "description": "Description de l'offre pour développeur Python." },
      { "title": "Ingénieur DevOps", "company": "DevOps Experts", "description": "Description de l'offre pour ingénieur DevOps." },
      { "title": "Analyste Business Intelligence", "company": "BI Analysts Inc.", "description": "Description de l'offre pour analyste business intelligence." },
      { "title": "Chef de Produit Digital", "company": "Digital Products Ltd.", "description": "Description de l'offre pour chef de produit digital." },
      { "title": "Technicien Support Informatique", "company": "IT Support Pros", "description": "Description de l'offre pour technicien support informatique." },
      { "title": "Développeur PHP", "company": "PHP Coders", "description": "Description de l'offre pour développeur PHP." },
      { "title": "Administrateur Base de Données", "company": "DB Admin Solutions", "description": "Description de l'offre pour administrateur base de données." },
      { "title": "Consultant CRM", "company": "CRM Consulting Experts", "description": "Description de l'offre pour consultant CRM." },
      { "title": "Chef de Projet Digital", "company": "Digital Projects Group", "description": "Description de l'offre pour chef de projet digital." },
      { "title": "Développeur Ruby on Rails", "company": "Rails Developers Ltd.", "description": "Description de l'offre pour développeur Ruby on Rails." },
      { "title": "Spécialiste en Réseaux Sociaux", "company": "Social Media Specialists", "description": "Description de l'offre pour spécialiste en réseaux sociaux." },
      { "title": "Analyste QA", "company": "QA Analysts Inc.", "description": "Description de l'offre pour analyste QA." },
      { "title": "Développeur C#", "company": "C# Coders Ltd.", "description": "Description de l'offre pour développeur C#." },
      { "title": "Administrateur Sécurité IT", "company": "IT Security Admins", "description": "Description de l'offre pour administrateur sécurité IT." },
       { "title": "Consultant SAP", "company": "SAP Consulting Group", "description": "Description de l'offre pour consultant SAP." }
    ];

    this.updatePage(0, this.pageSize);
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    this.updatePage(startIndex, event.pageSize);
  }

  updatePage(startIndex: number, pageSize: number) {
    this.pagedJobs = this.jobs.slice(startIndex, startIndex + pageSize);
  }
}
