export const dateRange = (start: string, end: string | undefined): string => {
  end = end || "Present";
  return start + " - " + end;
};
