/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// const isWeekend = (day: string): boolean => {
//     switch (day) {
//         case 'saturday':
//             return true
//         case 'sunday' :
//             return true
//         default :
//             return false
//     }
// }

enum Days {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday',
}

const isWeekend = (day: Days): boolean => {
    if (day === 'Saturday' || day === "Sunday") {
        return true
    }
    return false
}

console.log(isWeekend(Days.Sunday)) // true
console.log(isWeekend(Days.Friday)) // false