import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://www.ndtv.com/cooks/images/Honey.chilli.potatoes.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'http://www.ndtv.com/cooks/images/Honey.chilli.potatoes.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }

}
