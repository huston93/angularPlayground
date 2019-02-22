import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  darkThemeOn: boolean;

  constructor() {}

  ngOnInit() {
    // Set default material theme for app
    document.body.classList.add('light-theme');
  }

  toggleDarkTheme() {
    // When Slide Toggle is pressed, switch theming for main app body
    if ( this.darkThemeOn ) {
      document.body.classList.replace('light-theme', 'dark-theme');
    } else {
      document.body.classList.replace('dark-theme', 'light-theme');
    }
  }
}
