import type { Category } from "@/lib/employee/ticketsApi"

type CategoryLike =
  | string
  | number
  | { id: number; name: string }
  | null
  | undefined

export function resolveCategoryName(
  category: CategoryLike,
  categories: readonly Category[]
): string {
  // string → already usable
  if (typeof category === "string") {
    return category
  }

  // object with name
  if (
    typeof category === "object" &&
    category !== null &&
    "name" in category &&
    typeof category.name === "string"
  ) {
    return category.name
  }

  // numeric id
  if (typeof category === "number") {
    const found = categories.find(c => c.id === category)
    return found?.name ?? "Unknown"
  }

  return "Unknown"
}
