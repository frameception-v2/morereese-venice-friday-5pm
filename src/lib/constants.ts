export const PROJECT_ID = 'venice-friday-5pm';
export const PROJECT_TITLE = "Venice Friday 5pm";
export const PROJECT_DESCRIPTION = "Countdown to Friday 5pm UTC";

// Next Friday 5pm UTC
export const TARGET_DATE = Date.UTC(
  new Date().getUTCFullYear(),
  new Date().getUTCMonth(),
  // Get next Friday (day 5). If today is Friday, add 7 days
  new Date().getUTCDate() + (5 - new Date().getUTCDay() + 7) % 7,
  17, 0, 0
);
