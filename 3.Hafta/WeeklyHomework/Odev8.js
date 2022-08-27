//ÖDEV-8
//Zamanı dinamik olarak alıp hangi gün olduğunu gösteren Arrow function algoritmasını yazalım switch-case  new Date().getDay()

let showDay = (date) => {
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

showDay(new Date().getDay())