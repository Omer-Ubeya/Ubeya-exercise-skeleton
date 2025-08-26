# shift-app

A minimal TypeScript + Express + Sequelize (SQLite) skeleton for interview tasks.

### Quickstart

```bash
# install deps
npm i

# start dev server (auto-reload)
npm run dev
# PORT defaults to 3000; override with: PORT=3001 npm run dev
```

### Project layout

- `src/db.ts`: initializes Sequelize (SQLite at `db.sqlite`)
- `src/models/`:
  - `Employee.ts`, `Shift.ts`, `ShiftAssignment.ts`: basic models
  - `index.ts`: `initModels()` wires associations once
- `src/repositories/`: simple examples of Sequelize usage
- `src/routes/shifts.ts`: scaffolded routes (return `{ message: "TODO" }`)
- `src/app.ts`: bootstraps Express and DB
- `src/seed.ts`: sample data helper (optional to call)

### Repositories – example usage

```ts
import { EmployeeRepository } from "./repositories/EmployeeRepository";
import { ShiftRepository } from "./repositories/ShiftRepository";
import { ShiftAssignmentRepository } from "./repositories/ShiftAssignmentRepository";

// find many
const employeesAtOne = await EmployeeRepository.findAllByRestaurant(1);

// find one
const firstShift = await ShiftRepository.findOneById(1);

// create
const newShift = await ShiftRepository.create({
  restaurantId: 1,
  startTime: new Date(),
  endTime: new Date(Date.now() + 4 * 3600 * 1000),
});

await ShiftAssignmentRepository.create({
  employeeId: 1,
  shiftId: newShift.id,
  role: "server",
  isBackup: false,
});
```

### Notes for candidates

- Models are intentionally simple; feel free to evolve schemas/associations.
- Add fields, indexes, validations, and migrations as you see fit.
- Implement the routes in `src/routes/shifts.ts` any way you prefer.
- You can add services/use-cases around repositories if you like.

### Endpoints (scaffolded)

- `POST /shifts`
- `GET /restaurants/:id/shifts`
- `POST /shifts/:shiftId/clock-in`
- `POST /shifts/:shiftId/check-missed`

All currently respond with `{ message: "TODO" }`.
