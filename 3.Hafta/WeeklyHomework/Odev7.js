//ÖDEV-7
//Zamanı dinamik olarak alıp hangi gün olduğunu gösteren Immedia function algoritmasını yazalım switch-case   new Date().getDay()
// ()()

//2- IMMEDIA FUNCTION :
//An immediate function is one that executes as soon
//as it is defined. Creating an immediate function is simple: you add the
//open/close parentheses after the closing curly bracket, and then wrap the
//entire function in parentheses. That’s it!

//IMMEDIA FUNCTION EXAMPLE
(function whichDayFunction() {
    var date = new Date().getDay()

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
})()
