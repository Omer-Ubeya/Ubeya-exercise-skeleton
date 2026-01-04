import { Router } from "express";

const router = Router();

/**
 * Assignment: Implement these routes for the shift management system
 * 
 * Feel free to add validation, error handling, and organize the code as you see fit.
 * You can create additional files for services, controllers, etc.
 */

// ========== EMPLOYEE ROUTES ==========

/**
 * Create a new employee
 * POST /employees
 * Body: { name: string, restaurantId: number, email?: string }
 */
router.post("/employees", (req, res) => {
  // TODO: Implement employee creation
  // 1. Validate request body
  // 2. Create employee using repository/model
  // 3. Return created employee or error
  return res.json({ message: "TODO: Implement employee creation", body: req.body });
});

/**
 * Get all employees for a restaurant
 * GET /restaurants/:id/employees
 */
router.get("/restaurants/:id/employees", (req, res) => {
  // TODO: Implement employee listing
  const { id } = req.params;
  return res.json({ message: "TODO: Implement employee listing", restaurantId: id });
});

// ========== SHIFT ROUTES ==========

/**
 * Create a new shift
 * POST /shifts
 * Body: { restaurantId: number, startTime: string, endTime: string }
 */
router.post("/shifts", (req, res) => {
  // TODO: Implement shift creation
  return res.json({ message: "TODO: Implement shift creation", body: req.body });
});

/**
 * Get shifts for a restaurant with optional date filtering
 * GET /restaurants/:id/shifts?from=2024-01-01&to=2024-01-31
 */
router.get("/restaurants/:id/shifts", (req, res) => {
  const { id } = req.params;
  const { from, to } = req.query;
  
  // TODO: Implement shift listing with date filtering
  // 1. Parse and validate date parameters
  // 2. Query shifts for restaurant within date range
  // 3. Return shifts with assignment info
  return res.json({ 
    message: "TODO: Implement shift listing", 
    restaurantId: id, 
    from, 
    to 
  });
});

// ========== SHIFT ASSIGNMENT ROUTES ==========

/**
 * Assign employee to shift
 * POST /shifts/:shiftId/employees/:employeeId
 * Body: { role?: string, isBackup?: boolean }
 */
router.post("/shifts/:shiftId/employees/:employeeId", (req, res) => {
  const { shiftId, employeeId } = req.params;
  
  // TODO: Implement shift assignment
  // 1. Validate shift and employee exist
  // 2. Check if assignment already exists
  // 3. Create shift assignment
  return res.json({ 
    message: "TODO: Implement shift assignment", 
    shiftId, 
    employeeId, 
    body: req.body 
  });
});

// ========== CLOCK-IN ROUTES ==========

/**
 * Employee clock-in for shift
 * POST /shifts/:shiftId/employee/:employeeId/clock-in
 * 
 * Business Rule: Can only clock in up to 10 minutes before shift start time
 */
router.post("/shifts/:shiftId/employee/:employeeId/clock-in", (req, res) => {
  const { shiftId, employeeId } = req.params;
  
  // TODO: Implement clock-in functionality
  // 1. Find shift assignment for employee and shift
  // 2. Check current time vs shift start time (10 min rule)
  // 3. Update clockedInAt timestamp
  // 4. Return success/error response
  return res.json({ 
    message: "TODO: Implement clock-in", 
    shiftId, 
    employeeId 
  });
});

// ========== REPORTING ROUTES ==========

/**
 * Check for missed shifts
 * POST /shifts/:shiftId/check-missed
 * 
 * Business Rule: Employee "missed" if they didn't clock in by shift start time
 */
router.post("/shifts/:shiftId/check-missed", (req, res) => {
  const { shiftId } = req.params;
  
  // TODO: Implement missed shift checking
  // 1. Find all assignments for the shift
  // 2. Check which employees didn't clock in by start time
  // 3. Return list of missed assignments
  return res.json({ 
    message: "TODO: Implement missed shift checking", 
    shiftId 
  });
});

export default router;
