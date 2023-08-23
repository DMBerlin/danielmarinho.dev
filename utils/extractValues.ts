export function extractValues<T, K extends keyof T>(arr: T[], key: K): T[K][] {
  return arr.map((item: T) => item[key]);
}
