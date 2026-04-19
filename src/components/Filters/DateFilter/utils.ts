import type { Period } from "./types";
import {
  endOfDay,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from "date-fns";

export function getPeriodRange(period: Period, date = new Date()) {
  switch (period) {
    case "day":
      return [startOfDay(date), endOfDay(date)];
    case "week":
      return [
        startOfWeek(date, { weekStartsOn: 1 }),
        endOfWeek(date, { weekStartsOn: 1 }),
      ];
    case "month":
      return [startOfMonth(date), endOfMonth(date)];
    case "year":
      return [startOfYear(date), endOfYear(date)];
    default:
      return [null, null];
  }
}

export const toStringRange = (
  range: [Date | null, Date | null],
): [string | null, string | null] => [
  range[0] ? format(range[0], "yyyy-MM-dd") : null,
  range[1] ? format(range[1], "yyyy-MM-dd") : null,
];
