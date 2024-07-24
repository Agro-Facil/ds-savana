export const isObject = (value: any) => {
  return value && typeof value === 'object' && !Array.isArray(value) && !(value instanceof RegExp);
}