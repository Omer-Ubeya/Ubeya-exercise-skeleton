# Restaurant Shift Management System - In-Office Assignment

Welcome to the Ubeya backend engineering in-office assignment! This is a skeleton TypeScript + Express + Sequelize (SQLite) application for managing restaurant shifts and employees.

## 🎯 Assignment Overview

You'll build a REST API for a restaurant shift management system that handles:

- Employee management
- Shift scheduling
- Shift assignments
- Clock-in functionality
- Basic reporting

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** (check with `node -v`)
- **npm** (comes with Node.js)

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The server will start on http://localhost:3000 (or PORT environment variable if set).

## 📁 Project Structure

```
src/
├── app.ts              # Express server setup
├── db.ts               # Sequelize database configuration
├── models/             # Database models (Employee, Shift, etc.)
│   ├── Employee.ts
│   ├── Shift.ts
│   ├── ShiftAssignment.ts
│   └── index.ts        # Model associations
├── repositories/       # Data access layer (examples provided)
│   └── ExampleRepository.ts
└── routes/
    └── routes.ts       # API routes (skeleton - implement these!)
```

## 🎯 Your Tasks

### Core Requirements

Implement the following API endpoints in `src/routes/routes.ts`:

#### 1. **Employee Management**

- `POST /employees` - Create a new employee
- `GET /restaurants/:id/employees` - List all employees in a restaurant

#### 2. **Shift Management**

- `POST /shifts` - Create a new shift
- `GET /restaurants/:id/shifts` - List shifts for a restaurant (with date filtering)
- `POST /shifts/:shiftId/employees/:employeeId` - Assign employee to shift

#### 3. **Clock-in System**

- `POST /shifts/:shiftId/employee/:employeeId/clock-in` - Employee clocks in for shift
- **Business Rule**: Employees can only clock in up to 10 minutes before shift start time

#### 4. **Reporting**

- `POST /shifts/:shiftId/check-missed` - Check if any assigned employees missed their shift
- **Business Rule**: Employee "missed" if they didn't clock in by shift start time

### 📋 Data Models

You need to create the following models (Employee.ts is provided as an example):

**Employee** (example provided)

- id, name

**Restaurant** (create this)

- id, name, address?, etc.

**Shift** (create this)

- id, restaurantId, startTime, endTime, etc.

**ShiftAssignment** (create this)

- id, employeeId, shiftId, role?, isBackup?, clockedInAt?, etc.

### 🔧 Implementation Guidelines

1. **Database**: SQLite with Sequelize ORM (already configured)
2. **Validation**: Add input validation as needed
3. **Error Handling**: Implement proper error responses
4. **Code Quality**: Write clean, readable code
5. **Testing**: Optional but appreciated

### 💡 Hints

- Check the `repositories/` folder for Sequelize usage examples
- The `models/index.ts` file shows association patterns you can copy
- Use `src/utils/timeHelpers.ts` for business rule logic (clock-in window, missed shifts)
- The database models support associations (Employee → Restaurant, Shift → Restaurant, etc.)
- Use the provided model interfaces and extend as needed
- Consider edge cases (invalid IDs, business rule violations, etc.)

## 📊 Example API Usage

```bash
# Create employee
curl -X POST http://localhost:3000/employees \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","restaurantId":1,"email":"john@example.com"}'

# Create shift
curl -X POST http://localhost:3000/shifts \
  -H "Content-Type: application/json" \
  -d '{"restaurantId":1,"startTime":"2024-01-15T10:00:00Z","endTime":"2024-01-15T18:00:00Z"}'

# Clock in
curl -X POST http://localhost:3000/shifts/1/employee/1/clock-in
```

## 🗃️ Database

- **Type**: SQLite (file: `db.sqlite`)
- **ORM**: Sequelize
- **Auto-sync**: Models sync automatically on startup
- **Sample Data**: You can add seed data if helpful

## ❓ Questions?

If you have questions about requirements or run into setup issues, please reach out!

## 🎯 Evaluation Criteria

- **Functionality**: Do the endpoints work as specified?
- **Code Quality**: Is the code clean and well-organized?
- **Error Handling**: Are edge cases handled gracefully?
- **Business Logic**: Are the business rules implemented correctly?
- **API Design**: Are the endpoints intuitive and RESTful?

Good luck! 🚀
