//ÖDEV-9
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Anonymous function algoritmasını yazalım switch-case   new Date().getDay()
// let deneme= function (){ }

/* Anonymous Function is a function that does not
   have any name associated with it. Normally we use
   the function keyword before the function name to
   define a function in JavaScript, however, in anonymous
   functions in JavaScript, we use only the function
   keyword without the function name */

let getDay = function () {
    switch (date) {
        case 0:
            console.log("Sunday")
            break;
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")
            break;
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
        default:
            console.log("Error Occurred!!!")
    }
}

var date = new Date().getDay()
getDay(date)