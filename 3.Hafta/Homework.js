//Kullanıcıdan aldıgımız verinin ilk harfi ve son harfi görünsün
//geride kalan karakterler * olsun (string,replace,sub,charAt(),loop)

var input = prompt("Input is: ")
document.write("Your input is: " + input)

function replacedInput(input) {
    var firstElement = input.charAt(0)
    var lastElement = input.charAt(input.length - 1)
    var subString = input.substring(1, input.length - 1)

    var replacedInput = ""

    for (var i = 0; i < subString.length; i++) {
        replacedInput = replacedInput.concat("*")
    }

    document.write("<br>" + firstElement + replacedInput + lastElement)
}

replacedInput(input)