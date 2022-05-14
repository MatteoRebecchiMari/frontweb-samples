import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() item?: Recipe;

  constructor() {
    this.item = new Recipe('A test recipe', 'This is a simply test',
      'https://media.istockphoto.com/photos/autumnal-fall-baking-background-picture-id1333137418');
  }

  ngOnInit(): void {
  }

}
