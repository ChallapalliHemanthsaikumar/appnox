import { Component,HostListener  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CommonModule } from '@angular/common';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,DropdownComponent,CommonModule,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appnox';
  faPlay = faPlay


  isScrolled = false;

  // Event listener for window scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // Get the scroll position
    const scrollPosition = window.pageYOffset;

    // Define the threshold for applying the scrolled class
    const scrollThreshold = 100; // Adjust this value as needed

    // Update isScrolled based on the scroll position
    this.isScrolled = scrollPosition > scrollThreshold;
  }
}
