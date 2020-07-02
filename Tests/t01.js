https://www.twilio.com/sms/pricing/us

sms = [
  [0.0075, 5000000],
  [0.0050, 20000000],
  [0.0030, 75000000],
  [0.0020, 150000000],
  [0.0015, 250000000],
  [0.0010, 500000000],
  [0.0005, 1000000000]
]
let counter = 0
for(let i = 0; i < sms.length; i++) {
  let quantityRelative = i > 0 ? sms[i][1] - sms[i-1][1] : sms[i][1]
  let value = sms[i][0] * quantityRelative
  counter += value
  print(sms[i][0], sms[i][1], quantityRelative, value, counter)
}

function print(price, quantityAbsolute, quantityRelative, value) {
  console.log(
    price.toFixed(4),
    '\t' + quantityAbsolute,
    '\t(' + quantityRelative + ')',
    '\t- US$', value.toFixed(2),
    '\t- US$', counter.toFixed(2))
}