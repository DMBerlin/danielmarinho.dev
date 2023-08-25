function formatDate(date: Date): string {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * @description This should return the time period between two dates to be used in the careers experiences.
 * @param {Date} from
 * @param {Date} to
 * @return string
 * @example getTimeDifference(new Date("2022-01-01"), new Date("2023-02-01")) should return "Jan 2022 - Fev 2023 • 1 yr 2 mos"
 */
export function getTimeDifference(from: Date, to: Date): string {
  const fromFormatted = formatDate(from);
  const toFormatted = formatDate(to);

  const diffInMonths =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth());
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  let result = `${fromFormatted} - `;
  if (
    new Date().getFullYear() === to.getFullYear() &&
    new Date().getMonth() === to.getMonth()
  ) {
    result += "Present";
  } else {
    result += toFormatted;
  }
  result += " • ";

  if (years > 0) {
    result += years === 1 ? `${years} yr ` : `${years} yrs `;
  }
  if (months > 0) {
    result += months === 1 ? `${months} mo` : `${months} mos`;
  }

  return result.trim();
}

/**
 * @description Receive two dates as Date and return its difference in years.
 * @param {string} date
 * @returns string
 * @example getDifferenceInYears(new Date("2016-10-22"), new Date("2023-08-24")) should return 6.
 */
export function getYearsOfMarriage(date: string): string {
  // Calculate the time difference in milliseconds
  const from: Date = new Date(date);
  const to: Date = new Date();
  if (isNaN(new Date(date).getMilliseconds())) {
    console.error(
      "Error parsing years of marriage. Have you passed the right date format?",
    );
    return "0";
  }
  const timeDiff: number = to.getTime() - from.getTime();
  // Convert milliseconds to years
  const millisecondsPerYear: number = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
  const years: number = Math.floor(timeDiff / millisecondsPerYear);
  // Return the years in string
  return years.toString();
}
