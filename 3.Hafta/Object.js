// let object = {
//     "name": "Beytullah",
//     "surname": "Zor",
//     "isTurkish": true,
//     // "diller": 2,
//     // "frontend": ["Html5", "Css3"],
//     // "fullstack": function () {
//     //     return this.name.toUpperCase()
//     // }
//     "spring": {
//         "core": "ioc",
//         "database": "h2db",
//         "mvc": "@controller"
//     }
// }

// //CREATE OBJECT
// object.database = "postgresql"

//DELET OBJECT ATTRIBUTES
// delete object.surname

//Nested Object --> Obje icerisinde obje olusturmak
// alert(object.spring.database) 1. Gosterim
// alert(object.spring["mvc"]) 2. Gosterim
// alert(object["spring"]["core"]) 3. Gosterim

//OBJECT ARRAY
// alert(object.spring[0])

//for in
// var result = ""

// for (let i in object) {
//     result += object[i]
// }

// alert(result)


// ********************************************************************
//OBJECT CONSTRUCTOR
// function Student(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     console.log(this)
// }

// var result = new Student("Beytullah", "Zor")

// function toplam() {
//     let number1 = 10, number2 = 20, sum = 0
//     sum = number1 + number2

//     console.warn(sum)
// }

// function domFunction() {
//     //document.getElementById("dom_id").innerHTML="Id ye gore degistirdim"
//     //document.getElementsByName("dom_name")[0].innerHTML="Isime gore degistirdim"
//     //document.getElementsByTagName("h2")[0].innerHTML="Tage gore degistirdim"
//     //document.getElementsByClassName("dom_class")[0].innerHTML="Class ismine gore degistirdim"

//     //document.getElementsByClassName("dom_class")[0].innerText="Değiştirildi"
//     //document.getElementsByClassName("dom_class")[0].style.color="yellow" --> COLOR CHANGED
//     //document.getElementsByClassName("dom_class")[0].style.background="red"
//     //document.getElementsByClassName("dom_class")[0].style.fontSize="50px"

//     // console.log(document.getElementById("a_id").getAttribute("href"))

//     // let href = document.getElementById("a_id").setAttribute("href", "https://www.youtube.com/")
//     // console.log(href)
// }

////////////////////////////////////////////////////////

// function domFunction() {
//     // alert("deneme")
//     //document.getElementById("dom_id").innerHTML="<b><i>Değiştirildi</i></b>";
//     //document.getElementsByName("dom_name")[0].innerHTML="<b><i>Değiştirildi</i></b>";
//     //document.getElementsByTagName("h5")[0].innerHTML="<b><i>Değiştirildi</i></b>";
//     //document.getElementsByClassName("dom_class")[0].innerHTML="<b><i>Değiştirildi</i></b>";
//     document.getElementsByClassName("dom_class")[0].innerText = "Değiştirildi";

//     document.getElementsByClassName("dom_class")[0].style.color = "yellow";
//     document.getElementsByClassName("dom_class")[0].style.backgroundColor = "black";
//     document.getElementsByClassName("dom_class")[0].style.fontSize = "15px";


//     console.log(document.getElementById("a_id").getAttribute("href"))
//     let href = document.getElementById("a_id").setAttribute("href", "http://www.deneme.com")
//     console.log(href)
// }

// JS > HTML > CSS  alert("deneme")

function dom_javascript() {
    //document.getElementById("jquery_id").innerHTML = "<b><mark>JavaScript</mark></b>";
    // document.getElementById("jquery_id").innerText = "JavaScript sadece text";
    document.getElementById("jquery_id").style.color = "red";
    document.getElementById("jquery_id").style.fontSize = "55px";
}

// $(document).ready(function(){});
// $(function(){});

function dom_jquery() {
    //$('#jquery_id').html("<b><mark><i>jQuery</i></mark></b>");
    // $('#jquery_id').text("jQuery sadece text");

    // $('#jquery_id').css("color", "blue").css("fontSize", "45px");

    let allCssObject = {
        color: "blue",
        fontSize: "45px",
        boxShadow: "1px 1px 3px 1px rgba(255,255,255,.8)"
    };

    $('#jquery_id').css(allCssObject);
}

$("#target").click(function () {
    alert("Handler for .click() called.");
});

$("p").click(function () {
    $(this).slideUp();
});


