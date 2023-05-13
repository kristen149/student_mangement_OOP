let listStudent = new ListStudent();
let listStudentSearch = new ListStudent();

let formValidation = new Validation();

function domID(id) {
    return document.getElementById(id);
}

// ADD ATTRIBUTE TO OOP STUDENT
Student.prototype.Algebra = "";
Student.prototype.Physics = "";
Student.prototype.Chemistry = "";
Student.prototype.Average = "";
Student.prototype.Evaluate = "";
// ADD METHOD
Student.prototype.calculateAverage = function () {
    this.Average = (Number(this.Algebra) + Number(this.Physics) + Number(this.Chemistry)) / 3;
    let averageScore = parseFloat(this.Average).toFixed(2);
    console.log(averageScore);

    return averageScore;
}

Student.prototype.evaluatePerformance = function () {
    if (this.Average >= 8) {
        this.Evaluate = "Outstanding";
    } else if (this.Average >= 6.5 && this.Average < 8) {
        this.Evaluate = "Satisfactory";

    } else {
        this.Evaluate = "Below average";
    }



}

// ===================================================VALIDATION AND FUNCTION============================================================//

function AddStudent() {



    // get input from user
    let studentID = domID("studentID");
    let fullname = domID("fullname");
    let phonenumber = domID("phoneNumber");
    let nationality = domID("nationality");
    let email = domID("email");



    // check blank space
    let valid = true;

    valid &= formValidation.checkBlankSpace(fullname, fullname.name, "error_fullname_blank_space");



    // check all character
    valid &= formValidation.checkFullCharacter(nationality, nationality.name, "error_nationality_all_character");


    // check all number
    valid &= formValidation.checkFullNumber(studentID, studentID.name, "error_studentID_all_number");

    // check length number (for phone number only)
    valid &= formValidation.checkLength(phonenumber, phonenumber.name, "error_phonenumber_all_number");

    // check value number (for subject only)
    valid &= formValidation.checkValue(algebra, algebra.name, "error_algebra_all_number") & formValidation.checkValue(physics, physics.name, "error_physics_all_number") & formValidation.checkValue(chemistry, chemistry.name, "error_chemistry_all_number");

    // check email
    valid &= formValidation.checkEmail(email, "error_email");


    if (!valid) {
        return false;
    }


    let student = new Student(studentID.value, fullname.value, nationality.value, phonenumber.value, email.value);

    // CALCULATE AVERAGE AND EVALUATE PERFORMANCE--------------------------------
    student.Algebra = domID("algebra").value;
    student.Physics = domID("physics").value;
    student.Chemistry = domID("chemistry").value;
    student.Average = student.calculateAverage();
    student.evaluatePerformance();



    listStudent.AddStudent(student);
    displaylistStudent(listStudent);
    console.log(listStudent);

    // onclick "EDIT AND SAVE" button
    let submited_successfully = domID("submited_successfully");
    submited_successfully.innerHTML = "Add successfully";



}




// FUNCTION TO DISPLAY STUDENT LIST TO TABLE


function displaylistStudent(listofStudent) {
    let listTableStudent = domID("tbodyStudent");
    listTableStudent.innerHTML = "";

    for (let i = 0; i < listStudent.listStudentarray.length; i++) {
        let student = listStudent.listStudentarray[i];

        let trStudent = document.createElement("tr");
        trStudent.id = student.studentID;
        trStudent.className = "trStudent";
        trStudent.setAttribute("onclick", 'EditStudent("' + student.StudentID + '")');

        let tdCheckbox = document.createElement("td");
        let inputCheckbox = document.createElement("input");


        inputCheckbox.setAttribute("type", "checkbox");
        inputCheckbox.setAttribute("class", "ckboxDelete");
        inputCheckbox.setAttribute("value", student.StudentID);
        tdCheckbox.appendChild(inputCheckbox);







        // td Student
        let tdstudentID = createTabletd("studentID", student.StudentID);
        let tdfullname = createTabletd("fullname", student.Fullname);
        let tdNationiality = createTabletd("nationality", student.Nationality);
        let tdPhonenumber = createTabletd("phonenumber", student.Phonenumber);
        let tdEmail = createTabletd("email", student.Email);
        let tdAverage = createTabletd("average", student.Average);
        let tdEvaluate = createTabletd("evaluate", student.Evaluate);

        // append child
        trStudent.appendChild(tdCheckbox);
        trStudent.appendChild(tdstudentID);
        trStudent.appendChild(tdfullname);
        trStudent.appendChild(tdNationiality);
        trStudent.appendChild(tdPhonenumber);
        trStudent.appendChild(tdEmail);
        trStudent.appendChild(tdAverage);
        trStudent.appendChild(tdEvaluate);

        listTableStudent.appendChild(trStudent);

    }

}

// DISPLAY LIST STUDENT SEARCH

function displaylistStudentSearch(listofStudent) {
    let listTableStudent = domID("tbodyStudent");
    listTableStudent.innerHTML = "";

    for (let i = 0; i < listStudentSearch.listStudentarray.length; i++) {
        let student = listStudentSearch.listStudentarray[i];

        let trStudent = document.createElement("tr");
        let tdCheckbox = document.createElement("td");
        let inputCheckbox = document.createElement("input");


        inputCheckbox.setAttribute("type", "checkbox");
        inputCheckbox.setAttribute("class", "ckboxDelete");
        inputCheckbox.setAttribute("value", student.StudentID);
        tdCheckbox.appendChild(inputCheckbox);



        // td Student
        let tdstudentID = createTabletd("studentID", student.StudentID);
        let tdfullname = createTabletd("fullname", student.Fullname);
        let tdNationiality = createTabletd("nationality", student.Nationality);
        let tdPhonenumber = createTabletd("phonenumber", student.Phonenumber);
        let tdEmail = createTabletd("email", student.Email);
        let tdAverage = createTabletd("average", student.Average);
        let tdEvaluate = createTabletd("evaluate", student.Evaluate);

        // append child
        trStudent.appendChild(tdCheckbox);
        trStudent.appendChild(tdstudentID);
        trStudent.appendChild(tdfullname);
        trStudent.appendChild(tdNationiality);
        trStudent.appendChild(tdPhonenumber);
        trStudent.appendChild(tdEmail);
        trStudent.appendChild(tdAverage);
        trStudent.appendChild(tdEvaluate);

        listTableStudent.appendChild(trStudent);

    }

}





// ----------------------------------------------------------------------------------------------------------------------------------------------------
function createTabletd(className, innerHTML) {
    let td = document.createElement("td");
    td.className = className;
    td.innerHTML = innerHTML;
    return td;

}

function SearchStudent() {
    let keyword = domID('keyword').value;

    listStudentSearch = listStudent.SearchStudent(keyword);
    displaylistStudentSearch(listStudentSearch);


}


function DeleteStudent() {
    let liststudentID = document.getElementsByClassName("ckboxDelete");
    let liststudentID_checked = [];

    for (let i = 0; i < liststudentID.length; i++) {
        if (liststudentID[i].checked) {
            liststudentID_checked.push(liststudentID[i].value);

        }
    }

    listStudent.DeleteStudent(liststudentID_checked);
    console.log(listStudent);
    displaylistStudent(listStudent);



}



function SaveStorage() {
    let jsonList_student = JSON.stringify(listStudent.listStudentarray);
    localStorage.setItem("JSONliststudent", jsonList_student);
}

function GetStorage() {
    let jsonList_student = localStorage.getItem("JSONliststudent");
    let arrayList_student = JSON.parse(jsonList_student);
    listStudent.listStudentarray = arrayList_student;

    displaylistStudent(listStudent);

}



function EditStudent(studentIDValue) {

    let student = listStudent.FindStudentbyID(studentIDValue);
    if (student != null) {
        domID('studentID').value = student.StudentID;
        domID('fullname').value = student.Fullname;
        domID('nationality').value = student.Nationality;
        domID('phoneNumber').value = student.Phonenumber;
        domID('email').value = student.Email;

    }


}


function SaveInfo() {
 

    // get input from user
    let studentID = domID("studentID");
    let fullname = domID("fullname");
    let phonenumber = domID("phoneNumber");
    let nationality = domID("nationality");
    let email = domID("email");
    let algebra = domID("algebra");
    let physics = domID("physics");
    let chemistry = domID("chemistry");


    // check blank space
    let valid = true;

    valid &= formValidation.checkBlankSpace(studentID, studentID.name, "error_studentID_blank_space");



    // check all character
    valid &= formValidation.checkFullCharacter(nationality, nationality.name, "error_nationality_all_character");


    // check all number
    valid &= formValidation.checkFullNumber(studentID, studentID.name, "error_studentID_all_number");

    // check length number (for phone number only)
    valid &= formValidation.checkLength(phonenumber, phonenumber.name, "error_phonenumber_all_number");

    // check value number (for subject only)
    valid &= formValidation.checkValue(algebra, algebra.name, "error_algebra_all_number") & formValidation.checkValue(physics, physics.name, "error_physics_all_number") & formValidation.checkValue(chemistry, chemistry.name, "error_chemistry_all_number");

    // check email
    valid &= formValidation.checkEmail(email, "error_email");


    if (!valid) {
        return false;
    }


    let student = new Student(studentID.value, fullname.value, nationality.value, phonenumber.value, email.value);
    student.Algebra = domID("algebra").value;
    student.Physics = domID("physics").value;
    student.Chemistry = domID("chemistry").value;
    student.Average = student.calculateAverage();
    student.evaluatePerformance();


    listStudent.EditStudent(student);
    displaylistStudent(listStudent);


     // onclick "EDIT AND SAVE" button
     let submited_successfully = domID("submited_successfully");
     submited_successfully.innerHTML = "Edit successfully";





}