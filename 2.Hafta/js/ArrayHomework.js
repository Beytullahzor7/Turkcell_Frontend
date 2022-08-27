//Bilgisayar tarafında rastgele olusturulmus kullanıcı tarafından bitis sayısına göre sayılar olusturulsun (1 to userInput)
//Bu sayilari bir diziye atama yapalım
//Bu sayılardan ilk eleman
//BU sayılardan son eleman
//Bu sayıları kücükten büyüge sıralayalım
//Bu sayilari büyükten kücüge sıralayalim
//Bu sayilarin toplamları
//Bu sayilarin cift sayi toplamları
//Bu sayilarin tek sayi toplamlari
//Bu sayilarin her birine 1 ekleyerek yeni dizi olusturularım

var number = Number(prompt("Please input a number"))

var userNumbers = []

for (var i = 0; i < number; i++) {
    var input = Number(prompt("Please input a number"))
    userNumbers.push(input)
}

function firstIndex() {
    document.write("<br>" + userNumbers[0])
}
// firstIndex()

function lastIndex() {
    document.write(userNumbers[userNumbers.length - 1])
}
// lastIndex()

function sortSmalltoBigger() {
    document.write(userNumbers.sort())
}
// sortSmalltoBigger()

function sortBigtoSmall() {
    document.write(userNumbers.reverse())
}
// sortBigtoSmall()

function sumOfArray() {
    var sum = 0
    for (var i = 0; i < userNumbers.length; i++) {
        sum += userNumbers[i]
    }
    document.write("Sum Of Array: " + sum)
}
// sumOfArray()

function sumOfEvenNumbers() {
    var sumEvenNumbers = 0
    for (var i = 0; i < userNumbers.length; i++) {
        if (userNumbers[i] % 2 == 0) {
            sumEvenNumbers += userNumbers[i]
        }
    }
    document.write("Sum Of Even Numbers: " + sumEvenNumbers)
}
// sumOfEvenNumbers()

function sumOfOddNumbers() {
    var sumOddNumbers = 0
    for (var i = 0; i < userNumbers.length; i++) {
        if (userNumbers[i] % 2 == 1) {
            sumOddNumbers += userNumbers[i]
        }
    }
    document.write("Sum Of Odd Numbers: " + sumOddNumbers)
}
// sumOfOddNumbers()

function addOneToArray() {
    var newArray = []

    for (var i = 0; i < userNumbers.length; i++) {
        newArray.push(userNumbers[i] + 1)
    }
    document.write(newArray)
}
// addOneToArray()