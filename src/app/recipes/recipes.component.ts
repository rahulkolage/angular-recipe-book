import { Component, OnInit } from "@angular/core";
// import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  // selectedRecipe: Recipe;

  constructor() {}
  //private recipeService: RecipeService

  ngOnInit(): void {
      // no longer needed as we are using route
      // this.recipeService.recipeSelected
      // .subscribe((recipe: Recipe) => {
      //   this.selectedRecipe = recipe;
      // });
  }
}
