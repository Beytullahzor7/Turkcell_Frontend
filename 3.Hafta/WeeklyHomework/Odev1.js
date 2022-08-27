//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

var x = Number(prompt("Please input x value:"))
var y = Number(prompt("Please input y value:"))

function calculateResult(number1, number2) {
    var result = (3 * number1) + (4 * number2)
    console.log("The result of y=3x+4k is: " + result)
}

calculateResult(x, y)
