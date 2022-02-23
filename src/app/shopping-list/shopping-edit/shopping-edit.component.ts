import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output('newItemAdded') newItemEmitter = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}
  addNewItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.newItemEmitter.emit(
      new Ingredient(nameInput.value, Number(amountInput.value))
    );
  }
}
