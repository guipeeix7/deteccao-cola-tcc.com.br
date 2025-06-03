import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeUtilsService {
  static calculateDateDifferenceInDays(date1: string, date2: string): number {
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);

    // Calculate the time difference in milliseconds
    const timeDifference = date1Obj.getTime() - date2Obj.getTime();

    // Convert the time difference to days
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    // Ensure the result is a positive number
    return Math.abs(daysDifference);
  }

  static timeDifferenceInMinutes(time1: string, time2: string): number {
    const [hours1, minutes1, seconds1] = time1.split(':').map(Number);
    const [hours2, minutes2, seconds2] = time2.split(':').map(Number);

    // Calculate the time difference in minutes
    const totalMinutes1 = hours1 * 60 + minutes1 + seconds1 / 60;
    const totalMinutes2 = hours2 * 60 + minutes2 + seconds2 / 60;
    let minutesDifference = totalMinutes2 - totalMinutes1;

    // return minutesDifference;

    if (minutesDifference < 0) {
      minutesDifference += 24 * 60;
    }
    return minutesDifference
  }
  static convertMinutesToHoursAndMinutes(minutes: number): { hours: number; minutes: number } {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return { "hours" : hours, "minutes": remainingMinutes };
  }
}
