let Validation = function () {

    // CHECK BLANK SPACE
    this.checkBlankSpace = function (idValue, name, idSelector) {
        if (idValue.value.trim() === "") {
            document.getElementById(idSelector).innerHTML = name + " cannot leave blank";
            document.getElementById(idSelector).style.display = "block";
            idValue.style.borderColor = "red";

            return false;
        }
        document.getElementById(idSelector).innerHTML = " ";
        document.getElementById(idSelector).style.display = "none";
        idValue.style.borderColor = "grey";


        return true;
    }

    // CHECK FULL CHARACTER
    this.checkFullCharacter = function (idValue, name, idSelector) {
        let regexCharacter = /^[A-Za-z]+$/;

        if (regexCharacter.test(idValue.value)) {

            document.getElementById(idSelector).innerHTML = " ";
            document.getElementById(idSelector).style.display = "none";
            idValue.style.borderColor = "grey";

            return true;

        }

        document.getElementById(idSelector).innerHTML = name + " must be all character";
        document.getElementById(idSelector).style.display = "block";
        idValue.style.borderColor = "red";
        return false;


    }

    // CHECK FULL NUMBER
    this.checkFullNumber = function (idValue, name, idSelector) {
        let regexCharacter = /^[0-9]+$/;

        if (regexCharacter.test(idValue.value)) {

            document.getElementById(idSelector).innerHTML = " ";
            document.getElementById(idSelector).style.display = "none";
            idValue.style.borderColor = "grey";

            return true;

        }

        document.getElementById(idSelector).innerHTML = name + " must be all number";
        document.getElementById(idSelector).style.display = "block";
        idValue.style.borderColor = "red";
        return false;


    }

    // CHECK LENGTH NUMBER
    this.checkLength = function (idValue, name, idSelector) {
        let regexCharacter = /^[0-9]+$/;
        if (idValue.value.length > 9 && regexCharacter.test(idValue.value)) {
            document.getElementById(idSelector).innerHTML = " ";
            document.getElementById(idSelector).style.display = "none";
            idValue.style.borderColor = "grey";

            return true;

        }
        document.getElementById(idSelector).innerHTML = name + " must be number and have more than 9 numbers";
        document.getElementById(idSelector).style.display = "block";
        idValue.style.borderColor = "red";
        return false;

    }

    // CHECK VALUE BETWEEN 0 AND 10
    this.checkValue = function (idValue, name, idSelector) {
        let regexCharacter = /^[+-]?\d+(\.\d+)?$/;


        if (idValue.value <= 10 && idValue.value >= 0 && regexCharacter.test(idValue.value)) {
            document.getElementById(idSelector).innerHTML = " ";
            document.getElementById(idSelector).style.display = "none";
            idValue.style.borderColor = "grey";

            return true;

        }
        document.getElementById(idSelector).innerHTML = name + " must be number and between 0 and 10";
        document.getElementById(idSelector).style.display = "block";
        idValue.style.borderColor = "red";
        return false;

    }


    // CHECK EMAIL
    this.checkEmail = function (idValue, idSelector) {
        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regexEmail.test(idValue.value)) {
            document.getElementById(idSelector).innerHTML = " ";
            document.getElementById(idSelector).style.display = "none";
            idValue.style.borderColor = "grey";

            return true;
        }
        document.getElementById(idSelector).innerHTML = "Email format is not valid";
        document.getElementById(idSelector).style.display = "block";
        idValue.style.borderColor = "red";
        return false;

    }



}