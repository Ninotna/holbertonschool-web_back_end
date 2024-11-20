/**
 * updateUniqueItems - Updates the values of unique items in a Map.
 * @arg map: The Map object to be processed.
 * Return: The updated Map object.
 */

export default function updateUniqueItems(map) {
  // Check if the input is an instance of a Map
  if (map instanceof Map) {
    // Iterate over each (key, value) pair in the Map
    map.forEach((value, key) => {
      // If the value is equal to 1, update it to 100
      if (value === 1) {
        map.set(key, 100);
      }
    });
  } else {
    // Throw an error if the input is not a Map
    throw new Error("Cannot process");
  }

  // Return the updated Map
  return map;
}
