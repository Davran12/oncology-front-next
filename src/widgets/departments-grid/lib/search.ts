export const MIN_QUERY_LENGTH = 2;

export function normalize(value: string): string {
  return value.toLowerCase().replace(/ё/g, "е").replace(/\s+/g, " ").trim();
}

export function filterDepartments<T>(
  items: T[],
  query: string | undefined,
  getFields: (item: T) => Array<string | undefined>,
): T[] {
  const q = normalize(query ?? "");
  if (q.length < MIN_QUERY_LENGTH) return items;

  return items.filter((item) =>
    getFields(item).some((field) => field && normalize(field).includes(q)),
  );
}
