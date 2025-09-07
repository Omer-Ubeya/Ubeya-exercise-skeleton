import { sequelize } from "../db";
import { Employee } from "./Employee";
import { Shift  } from "./Shift";

export function initModels() {
  // Wire associations once here


  return sequelize;
}

export const models = {
  Employee,
  Shift,
};


