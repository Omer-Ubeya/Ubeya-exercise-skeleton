/**
 * Example repository showing Sequelize patterns
 *
 * This file shows you examples of common database operations.
 * You can implement similar repositories for your assignment.
 *
 * Uncomment and adapt these examples as needed for your implementation.
 */

// import { Employee } from "../models/Employee";
// import { Op } from "sequelize";

export class ExampleRepository {
  /**
   * Example: Find all records with a WHERE clause
   */
  // static async findEmployeesByRestaurant(restaurantId: number) {
  //   return Employee.findAll({
  //     where: { restaurantId },
  //     include: [...], // Include related data (JOIN)
  //     order: [['name', 'ASC']]
  //   });
  // }
  /**
   * Example: Create a new record
   */
  // static async createEmployee(data: { name: string; restaurantId: number; email?: string }) {
  //   return Employee.create(data);
  // }
  /**
   * Example: Find single record by primary key
   */
  // static async findEmployeeById(id: number) {
  //   return Employee.findByPk(id, {
  //     include: [...] // Include related models
  //   });
  // }
  /**
   * Example: Update a record
   */
  // static async updateEmployee(id: number, data: { name?: string; email?: string }) {
  //   const [affectedRows] = await Employee.update(data, { where: { id } });
  //   return affectedRows > 0;
  // }
  /**
   * Example: Date range queries (useful for shifts)
   */
  // static async findShiftsByDateRange(startDate: Date, endDate: Date) {
  //   return Shift.findAll({
  //     where: {
  //       startTime: {
  //         [Op.between]: [startDate, endDate]
  //       }
  //     }
  //   });
  // }
  /**
   * Example: Complex queries with multiple conditions
   */
  // static async findAvailableShifts(restaurantId: number, date: Date) {
  //   return Shift.findAll({
  //     where: {
  //       restaurantId,
  //       startTime: {
  //         [Op.gte]: date
  //       }
  //     },
  //     include: [
  //       {
  //         model: ShiftAssignment,
  //         required: false // LEFT JOIN
  //       }
  //     ]
  //   });
  // }
}
