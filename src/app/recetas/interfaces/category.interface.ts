import { SubCategory } from "./subcategory.interface";

export interface Category {
  name: string;
  subcategories: SubCategory[];
}
