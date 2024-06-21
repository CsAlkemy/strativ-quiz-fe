import * as DateFns from 'date-fns';
export function getTimeDifference(inputDate: Date | string): string {
    const currentDate = new Date();
    const dateToCompare = new Date(inputDate);

    const diffSeconds = DateFns.differenceInSeconds(currentDate, dateToCompare);
    const diffMinutes = DateFns.differenceInMinutes(currentDate, dateToCompare);
    const diffHours = DateFns.differenceInHours(currentDate, dateToCompare);
    const diffDays = DateFns.differenceInDays(currentDate, dateToCompare);

    if (diffSeconds < 60) {
        return `${diffSeconds} seconds ago`;
    } else if (diffMinutes < 60) {
        return `${diffMinutes} ${diffMinutes > 1 ? 'minutes' : 'minute'} ago`;
    } else if (diffHours < 24) {
        return `${diffHours} ${diffHours > 1 ? 'hours' : 'hour'} ago`;
    } else {
        return `${diffDays} ${diffDays > 1 ? 'days' : 'day'} ago`;
    }
}
