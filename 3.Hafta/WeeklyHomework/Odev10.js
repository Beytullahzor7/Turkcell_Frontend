//ÖDEV-10
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye
//çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin
//eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde
//bulduğumuz bize söylesin

function guessTheNumber() {
    var randomNumber = Math.floor(Math.random() * 10) + 1 //Range between 1-10
    var userRight = 5
    var count = 0

    while (userRight > 0) {
        var userNumber = Number(prompt("Please input a number"))
        count++
        if (userNumber === randomNumber) {
            console.log("Congratulations you found the random number: " + randomNumber)
            console.log("At your " + count + ". time")
            break;
        } else if (userNumber > randomNumber) {
            console.log("Please input a lower number")
            userRight -= 1
        } else if (userNumber < randomNumber) {
            console.log("Please input a higher number")
            userRight -= 1;
        }
    }
    if (userRight == 0) {
        console.log("GAME OVER!!!")
    }
}

guessTheNumber()
