import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipeItem: Recipe = new Recipe(
    'test reciepe 1',
    'this is a test recipe described',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'
  );
  constructor() {}

  ngOnInit(): void {}
  onRecipeItemSelected(recipe: Recipe) {
    this.selectedRecipeItem = recipe;
  }
}
