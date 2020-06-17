let date = new Date();

console.log("Date:         ", date.getUTCDate())         // Current day of month
console.log("Day:          ", date.getUTCDay())          // Current position of the day in the week (0-6)
console.log("Month:        ", date.getUTCMonth())        // Current month (0-11)
console.log("Full Year:    ", date.getUTCFullYear())     // Current year (YYYY)
console.log("Milliseconds: ", date.getUTCMilliseconds()) // Current millisencond (0-999)
console.log("Seconds:      ", date.getUTCSeconds())      // Current second (0-59)
console.log("Minutes:      ", date.getUTCMinutes())      // Current minute (0-59)
console.log("Hours:        ", date.getUTCHours())        // Current hour (0-23)