//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

//Ödev kullanıcı tarafında girilen şifre ve şifre doğrulama
//validation password - repassword

var database = [
    {
        username: "Beytullah",
        password: "123"
    },
    {
        username: "Mehmet",
        password: "1234"
    }
]

var username = prompt("Please input your username")
var password = prompt("Please input your password")
var rePassword = prompt("Please input your password again for your security")

function isUserPaswordValid(password, rePassword) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].password === password && password === rePassword) {
            return true;
        }
    }
    return false
}

function signIn(username, password, rePassword) {
    if (isUserPaswordValid(password, rePassword)) {
        document.write("Login Successfully For: " + username)
    } else {
        alert("Your passwords do not match!!!")
    }
}

signIn(username, password, rePassword)

