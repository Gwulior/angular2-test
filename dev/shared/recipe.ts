import {Ingredient} from "./ingredient";
/**
 * Created by gwuli on 02.08.2016.
 */
export class Recipe {
  id: string;
  name: string;
  content: string;
  imageId: string;
  ingredients: Ingredient[];


  constructor(name:string, content:string, imageId:string, ingredients:Ingredient[]) {
      this.name = name;
      this.content = content;
      this.imageId = imageId;
      this.ingredients = ingredients;
      }
}
