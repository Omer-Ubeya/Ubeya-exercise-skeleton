import { Employee } from "../models/Employee";

export const ExampleRepository = {
  async findById(id:number) {
    return Employee.findOne({ where: { id } });
  },
  async create(data: any) {
    return Employee.create(data);
  },
};


