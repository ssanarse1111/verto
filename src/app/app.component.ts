import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  activeScreen: number = 1;

  handleScreenChange(screen: number) {
    this.activeScreen = screen;
  }
}
