function getAkhanName () {
    let yearOfBirth = document.getElementById("year-input").nodeValue;
    let monthOfBirth = Number(document.getElementById(month-input).value);
    let dayOfBirth = Number(document.getElementById("day-input").value)
    let genders = document.getElementById("gender")

    //function to get gender
    function getGender () {
        for (let gender of genders) {
            if(gender.checked) {
                return gender.value;
            }
        }
    }
}
