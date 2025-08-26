import { Router } from "express";

const router = Router();

// 1) Create employee
router.post("/employees", (req, res) => {
  return res.json({ message: "TODO", body: req.body });
});

// 2) Create shift
router.post("/shifts", (req, res) => {
  return res.json({ message: "TODO", body: req.body });
});

// 3) Assign employee to shift
router.post("/shifts/:shiftId/employees/:employeeId", (req, res) => {
  const { shiftId, employeeId } = req.params;
  return res.json({ message: "TODO", shiftId, employeeId, body: req.body });
});

// 4) List shifts for a restaurant (between from/to)
router.get("/restaurants/:id/shifts", (req, res) => {
  const { id } = req.params;
  const { from, to } = req.query;
  return res.json({ message: "TODO", restaurantId: id, from, to });
});

// 5) Employee clock-in (<= 10 min before start)
router.post("/shifts/:shiftId/employee/:employeeId/clock-in", (req, res) => {
  const { shiftId, employeeId } = req.params;
  return res.json({ message: "TODO", shiftId, employeeId, body: req.body });
});

// 6) Check missed clock-ins (simulate)
router.post("/shifts/:shiftId/check-missed", (req, res) => {
  const { shiftId } = req.params;
  return res.json({ message: "TODO", shiftId });
});

// Bonus: Dashboard/status for a shift
router.get("/shifts/:id/status", (req, res) => {
  const { id } = req.params;
  return res.json({ message: "TODO", shiftId: id });
});

export default router;
