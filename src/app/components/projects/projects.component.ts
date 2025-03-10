import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  // Directly defining projects here
  projects = [
    {
      title: 'Original Clothing',
      description: 'An online clothing store where users can add and shop for clothes.',
      image: 'assets/images/original.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      liveDemo: 'https://github.com/DK2K00/original-clothing',
      sourceCode: 'https://github.com/DK2K00/original-clothing',
    },
    {
      title: 'Assignment Tracker',
      description:
        'Track your university assignments from assigned date, current status and due date.',
      image: 'assets/images/assignment.jpg',
      technologies: ['Spring Boot', 'Postgres', 'Docker', 'Java'],
      liveDemo: 'https://github.com/DK2K00/Assignment-tracker/tree/main',
      sourceCode: 'https://github.com/DK2K00/Assignment-tracker/tree/main',
    },
    {
      title: 'Pictorial',
      description:
        'A Java based Tic Tac Toe game where pictures are used instead of X and O.',
      image: 'assets/images/pictorial.png',
      technologies: ['Java'],
      liveDemo: 'https://github.com/DK2K00/pictorial/tree/main',
      sourceCode: 'https://github.com/DK2K00/pictorial/tree/main',
    },
  ];
}
