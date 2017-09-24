import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'http://www.ndtv.com/cooks/images/Honey.chilli.potatoes.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('A Test Recipe 2',
      'This is simply a test 2',
      'http://www.ndtv.com/cooks/images/Honey.chilli.potatoes.jpg',
      [
        new Ingredient('Buns', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
