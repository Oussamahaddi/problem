let number = '-00051000';
let op;

if (number < 0) {
    op = number.toString().split("").shift();
    console.log(op + Number(number.toString().split("").slice(1).reverse().join("")))
}
else {
   console.log(Number(number.toString().split("").reverse().join("")))
}
