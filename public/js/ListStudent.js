let ListStudent = function() {

    this.listStudentarray = [];
    this.AddStudent = function(studentAdded) {
        this.listStudentarray.push(studentAdded);
    }

    this.DeleteStudent = function (studentDeleted) {
        for (let i=0; i<studentDeleted.length; i++) {
            for (let j=0; j<this.listStudentarray.length; j++) {
                let student = this.listStudentarray[j];
                if (studentDeleted[i]==student.StudentID) {


                    this.listStudentarray.splice(j, 1);

                }

            }

            
        }


    }

    this.EditStudent = function (studentEdited) {
        for (let i=0; i<this.listStudentarray.length; i++) {
                let studentUpdate = this.listStudentarray[i];
            if (studentEdited.StudentID==studentUpdate.StudentID) {
                studentUpdate.Fullname = studentEdited.Fullname;
                studentUpdate.Nationality = studentEdited.Nationality;
                studentUpdate.Phonenumber = studentEdited.Phonenumber;
                studentUpdate.Email = studentEdited.Email;
            

            }
    
        }
        return this;



    }
    this.FindStudentbyID = function (studentIDValue) {

        for (let i=0; i<this.listStudentarray.length;i++) {
            let student = this.listStudentarray[i];

                if (student.StudentID == studentIDValue) {
                    return student;

                }
            
        }
        return null;




    }
    this.SearchStudent = function (keyword) {
        let listSearchResult = new ListStudent(); 
        for (let i=0; i<this.listStudentarray.length; i++) {

            let student = this.listStudentarray[i];
             if (student.Fullname.toLowerCase().trim().search(keyword.toLowerCase().trim()) !=-1) {

                listSearchResult.AddStudent(student);
            }
        }

        return listSearchResult;
        
    }

}