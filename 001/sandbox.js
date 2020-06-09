const title = "Hello World!"

document.title = title

var ageVar = 18
let ageLet = 18
const ageConst = 18

document.getElementById("demoVar").innerHTML = ++ageVar
document.getElementById("demoLet").innerHTML = ++ageLet
document.getElementById("demoConst").innerHTML = ageConst

let text = `AgeVar ${ageVar}, AgeLet ${ageLet}, AgeConst ${ageConst}`

document.getElementById("demo").innerHTML = text