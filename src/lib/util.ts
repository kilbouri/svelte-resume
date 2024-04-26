export const dateRange = (start: string, end: string | undefined): string => {
  if (!end) {
    return start;
  }

  return start + " - " + end;
};
