//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

var number = Number(prompt("Please input a number"))

if (number > 0) {
    console.log("This is a positive number")
} else if (number < 0) {
    console.log("This is a negative number")
} else {
    console.log("Neither positive or negative, this number equals to zero")
}
