import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email = "danushkumarwork@gmail.com";
  linkedin = "https://www.linkedin.com/in/dk2k00/";
  github = "https://github.com/DK2K00";

  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  currentYear: number = new Date().getFullYear(); // Get current year dynamically
}
