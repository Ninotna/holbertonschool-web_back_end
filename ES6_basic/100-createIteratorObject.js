export default function createIteratorObject(report) {
  // Extract all employees from the report object
  const { allEmployees } = report;
  let employeesList = [];

  // Iterate through each department and concatenate the employee lists
  for (const department in allEmployees) {
    if (allEmployees.hasOwnProperty(department)) {
      employeesList = employeesList.concat(allEmployees[department]);
    }
  }

  // Return an iterator for the consolidated list of employees
  return employeesList[Symbol.iterator]();
}
