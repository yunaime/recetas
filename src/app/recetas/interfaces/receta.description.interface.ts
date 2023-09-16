import { Step } from "./receta.steps.interface";

export interface Description {
  desc: string;
  additionalInfo?: string;
  steps: Step[];
  comensales: number;
  ingredients: string[];
  time: string;
  plateType: string;
  dificulty: string
}
