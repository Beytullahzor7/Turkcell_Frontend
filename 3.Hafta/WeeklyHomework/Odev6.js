//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru 
//ise adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"

var database = [
    {
        email: "deneme@gmail.com",
        password: "root"
    }
]

var right = 4;

function isUserValid() {
    var email = prompt("Please input your email")
    var password = prompt("Please input your password")

    for (var i = 0; i < database.length; i++) {
        if (database[i].email === email && database[i].password === password) {
            return adminFunction(email)
        }
        else {
            right -= 1;
            console.log("Your remain right : " + right)
            if (right === 0) {
                alert("Run out of rights")
                break;
            }
            while (right > 0) {
                isUserValid()
            }
        }
    }
}

function adminFunction(email) {
    console.log("Login Successfully For " + email)
}

isUserValid()
