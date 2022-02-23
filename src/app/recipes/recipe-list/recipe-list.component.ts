import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output('onRecipeItemSelected') recipeItemEmitter =
    new EventEmitter<Recipe>();
  selectedRecipe: Recipe;
  recipes: Recipe[] = [
    new Recipe(
      'test reciepe 1',
      'this is a test recipe described',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'test reciepe 2',
      'this is a test recipe described 2',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
    new Recipe(
      'test reciepe 3',
      'this is a test recipe described 3',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(reciepeId: number) {
    this.selectedRecipe = this.recipes[reciepeId];
    console.log('in r-list :' + this.selectedRecipe);
    this.recipeItemEmitter.emit(this.selectedRecipe);
  }
}
