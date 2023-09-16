import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta.interface';
import { Category } from '../interfaces/category.interface';
import { recetas } from '../db/recetas.db';
import { categories } from '../db/categories.db';
import { SubCategory } from '../interfaces/subcategory.interface';

@Injectable({providedIn: 'root'})
export class RecetasService {
  constructor() { }

  byName(name: string): Receta | undefined {
    return recetas.find( r => r.name === name);
  }

  search( term: string): Receta[] {
    const value = term.toLowerCase();
    console.log(recetas.length)
    return recetas
    .filter( r => r.name.toLowerCase().includes(value) ||
                  r.categoryName.toLowerCase().includes(value) ||
                  r.subCategory.name.toLowerCase().includes(value))
  }

  byCategory(cat: string): Receta[] {
    console.log( ' by category ', cat )
    return recetas
    .filter( r => r.categoryName === cat)
  }

  bySubCategory(sub: string): Receta[] {
    return recetas
    .filter( r => r.subCategory.name === sub)
  }

  allCategory(): Category[] {
    // const res = categories
    // return new Set(res);
    return categories;
  }

  subCategories(cat: string): SubCategory[] {
    const sc = categories.find (c => c.name === cat )?.subcategories;
    console.log('Subcateories: ', sc )
    return sc || []
  }

  subCategoryByName(term: string): SubCategory | undefined {
    const sub = categories.find (c => c.subcategories.find( s => s.name === term ))?.subcategories.find( s => s.name == term)
    return sub
  }

}
