import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isLoggedIn = false; 
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  logout() {
    this.isLoggedIn = false;
    console.log("User logged out");
    this.router.navigate(['/']);
  }

  toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
