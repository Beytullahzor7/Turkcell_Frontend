// DATE

//Date get()
var tarih = new Date()
document.writeln("<br" + "Dakika --> " + tarih.getMinutes())
document.writeln("<br" + "Saat --> " + tarih.getHours())
document.write("<br>" + "Gun --> " + tarih.getDate())
document.write("<br>" + "Ay --> " + tarih.getMonth())
document.write("<br>" + "Yil --> " + tarih.getFullYear())

//Date set()
var tarih2 = new Date("2022-2-1")
document.write("<br>" + "Gun " + tarih2.getDate())
document.write("<br>" + "Ay " + tarih2.getMonth())
document.write("<br>" + "Yil " + tarih2.getFullYear())

function getDateHoursControl() {
    var hour = new Date().getHours()

    if (hour >= 13) {
        document.write("<br>" + hour)
        document.write("<br>" + "Afternoon")
    } else {
        document.write("<br>" + hour)
        document.write("<br>" + "Morning")
    }
}
getDateHoursControl()