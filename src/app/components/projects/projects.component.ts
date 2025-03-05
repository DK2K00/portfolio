import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Directly defining projects here
  projects = [
    {
      title: 'Project One',
      description: 'This is the description for project one.',
      technologies: 'Angular, TypeScript, CSS'
    },
    {
      title: 'Project Two',
      description: 'This is the description for project two.',
      technologies: 'React, JavaScript, Sass'
    },
    {
      title: 'Project Three',
      description: 'This is the description for project three.',
      technologies: 'Vue, JavaScript, TailwindCSS'
    }
  ];
}

