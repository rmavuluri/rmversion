import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
