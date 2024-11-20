/**
 * weakMap - A WeakMap to store the number of calls made to each endpoint.
 */
export const weakMap = new WeakMap();

/**
 * queryAPI - Tracks API endpoint calls and throws an error if an endpoint is overloaded.
 * @arg endpoint: The endpoint being queried.
 * Return: None. Throws an error if the endpoint is overloaded.
 */
export function queryAPI(endpoint) {
  // Check if the endpoint is already being tracked in the WeakMap
  if (weakMap.has(endpoint)) {
    // Increment the call count for the endpoint
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);

    // If the call count reaches or exceeds 5, throw an error
    if (weakMap.get(endpoint) >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // Initialize the endpoint with a call count of 1
    weakMap.set(endpoint, 1);
  }
}
