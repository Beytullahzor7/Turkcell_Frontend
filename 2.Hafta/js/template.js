//JS tek satırlık yorumlama

/* multi line comment*/

//pop-up alert
//alert("Deneme")
//window.alert("deneme window");

//window ==> Hepsi
// document ==> o sayfa ile calısmak anlamına gelir

//alert("pop-up")
// window.alert("window pop-up")
// console.log("asd")
// document.write("Deneme")

//Kullanıcıdan veri almak (javadaki scanner)
// var name = prompt("Lutfen adinizi giriniz")
// console.log(name)



// VARIABLE ==> JS de değişken isimleri $ ve _ haric özel bir karakterle veya sayı ile baslamaz
// var isim = "Beytullah"
// isim = "beytullah"
// isim = false
// isim = 55
// console.log(isim)

// var name = "beytullah"
// name55 = "b"
//55name = "b"  >>> Burası hata verir degisken isimleri harf ile baslayamaz
//-name = "b" >>> Burası hata verir degisken isimleri harf ile baslayamaz
// $name = "a" >>> Hata vermez degisken isimleri dolar işareti ile baslayabilir
// _name = "a" >>> Hata vermez degisken isimleri underscore ile baslayabilir

//Yaygın olarak camelCase isimlendirme tercih edilir
// console.log("_Asd")

//VARIABLE INITIALIZATION
// var x1; //UNDEFINIED
// console.log(x1)

//NON = Not A Number
// var x2 = 9/"abc"
// console.log(x2)

//INFINITY
// var x3 = 8/0
// console.log(x3)

//Operator
//logic operators       : &&=VE  ||=VEYA
//mathematics operators : + - / * %
//comparison operators: > >= < <= ! ==  ===
//postfix ==>  x++ == post increment , ++x == preincrement

//POSTFIX
//  var num = 5
// console.log(++num) ==> 6
// console.log(num++) == >5
// console.log(--num) ==> 4
// console.log(num--) ==> 5

// 1 byte = 8 bit
// bit < byte < GB < TB
// 1 bit =0
// Binary codes (2) ==> (0 1)
// octal (8)        ==> (01234567)
// decimal (10)     ==> (0123456789)
// hexadecimal (16) ==> (0123456789abcdef)

//new = Hafızada yer acmak
//null = hafızayı bosaltmak

// =   atama
// ==  eşit mi (ancak türüne bakma)  "5" 5 TRUE
// === eşit mi (türüne bak)          "5" 5 FALSE
// console.log(5=="5") --> TRUE
// console.log(5==="5") --> FALSE

// var result = "Samsun"
// console.log(typeof result) -->String

// var result = 55.38
// console.log(typeof result) -->Number

// var result = true
// console.log(typeof result) -->boolean

// var x1=9, x2=2, x3
// x3 = x1+x2
// console.log(x3)

// x3 = x1*x2
// console.log(x3)

// x3 = x1%x2
// console.log(x3)

//CAST = Dönüstürmektir. DB islemlerinde veriler stringtir. Bu yüzden yapmak istedigimiz işlemleri casting ile gerceklestiririz

//Bir seyi sayıya cevirmek --> Number()
//Bir seyi stringe cevirmek --> String()

// var x1 = Number(prompt("Lufen bir sayi giriniz"))
// console.log(x1**2)

//Math --> Static bir yapıdır
// document.write(Math.random())
// document.write(Math.min(5, 2, 13, -4))
// document.write(Math.max(3, 15, 99, -5, -7))
// document.write(Math.sqrt(16))
// document.write(Math.pow(6))
// document.write(Math.abs(-5))

//Yuvarlama
// document.write(Math.floor(5.9)) --> 5
// document.write(Math.ceil(5.1)) --> 6
// document.write(Math.round(5.4)) --> 5
// document.write(Math.round(5.5)) -- 6

//Kullanıcı tarafından aldıgımız 2 sayı üzerine islemler
// s1-) Bu sayılardan en kücügü nedir
// s2-) Bu sayılardan en büyügü nedir
// s3-) Bu sayılardan en kücügünün karekökö
// s4-) Bu sayılardan en kücügünün karekökünün üste yuvarlanması
// s5-) Bu sayılardan en büyügünün mutlagı
// s6-) Bu sayılardan en büyügü alt taban en kücügü üst taban seklinde üstünü alalım

// var num1 = Number(prompt("Lutfen 1. sayiyi giriniz"))
// var num2 = Number(prompt("Lutfen 2. sayiyi giriniz"))

// console.log(Math.min(num1,num2))
// console.log(Math.max(num1,num2))
// console.log(Math.sqrt(Math.min(num1,num2)))
// console.log(Math.ceil(Math.sqrt(Math.min(num1,num2))))
// console.log(Math.abs(Math.max(num1,num2)))
// console.log(Math.pow(Math.max(num1,num2), Math.min(num1,num2)))

// //Number
// var number=44;
// number=44.33;
// document.write(number+"<br>")

// var bilimsel=14E+5;
// bilimsel=14E-5;
// document.write(bilimsel+"<br>")

// 10 tabandan diger tabanlara cevirme
// var decimal = 10
// document.write(decimal.toString(2)+ "<br>")
// document.write(decimal.toString(8)+ "<br>")
// document.write(decimal.toString(16)+ "<br>")

// var castNumber = "14"
// document.write(castNumber+castNumber+"<br>") --> 1414
// document.write(Number(castNumber) + Number(castNumber)) --> 28

//NaN = Not a Number
// document.write("result: " + (16/"asd") + "<br>")

//isNan
// var number = 200/5
// document.write("result2: " + isNaN(number))
//isNaN = false -> bu bir sayıdır
//isNaN = true -> bu bir sayı degildir

//String
//Dikakt: length aç kapa parentez yoktur.
// var kelime = "html5 css3 responsive Bootstrap JAVASCRIPT css3 ";
// document.write(kelime+"<br>")
// document.write("harf sayısı: "+kelime.length+"<br>")
// document.write("trimlenmiş harf sayısı: "+kelime.trim().length+"<br>") -->Trim = Bastaki ve sondaki boslukları siler

// document.write("hepsi küçük harf: "+kelime.toLowerCase()+"<br>")
// document.write("hepsi büyük harf: "+kelime.toUpperCase()+"<br>")

// document.write("startsWith: "+kelime.startsWith('h')+"<br>")
// document.write("endsWith: "+kelime.endsWith(' ')+"<br>")

// document.write("concat: " + kelime.concat("-sona eklendi")+"<br>")

// var degistirilmis = "Merhabalar"
// document.write("replace: "+kelime.replace(kelime, degistirilmis)+"<br>")

// document.write("substring: "+kelime.substring(6)+"<br>") --> 6.indexten itibaren sona kadar al
// document.write("substring: "+kelime.substring(0,5)+"<br>") --> 0-5 aralıgındaki karakterleri al

// document.write("charAt: " + kelime.charAt(1) + "<br>")

// document.write("indexOf: " + kelime.indexOf("css3") + "<br>")
// document.write("indexOf: " + kelime.lastIndexOf("css3") + "<br>")


// ############################################################################################################################
//ODEV

//CAST
//String()

//Kullanıcıdan alınan bir kelimenin
//s1) Kac karakterlidir
//s2) Bosluklar alınarak kac karakterlidir
//s3) Bütün kelimeyi kücük harflerle göstermek
//s4) Bütün kelimeyi büyük harflerle göstermek
//s5) Ilk harfiniz nedir
//s6) Girdiginiz kelime java ile baslıyor mu
//s7) Girdiginiz kelimenin sonuna "-ben js ogreniyorum"
//s8) Girdiginiz 0 ile 4 arasındaki indexi ekrana gösterin
//s9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?

// var word = String(prompt("Please input a word"))

// document.write("Kelime Sayisi " + word.length + "<br>")
// document.write("Trim " + word.trim().length + "<br>")
// document.write("Lowercase " + word.toLowerCase() + "<br>")
// document.write("Uppercase " + word.toUpperCase() + "<br>")
// document.write("Ilk harf " + word.charAt(0) + "<br>")
// document.write("CheckJava " + word.startsWith("java") + "<br>")
// document.write("Concat " + word.concat("-ben js ogreniyorum") + "<br>")
// document.write("Substring " + word.substring(0, 4) + "<br>")

// var secondWord = String(prompt("Please input the second word"))
// document.write("Replace " + word.replace(word, secondWord))

// ############################################################################################################################


//Adınızı ve soyadınızı json objesine ekleyip daha sonra bu json objesini
//stringe cevirip daha sonra adınızı ve soyadınızı document.write ile ekranda gösterin
// var nameSurname = {
//     "adi": "Beytullah",
//     "soyadi": "Zor"
// };

// var jsonName = JSON.stringify(nameSurname) //JsonToString
// var stringName = jsonName.substring(8, 17)
// var stringSurname = jsonName.substring(29, 32)
// document.write(stringName + "&nbsp" + stringSurname + "<br>")

// var nameAndSurname = {
//     "name" : "Beytullah",
//     "surname" : "Zor",
//     "number" : "0543"
// };

// var js_string = JSON.stringify(nameAndSurname);
// var obj = JSON.parse(js_string)

// document.write(obj.name + "&nbsp" + obj.surname + "&nbsp" + obj.number);

// var nameandSurname = {
//     "name": "Beytullah",
//     "surname": "Zor",
//     "number": "543"
// }

// var jsonToString = JSON.stringify(nameandSurname)
// var parseJson = JSON.parse(jsonToString)
// document.write("Name: " + parseJson.name + "\t" + "Surname: " + parseJson.surname + "\t" + "Number: " + parseJson.number)

// var dynamicParse = JSON.parse(JSON.stringify(nameandSurname))
// document.write(dynamicParse.name + "\t" + dynamicParse.surname)


//FUNCTION

// 1) Returnsuz, parametresiz fonksiyon
// function functionName1(params) {
//     document.writeln('<br>' + "returnsuz parametresiz funtion")
// }

// functionName1()

// // 2) Returnsuz, parametreli fonksiyon
// function functionName2(ekmekTuru) {
//     document.writeln('<br>' + "returnsuz parametreli funtion")
// }

// functionName2()
// // 3) Returnlu, parametresiz fonksiyon
// function functionName3() {
//     return "returnlu parametresiz funtion"
// }

// var temp3 = functionName3()
// document.writeln("<br>" + temp3)

// // 4) Returnlu, parametreli fonksiyon
// function functionName4(money) {
//     var count = money - 6
//     return "returnlu, parametreli function kalan para: " + count
// }

// document.write("<br>" + functionName4(100))

//SET TIME OUT
// function merhaba1() {
//     document.writeln("<br>" + "1. function")
// }

// setTimeout(merhaba1, 3000) //3000ms yani 3 saniye sonra metod calıstırılır

// function merhaba2() {
//     document.writeln("<br>" + "2. function")
// }

// merhaba2()

//TRY-CATCH
// try {
//     alert55("Merhabalar")
//     var deneme

// } catch (error) {
//     document.writeln("<br>" + error.message)
//     document.writeln("<br>" + error.name)


// } finally { //ust taraftan bagımsız sekilde her turlu calisir
//     document.write("<br>" + "db.close()")
// }

// document.write("<br>" + "diger satir")

//CONDITION
//if else

// var number = "4"
// if (number === 4) {
//     document.write("<br>" + "esittir")
// } else {
//     document.writeln("<br>" + "esit degildir")
// }

// //ternary
// var ternary = (number == 4) ? "equal" : "not equal";
// document.writeln("<br>" + ternary)

// var day = "persembe";

// if (day === "pazartesi") {
//     document.write('<br>' + "1-pazartesi");
// } else if (day === "sali") {
//     document.write('<br>' + "2-sali");
// } else if (day === "carsamba") {
//     document.write('<br>' + "3-carsamba");
// } else if (day === "persembe") {
//     document.write('<br>' + "4-persembe");
// } else if (day === "cuma") {
//     document.write('<br>' + "5-cuma");
// } else if (day === "cumartesi") {
//     document.write('<br>' + "6-cumartesi");
// } else if (day === "pazar") {
//     document.write('<br>' + "7-pazar");
// } else {
//     document.write('<br>' + "gün yanlış çalışıldı");
// }

// //Switch -case
// switch (day) {
//   case 'pazartesi':
//     document.write('<br>' + '1-pazartesi')
//     break

//   case 'sali':
//     document.write('<br>' + '2-sali')
//     break

//   case 'carsamba':
//     document.write('<br>' + '3-carsamba')
//     break

//   case 'persembe':
//     document.write('<br>' + '4-persembe')
//     break

//   case 'cuma':
//     document.write('<br>' + '5-cuma')
//     break

//   case 'cumartesi':
//     document.write('<br>' + '6-cumartesi')
//     break

//   case 'pazar':
//     document.write('<br>' + '7-pazar')
//     break

//   default:
//     document.write('<br>' + 'gün yanlış çalışıldı')
//     break
// }

//FOR
// var sum = 0

// for (var i = 1; i <= 10; i++) {
//     sum += i;
// }

// document.write(sum)

//WHILE
// var sum2 = 0
// var x = 1;

// while (x <= 10) {
//     sum2 += x
//     x++;
// }

// document.write("<br>" + sum2)


//DO-WHILE ==> Istenen sarttan bagımsız olarak her kosulda 1 kez calisir
// var sum3 = 0
// var y = 1
// do {
//     sum3 += y
//     y++;
// } while (y <= 10);

// document.write("<br>" + sum3)


// var input = Number(prompt("Please input a number"))
// var countNumber = 0
// var sum = 0
// var oddNumber = 0
// var evenNumber = 0

// for (var i = 1; i <= input; i++) {
//     countNumber++
//     sum += i

//     if (i % 2 == 0) {
//         evenNumber++
//     } else {
//         oddNumber++
//     }

// }

// document.write(countNumber)
// document.write("<br>" + sum)
// document.write("<br>" + evenNumber)
// document.write("<br>" + oddNumber)

// HOMEWORK (IF ELSE BREAK CONTINUE)

// 1 ile kullanıcının verecegi bitis sayisina göre
// 1) Toplam kac tane sayi vardir
// 2) Sayilarin toplami nedir?
// 3) Kac tane tek sayi vardir?
// 4) Tek sayilarin toplami nedir?
// 5) Bu tek sayilari ekrana bastir

// 6) Kac tane cift sayi vardir?
// 7) Cift sayilar toplami nedir?
// 8) Bu cift sayilari ekrana bastir

// Eger verilen sayilarda 7 sayisi varsa bunu eklemesin
// Eger bitis sayisi 100 den fazla ise 100 e kadar olanları toplasın
// Eger kullanıcı baslangic sayisinden kücük girerse uyaralım ve baslangıctan büyük bir sayi girmesini isteyelim
// Eger kullanıcı secret-key girerse yani 44 sayisini girerse program calistirmayi direkt durdursun

// var number = Number(prompt("Please input a number"))

// document.write("Your input is: " + number + "<br>")

// if (secretNumber(number) && isNumberLessThanOne(number)) {
//     countNumbers(number)
//     sumOfNumbers(number)
//     oddNumbers(number)
//     evenNumbers(number)
// }

// //BUSINESS RULES
// function isNumberLessThanOne(number) {
//     if (number < 1) {
//         alert("Please input a higher number than 1")
//         return false
//     }
//     return true
// }

// function secretNumber(number) {
//     if (number === 44) {
//         alert("Your input should not equal to 44")
//         return false
//     }
//     return true
// }

// function isNumberBiggerThanOneHundred(number) {
//     if (number >= 100) {
//         number = 99
//     }
//     return number
// }

// // 1
// function countNumbers(number) {
//     var ending = isNumberBiggerThanOneHundred(number)
//     var count = 0
//     for (var i = 1; i <= ending; i++) {
//         if (i === 7) {
//             continue
//         }
//         count++
//     }
//     document.write("How many numbers : " + count + "<br>")
// }

// // 2
// function sumOfNumbers(number) {
//     var ending = isNumberBiggerThanOneHundred(number)
//     var sum = 0
//     for (var i = 1; i <= ending; i++) {
//         if (i === 7) {
//             continue
//         }
//         sum += i
//     }
//     document.write("Sum of numbers : " + sum + "<br>")
// }

// function oddNumbers(number) {
//     var ending = isNumberBiggerThanOneHundred(number)

//     var countOddNumbers = 0
//     var sumOfOddNumbers = 0
//     const listOfOddNumbers = [];

//     for (var i = 1; i <= ending; i++) {
//         if (i === 7) {
//             continue
//         }
//         if (i % 2 == 1) {
//             listOfOddNumbers.push(i)
//             sumOfOddNumbers += i
//             countOddNumbers++
//         }
//     }
//     document.write("Count Odd numbers : " + countOddNumbers + "<br>")
//     document.write("Sum of Odd numbers : " + sumOfOddNumbers + "<br>")
//     document.write("List Of Odd Numbers : " + listOfOddNumbers + "<br>")
// }

// function evenNumbers(number) {
//     var ending = isNumberBiggerThanOneHundred(number)

//     var countEvenNumbers = 0
//     var sumOfEvenNumbers = 0
//     const listOfEvenNumbers = [];

//     for (var i = 1; i <= ending; i++) {
//         if (i === 7) {
//             continue
//         }
//         if (i % 2 == 0) {
//             listOfEvenNumbers.push(i)
//             sumOfEvenNumbers += i
//             countEvenNumbers++
//         }
//     }
//     document.write("Count Even numbers : " + countEvenNumbers + "<br>")
//     document.write("Sum of Even numbers : " + sumOfEvenNumbers + "<br>")
//     document.write("List Of Even Numbers : " + listOfEvenNumbers + "<br>")
// }

//Hamit Hoca Cozumu

// //UserData function
// function userData() {
//   var number = Number(prompt('Lütfen bitiş sayısını giriniz'))
//   if (number <= 1) {
//     return "lütfen 1'den büyük sayı giriniz"
//   } else return number
// }

// //main function
// function main() {
//   var number =8 //userData();
//   //document.write("<br>"+number);
//   var sum = 0,
//     counter = 0 //toplam ve sayı adedi
//   var even = 0,
//     evenSum = 0,
//     evenNumber = 0 //çift sayılar
//   var odd = 0,
//     oddSum = 0,
//     oddNumber = 0 //Tek sayılar

//   for (let i = 1; i <= number; i = i + 1) {
//     //secretKey
//     if (number === 44) {
//       alert(number + ' SecretKey verildi Çıkış yapıldı')
//       break
//     }

//     //100 fazla verilemez
//     if (i === 100) {
//       alert('Sayı:' + number + '. 100 fazla hesaplayamam.')
//       break;
//     }

//     //special data :7
//     if (i === 7) {
//       alert('Sayı:' + number + ' dahil etmiyorum')
//       continue
//     }

//     //toplam
//     sum += i
//     //sum=sum+i;
//     //sum++;

//     //çift
//     if (i % 2 == 0) {
//       evenSum += i
//       even++
//       evenNumber = String(evenNumber).concat('-' + i)
//     }

//     //çift
//     if (i % 2 == 1) {
//       oddSum += i
//       odd++
//       oddNumber = String(oddNumber).concat('-' + i)
//     }
//   }

//   document.write('<br>' + 'verilen Sayı: ' + number)
//   document.write('<br>' + 'verilen Sayı Toplamı: ' + sum + '<br>')

//   document.write('<br>' + 'çift Sayı adeti: ' + even)
//   document.write('<br>' + 'çift Sayı toplamı: ' + evenSum)
//   document.write('<br>' + 'çift Sayı nelerdir: ' + evenNumber + '<br>')

//   document.write('<br>' + 'tek Sayı adeti: ' + odd)
//   document.write('<br>' + 'tek Sayı toplamı: ' + oddSum)
//   document.write('<br>' + 'tek Sayı nelerdir: ' + oddNumber)
// }

//main()


// DATE

//Date get()
// var tarih = new Date()
// document.writeln("<br" + "Dakika --> " + tarih.getMinutes())
// document.writeln("<br" + "Saat --> " + tarih.getHours())
// document.write("<br>" + "Gun --> " + tarih.getDate())
// document.write("<br>" + "Ay --> " + tarih.getMonth())
// document.write("<br>" + "Yil --> " + tarih.getFullYear())

//Date set()
// var tarih2 = new Date("2022-2-1")
// document.write("<br>" + "Gun " + tarih2.getDate())
// document.write("<br>" + "Ay " + tarih2.getMonth())
// document.write("<br>" + "Yil " + tarih2.getFullYear())

// function getDateHoursControl() {
//     var hour = new Date().getHours()

//     if (hour >= 13) {
//         document.write("<br>" + hour)
//         document.write("<br>" + "Afternoon")
//     } else {
//         document.write("<br>" + hour)
//         document.write("<br>" + "Morning")
//     }
// }
// getDateHoursControl()

//Javascript Single Threadtir


// FUNCTION TYPES

// 1- CALLBACK FUNCTION
// function ikinci(value) {
//     document.write("<br>" + "ikinci fonksiyon calisti >" + value)
// }

// //2- Ana function
// function birinci(number1, number2, callback) {
//     var result = number1 * number2
//     callback(result)
// }

// birinci(4, 6, ikinci)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//2- IMMEDIA FUNCTION : Fonksiyonu cagirmadan gelsin, öncesinde baska
//fonksiyon olmasın

//()()
// (function deneme55() {
//     document.write("<br>" + "Deneme")
// })()

////////////

// Dizi -> diziler 0. indexten baslar
//Gösterim --> var dizi = [] veya var dizi2 = new Array()

//var array = [1, 2, 3, true, "Merhaba"]
//document.write("<br>" + array)

//Iterative for
// for (let i = 0; i < array.length; i++) {
//     document.write("<br>" + array[i])
// }

// for-in (for over index --> index ile işlem yapar)
// for (i in array) {
//     document.write("<br>" + i + ". index = " + array[i])
// }

// for-of(for over members --> indexin karsılık geldigi eleman ile islem yapar)
// for (i of array) {
//     document.write("<br>" + "Indexin o anki degeri -->" + i)
// }

//Dizilerde ekleme ve cikarma komutlari
//array.unshift("Ilk eleman") //unshift() --> dizinin basına ekleme yapar
// for (i of array) {
//     document.write("<br>" + i)
// }

//array.push("Hello") // push() --> dizinin sonuna ekleme yapar
// for (i of array) {
//     document.write("<br>" + i)
// }

// array.pop() //pop() --> dizinin son elemanını listeden siler
// for (i of array) {
//     document.write("<br>" + i)
// }

//array.shift() //shift() --> dizinin ilk elemanını siler
// for (i of array) {
//     document.write("<br>" + i)
// }

// var yeniDizi = ["Samsun", "Izmir", "Bursa", "Ankara", "Antalya", "Mugla"]
// document.write("<br>" + yeniDizi)

//yeniDizi.sort() //sort() --> Alfabetik sıraya göre sıralama islemi yapar
// document.write("<br>" + yeniDizi)

// reverse() --> Diziyi tersten sıralar
// var dizi = ["Samsun", "Ankara", "Izmir"]
// dizi.reverse()

// //dizi.sort().reverse() --> Once alfabetik sıralama yapar sonra da diziyi ters cevirir

// for (var temp of dizi) {
//     document.write("<br>" + temp)
// }

//The join() method returns an array as a string.
//The toString() method does not change the original array.

// var aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan'];
// var a = aylar.toString(); // "Ocak,Şubat,Mart,Nisan"

// console.log(a) // toString ifade otomatik olarak çağırılıp string olarak toplandı.

// diziyi String nasıl çevirelim
//+++++++ dizi konuları
// function arrayValue() {
//     var dizi = ["java", "spring", "hibernate", "spring"];
//     document.write("<br>" + dizi[1] + dizi[2])

//     //dizinin ilk elemanına erişmek
//     document.write("<br>" + "dizi ilk elemanı =>" + dizi[0])

//     //dizinin son elemanına erişmek
//     document.write("<br>" + "dizi son elemanı =>" + dizi[dizi.length - 1])

//     var diziEleman = dizi[0];//string
//     document.write("<br>" + typeof diziEleman)
// }
//arrayValue()


//+++++++ dizi string'e çevir  ==> dizi.toString()
// string ,concat()==> concat sadece kelimenin en sonuna ekler
// function arrayToString() {
//     var dizi2 = ["java", "spring", "hibernate", "MVC", "Data"];

//     document.write("<br>" + dizi2.toString());
//     console.log(dizi2.toString().toUpperCase().concat(" 1 kere ekle"));
// }

// arrayToString()


//JOIN()
// function arrayJoin() {
//     var dizi = ["Java", "Spring", "Hibernate", "MVC", "Data"]

//     document.write("<br>" + dizi.join())
// }

// arrayJoin()
//split() --> Bir string verisindeki bütün elemanları bir diziye aktarır

// function stringSplit() {
//     let text = "How are you doing today?";
//     const myArray = text.split(" ");
//     console.log(myArray)
// }

// // stringSplit()

// function splitArray() {
//     var dizi = "Java,Spring,Hibernate,MVC,Data"

//     var dizi2 = []
//     dizi2 = dizi.split(",")

//     for (var i = 0; i < dizi2.length; i++) {
//         document.write("<br>" + dizi2[i])
//     }
// }

// splitArray()

//slice() --> dizi clone. Slice bize dizi döndürür
// function arrayIndexClone() {
//     var dizi = [1, 2, 3, 4, 5]
//     console.log(dizi)

//     console.log(dizi.slice(3)) // 3. indexten son indexe kadar kopyalar
//     console.log(dizi.slice(0,2)) //0. indexten itibaren ilk 2 indexi dahil eder
// }

// arrayIndexClone()

//splice() changes the original array whereas
//slice() doesn't but both of them returns array object.

// function arrayBlockAdd() {
//     var dizi = [1, 2, 3, 4]
//     dizi.splice(2, 0, "elma", "armut")

//     console.log(dizi)
// }

// arrayBlockAdd()

//Hoisting
// deneme = 44
// var deneme;

// document.write("<br>" + deneme)

//OBJECT
// var arr = []
// console.log(arr)

// var obj = {
//     "name": "Beytullah",
//     "surname": "Zor",
//     "isTurkish": true,
//     "technologies": ["java", "spring", "hibernate"],
//     "adiSoyadi": function () {
//         return this.name.toUpperCase()

//     }
// }
// console.log(obj)
// console.log(obj.name)
// console.log(obj.surname)
// console.log(obj.isTurkish)
// console.log(obj.technologies)
// console.log(obj.adiSoyadi())

// obj.eklenen = "eklendi" //adding new attribute to obj
// console.log(obj.eklenen)

//Literal Template
// function esLiteralTemplateMultiline() {
//     var valueTemp1 = "Merhabalar <br> Nasılsınız <br> Yeni Teknolojiler Ogreniyorum"
//     // document.write("<br>" + valueTemp1)

//     //Multiline
//     var valueTemp2 = `Merhabalar
// Nasılsınız`;

//     console.log(valueTemp2)
// }

// esLiteralTemplate()

// function esLiteralInterPolation() {
//     var name = "Beytullah"
//     var surname = "Zor"

//     var value1 = name + " " + surname
//     var value2 = name + "\n" + surname

//     var value3 = `name: ${name} surname ${surname}`;

//     console.log(value1)
//     console.log(value2)
//     console.log(value3)
// }

// esLiteralInterPolation()

// 3-) Html Template
// function normalHtmlTemplate(){
//     var country="Turkey";
//     var html=
//     "<ul>"+
//         "<li>"+
//             country+
//         "</li>"+
//         "<li>"+
//             country.toUpperCase()+
//         "</li>"+
//     "</ul>";
//     document.body.innerHTML=html;
//   }
//normalHtmlTemplate()

function esTemplateHtmlTemplate() {
    var country = "Turkey";
    var html =
        `
  <ul>
      <li>${country}</li>
      <li>${country}</li>
  </ul>
  `;
    document.body.innerHTML = html;
}
esTemplateHtmlTemplate()














































