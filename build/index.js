"use strict";

var students = [];

function addStudent(firstname, lastname) {
    var newStudent = { firstname: firstname, lastname: lastname };
    students.push(newStudent);
}
addStudent("rick", "woltheus");
addStudent("amin", "robleh");
console.table(students);