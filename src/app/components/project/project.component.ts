import { Component, Input } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = ''; // Image URL
  @Input() technologies: string[] = []; // Technologies as an array
  @Input() liveDemo: string = ''; // Live demo URL
  @Input() sourceCode: string = ''; // GitHub repository URL

  faGithub = faGithub;
  faExternalLink = faArrowUpRightFromSquare;
}
