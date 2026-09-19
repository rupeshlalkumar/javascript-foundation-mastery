const students = [];
function addStudents() {
    students.push("Anurag");
    console.log(students);
}
function displayStudents(){
    for(let i = 0; i < students.length; i++){
        console.log(students[i]);
    }
}

addStudents();
displayStudents();
