import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isAdmin(): boolean {
    // Replace with your logic to check if user is admin
    // Example:
    // return this.authService.getUserRole() === 'admin';
    return true; // Placeholder
  }

  isManager(): boolean {
    // Replace with your logic to check if user is manager
    // Example:
    // return this.authService.getUserRole() === 'manager';
    return true; // Placeholder
  }

  isUser(): boolean {
    // Replace with your logic to check if user is regular user
    // Example:
    // return this.authService.getUserRole() === 'user';
    return true; // Placeholder
  }
}
