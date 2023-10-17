// this method usefull to parse string into number but work only if number was first

let n = "371 oussama";
let parseNumber = parseInt(n);
let splitNumber = parseNumber.toString().split("");
let nLength = parseNumber.toString().length;
let res = 0;

splitNumber.forEach(ele => res += Math.pow(ele, nLength));

console.log(res === parseNumber ? `${parseNumber} is a strong number` : "not");


// another method using regex to remove string and let only degits 

let n = "dwa 371oussama";
let parseNumber = Number(n.match(/\d+/g).join(""));
let splitNumber = parseNumber.toString().split("");
let nLength = splitNumber.length;
let res = 0;

splitNumber.forEach(ele => res += Math.pow(ele, nLength))

console.log(res === parseNumber ? parseNumber+" is a strong number" : "not");
