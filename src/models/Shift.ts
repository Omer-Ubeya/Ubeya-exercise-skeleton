import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";

interface ShiftAttributes {
  id: number;
  startTime: Date;
  endTime: Date;
}

interface ShiftCreationAttributes extends Optional<ShiftAttributes, "id"> {}

export class Shift extends Model<ShiftAttributes, ShiftCreationAttributes> implements ShiftAttributes {
  public id!: number;
  public startTime!: Date;
  public endTime!: Date;
}

Shift.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    startTime: { type: DataTypes.DATE, allowNull: false },
    endTime: { type: DataTypes.DATE, allowNull: false },
  },
  { sequelize, modelName: "Shift" }
);
