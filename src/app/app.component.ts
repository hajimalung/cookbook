import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isRecipieBookOpen = true;
  onNaveTo(isRecipie: boolean) {
    this.isRecipieBookOpen = isRecipie;
  }
}
