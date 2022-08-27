//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32

var degree = Number(prompt("Please input a degree"))
console.log("Degree:" + degree + "°C")

function degreeToFahrenheit(degree) {
    var fahrenheit = (degree * 9 / 5) + 32
    console.log(degree + " °C is equal to " + fahrenheit + "°F")
}

degreeToFahrenheit(degree)
