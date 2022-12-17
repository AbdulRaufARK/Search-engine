var student1 = {
  student: "Abdul Rauf",
  rollNo: 001,
  fName: "Abdul Hanif",
  Cnic: 12518731841056,
  class: "Graduated",
};
var student2 = {
  student: "Ahsan",
  rollNo: 002,
  fName: "Usman",
  Cnic: 12518731841056,
  class: "Under Graduate",
};
var student3 = {
  student: "Abdul",
  rollNo: 003,
  fName: "Abdul Hanif",
  Cnic: 12518731841056,
  class: "Graduated",
};
var studen4 = {
  student: "Abdul Rauf",
  rollNo: 004,
  fName: "Hanif",
  Cnic: 125187316,
  class: "Graduated",
};
var studen5 = {
  student: "A.Rauf",
  rollNo: 005,
  fName: "A.Hanif",
  Cnic: 11841056,
  class: "Graduated",
};
var student6 = {
  student: " Rauf",
  rollNo: 006,
  fName: "Abdul Hanif",
  Cnic: 12511841056,
  class: "abc",
};
var student7 = {
  student: "Abdul",
  rollNo: 007,
  fName: "Abdul Hanif",
  Cnic: 125841056,
  class: "Graduated",
};
var student8 = {
  student: "Abdul",
  rollNo: 8,
  fName: "Abdul Hanif",
  Cnic: 12518731841056,
  class: "Graduated",
};
var student9 = {
  student: "Abdul Rauf",
  rollNo: 09,
  fName: "Abdul Hanif",
  Cnic: 12518731841056,
  class: "Graduated",
};
var student10 = {
  student: "Abdul",
  rollNo: 010,
  fName: "Abdul Hanif",
  Cnic: 18321,
  class: "Graduated",
};

var arr = [
  student1,
  student2,
  student3,
  studen4,
  studen5,
  student6,
  student7,
  student8,
  student9,
  student10,
];
var Search = document.getElementById("inp");
var show = document.getElementById("show");
// var newRollNum = Search.innerHTML;
// console.log(Search.value)
// var newRollNum = 001;

function search() {
for (var i = 0; i < arr.length; i++) {
  if ( arr[i].rollNo == Search.value) {
    console.log("Roll Number Found ");
    show.innerHTML = "Name: " + arr[i].student + '<br />' + "Father Name: " + arr[i].fName + '<br />' + "Cnic: " +arr[i].Cnic + '<br />' + "Class: " +arr[i].class;

  } 
}
}