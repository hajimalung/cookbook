import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() id;
  @Output('onRecipeSelected') recipeSelectionEmitter =
    new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  onRecipeSelection() {
    this.recipeSelectionEmitter.emit(this.id);
  }
}
