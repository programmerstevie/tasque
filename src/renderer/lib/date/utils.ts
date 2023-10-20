import Date_Constants from './constants';

const Date_Utils = {
  /**
   * gets the year from a date object
   *
   * @param date - The date
   * @returns The year as a string.
   */
  getYear: function (date: Date): string {
    return `${date.getFullYear()}`;
  },

  /**
   * gets the month from a date object
   *
   * @param date - The date
   * @returns The month as a string.
   */
  getMonth: function (date: Date): string {
    return Date_Constants.months[date.getMonth()];
  },

  /**
   * gets the date(day in month) from a date object
   *
   * @param date - The date
   * @returns The date as a string.
   */
  getDate: function (date: Date): string {
    return `${date.getDate()}${Date_Constants.ordinals[date.getDate() % 10]}`;
  },

  /**
   * gets the day of the week from a date object
   *
   * @param date - The date
   * @returns The day of the week as a string.
   */
  getDay: function (date: Date): string {
    return Date_Constants.days[date.getDay()];
  },

  /**
   * gets the date, day, month, and year from a date object
   *
   * @param date -The date
   * @returns an object with the date, day, month, and year values as string attributes
   */
  getAll: function (date: Date): {
    day: string;
    date: string;
    month: string;
    year: string;
  } {
    return {
      day: this.getDay(date),
      date: this.getDate(date),
      month: this.getMonth(date),
      year: this.getYear(date),
    };
  },
};

export default Date_Utils;
