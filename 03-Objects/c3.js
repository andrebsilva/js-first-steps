

let dayWeekName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var i = 0;

// let date = new Date("2010-10-18T16:32:54");

function timeRepeat() {

  let date = new Date();

  let hour = (date.getUTCHours()<10?'0':'') + date.getUTCHours()
  let minute = (date.getUTCMinutes()<10?'0':'') + date.getUTCMinutes()
  let second = ('0'+date.getUTCSeconds()).slice(-2)
  let dayName = dayWeekName[date.getUTCDay()].substr(0,3)
  let day = (date.getUTCDate()<10?'0':'') + date.getUTCDate()
  let month = monthName[date.getUTCMonth()].substr(0,3)
  let year = date.getUTCFullYear()

  setTimeout(() => {
    console.log(hour + ":" + minute + ":" + second, dayName, day, month, year)
    if(i < 10) {
      i++
      timeRepeat()
    }
  }, 1000)
}

timeRepeat()
