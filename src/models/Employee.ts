import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface EmployeeAttributes {
  id: number;
  name: string;
}

interface EmployeeCreationAttributes extends Optional<EmployeeAttributes, "id"> {}

export class Employee extends Model<EmployeeAttributes, EmployeeCreationAttributes> implements EmployeeAttributes {
  public id!: number;
  public name!: string;
}

Employee.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "Employee" }
);


