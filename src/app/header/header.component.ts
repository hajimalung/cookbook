import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cookbook-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output('navTo') navEmitter = new EventEmitter<boolean>();

  onRecipie() {
    this.navEmitter.emit(true);
  }
  onShopping() {
    this.navEmitter.emit(false);
  }
}
