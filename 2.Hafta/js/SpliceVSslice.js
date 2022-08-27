var dizi = [1, 2, 3, 4, 5]

document.write(dizi)
document.write("<br>" + dizi.slice(0, 3))
document.write("<br>" + dizi)

document.write("<br>" + "*********************")

var dizi2 = [1, 2, 3, 4, 5]

document.write("<br>" + dizi2)
document.write("<br>" + dizi2.splice(0, 3))
document.write("<br>" + dizi2)

document.write("<br>" + "*********************")

var dizi3 = [1, 2, 3, 4, 5]
dizi3.splice(2, 0, "karpuz", "kavun")

document.write("<br>" + dizi3)



