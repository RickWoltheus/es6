let students = [];

function addStudent(firstname, lastname){
    let  newStudent = {firstname, lastname};
    students.push(newStudent);
}

addStudent("rick", "woltheus");
addStudent("amin", "robleh");
console.table(students);
