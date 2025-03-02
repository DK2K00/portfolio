import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  fullName: string = 'Danush Kumar Rajasekaran';
  displayedName: string = '';
  nameIndex: number = 0;
  showNameCursor: boolean = true;

  description: string = 'I am a software developer that specializes in the MEAN stack and Spring boot.';
  displayedDescription: string = '';
  descriptionIndex: number = 0;
  showDescCursor: boolean = false;

  ngOnInit() {
    this.printNameLetterByLetter();
  }

  printNameLetterByLetter() {
    const nameInterval = setInterval(() => {
      if (this.nameIndex < this.fullName.length) {
        this.displayedName += this.fullName[this.nameIndex];
        this.nameIndex++;
      } else {
        clearInterval(nameInterval);
        this.showNameCursor = false;

        // Start description after a short delay
        setTimeout(() => {
          this.showDescCursor = true; // Show cursor only when typing starts
          this.printDescriptionLetterByLetter();
        }, 500);
      }
    }, 50); // Typing speed for name
  }

  printDescriptionLetterByLetter() {
    const descInterval = setInterval(() => {
      if (this.descriptionIndex < this.description.length) {
        this.displayedDescription += this.description[this.descriptionIndex];
        this.descriptionIndex++;
      } else {
        clearInterval(descInterval);
        this.showDescCursor = false; // Hide cursor when done
      }
    }, 25); // Typing speed for description
  }
}


