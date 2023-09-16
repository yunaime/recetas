import { Receta } from "../interfaces/receta.interface";
import { canapes } from "./canapes.db";
import { empanadas } from "./empanadas.db";
import { galletas } from "./galletas";

export const recetas: Receta[] = [
  ...empanadas,
  ...canapes,
  ...galletas
]
