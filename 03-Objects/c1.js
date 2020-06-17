let date = new Date();

console.log("\nNow:          ", Date.now())           // Current time as the number of milliseconds since January first, 1970 00:00:00:0000 UTC
console.log("Time:         ", date.getTime())         // Same as Date.now()

console.log("Date:         ", date.getDate())         // Current day of month
console.log("Day:          ", date.getDay())          // Current position of the day in the week (0-6)
console.log("Month:        ", date.getMonth())        // Current month (0-11)
console.log("Full Year:    ", date.getFullYear())     // Current year (YYYY)
console.log("Milliseconds: ", date.getMilliseconds()) // Current millisencond (0-999)
console.log("Seconds:      ", date.getSeconds())      // Current second (0-59)
console.log("Minutes:      ", date.getMinutes())      // Current minute (0-59)
console.log("Hours:        ", date.getHours())        // Current hour (0-23)
