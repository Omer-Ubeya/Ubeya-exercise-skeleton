/**
 * Time and business logic helpers
 *
 * Helper functions to handle common time-based business rules
 * Feel free to use these to save time on date arithmetic
 */

/**
 * Check if current time is within the allowed clock-in window
 * Rule: Can clock in up to 10 minutes before shift start
 */
export function canClockIn(shiftStartTime: Date): boolean {
  const now = new Date();
  const tenMinutesBefore = new Date(shiftStartTime.getTime() - 10 * 60 * 1000);

  return now >= tenMinutesBefore && now <= shiftStartTime;
}

/**
 * Check if an employee missed their shift
 * Rule: Missed if they didn't clock in by shift start time
 */
export function isShiftMissed(
  shiftStartTime: Date,
  clockedInAt: Date | null
): boolean {
  if (!clockedInAt) {
    const now = new Date();
    return now > shiftStartTime;
  }
  return false;
}

/**
 * Parse date from query string (handles common formats)
 */
export function parseDate(dateString: string): Date | null {
  try {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
  } catch {
    return null;
  }
}
