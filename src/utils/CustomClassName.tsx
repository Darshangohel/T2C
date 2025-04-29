// Utility function to conditionally join class names
export function CustomClassName(...classes: (string | boolean | undefined | null)[]): string {
    return classes.filter(Boolean).join(' ');
  }