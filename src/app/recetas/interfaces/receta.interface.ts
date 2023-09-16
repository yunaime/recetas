import { Description } from "./receta.description.interface";
import { SubCategory } from "./subcategory.interface";

export interface Receta {
  name: string;
  img: string;
  categoryName: string;
  subCategory: SubCategory;
  description: Description;
}
