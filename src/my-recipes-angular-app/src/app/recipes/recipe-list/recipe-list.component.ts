import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply test',
      'https://media.istockphoto.com/photos/autumnal-fall-baking-background-picture-id1333137418')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
