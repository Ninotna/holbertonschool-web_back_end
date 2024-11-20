/**
 * cleanSet - Returns a string of set elements starting with a given prefix,
 * separated by hyphens.
 * @arg set: A Set object containing elements to filter.
 * @arg startString: A string prefix to match elements in the set.
 * Return: A formatted string of matching elements or an empty string if
 * inputs are invalid.
 */
export default function cleanSet(set, startString) {
  /* Validate input types and startString length */
  if (
    typeof startString !== 'string'
    || typeof set !== 'object'
    || startString.length === 0
  ) {
    return '';
  }

  /* Initialize an array to hold matched elements */
  const str = [];

  /* Iterate through the set elements */
  for (const element of set) {
    /* Check if element starts with the prefix and is not null/undefined */
    if (element && element.startsWith(startString)) {
      /* Add the substring (without the prefix) to the array */
      str.push(element.slice(startString.length));
    }
  }

  /* Join array elements with a hyphen and return the result */
  return str.join('-');
}
