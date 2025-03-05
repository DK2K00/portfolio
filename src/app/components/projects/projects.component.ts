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
      title: 'Project One',
      description: 'This is the description for project one.',
      image: 'assets/images/project1.png',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      liveDemo: 'https://your-live-demo-url.com/project-one',
      sourceCode: 'https://github.com/yourusername/project-one'
    },
    {
      title: 'Project Two',
      description: 'This is the description for project two.',
      image: 'assets/images/project2.png',
      technologies: ['React', 'JavaScript', 'Sass'],
      liveDemo: 'https://your-live-demo-url.com/project-two',
      sourceCode: 'https://github.com/yourusername/project-two'
    }
  ];
}
