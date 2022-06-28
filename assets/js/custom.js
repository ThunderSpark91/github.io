function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

var currentage = String(getAge('1991/07/26'));
var agestring = currentage;
var ageContainer = document.querySelector("#currentage");

ageContainer.innerHTML += agestring;