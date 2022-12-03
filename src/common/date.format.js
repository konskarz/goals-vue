function dateInput(str) {
  return str ? str.slice(0, 10) : null;
}
function dateOutput(str) {
  return new Date(str).toISOString();
}
function timeToDate(str) {
  return str ? new Date(str).toDateString() : "";
}

export { dateInput, dateOutput, timeToDate };
