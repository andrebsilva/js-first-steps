let obja = new Object()

console.log(obja)

let objb = obja

obja.name = "Júlia M Barcelos"

console.log(objb.name)
console.log(typeof objb)

obja = null
objb = null

console.log("Object A: ", obja, typeof obja)
console.log("Object B: ", objb, typeof objb)