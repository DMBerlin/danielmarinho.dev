/**
 * @description Parse data into JSON to handle TS conflicts
 * @param {Object} data
 * @return JSON
 */
export function jsonfy(data: Object): JSON {
  return JSON.parse(JSON.stringify(data));
}
