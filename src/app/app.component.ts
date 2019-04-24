import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  darkThemeOn: boolean;
  routes: Array<string>;
  activeRoute: string;
  showMessages = true;

  constructor() {}

  ngOnInit() {
    // Set default material theme for app
    document.body.classList.add('light-theme');
    this.routes = ['dashboard', 'heroes'];
    this.activeRoute = this.routes[0];
  }

  toggleDarkTheme() {
    // When Slide Toggle is pressed, switch theming for main app body
    if ( this.darkThemeOn ) {
      document.body.classList.replace('light-theme', 'dark-theme');
    } else {
      document.body.classList.replace('dark-theme', 'light-theme');
    }
  }

  onRouteChange() {
    this.showMessages = false;
    setTimeout(() => {
      this.showMessages = true;
    }, 500);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
