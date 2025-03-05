import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies: string = '';
}
