// Define the ClassValue type to avoid importing from clsx
type ClassValue = string | number | boolean | undefined | null | Record<string, boolean> | ClassValue[]

// Simple implementation of clsx
function clsx(...inputs: ClassValue[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .map((input) => {
      if (typeof input === "string" || typeof input === "number") return input
      if (typeof input === "object" && input !== null) {
        // Add null check before calling Object.entries
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(" ")
      }
      return ""
    })
    .join(" ")
}

// Simple implementation of twMerge
function twMerge(...classLists: string[]): string {
  return classLists.filter(Boolean).join(" ")
}

// Export the cn utility function
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs))
}
