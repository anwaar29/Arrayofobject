let studentRecords = [
    { name: "John", id: 123, marks: 98 },
    { name: "Baba", id: 101, marks: 23 },
    { name: "yaga", id: 200, marks: 45 },
    { name: "Wick", id: 115, marks: 75 },
  ];
//Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
//['JOHN', 'BABA', 'YAGA', 'WICK']
let Nameinupper = [];
studentRecords.forEach((student) => {
    Nameinupper.push(student.name.toUpperCase());
});
console.log(Nameinupper);
// Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]

let morethan50 = studentRecords.filter((a) => a.marks > 50);
console.log(morethan50);

//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
//[ { name: 'John', id: 123, marks: 98 } ]
let idgt120 = studentRecords.filter((a) => a.marks > 50 && a.id > 120);
console.log(idgt120);

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let sum = studentRecords.reduce((s, m) => s + m.marks, 0);
console.log(sum);

//Question 6: This time we are required to print the sum of marks of the students with id > 120.
let sumofid = studentRecords.filter((a) => a.id > 120).reduce((acc, curr) => acc + curr.marks, 0);
console.log(sumofid);

//Question 7: This time we are required to print the total marks of the students with marks greater
//than 50 after a grace of 15 marks has been added to those students who scored less than 50.
//233
let grace = studentRecords
  .map(function (stu) {
    if (stu.marks < 50) {
      stu.marks += 15;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 50)
  .reduce((acc, curr) => acc + curr.marks, 0);
console.log(grace);


//Question 8:Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects.
let obj1 = { name: "Anwaar", class: "BA", rollno: "001" };
let obj2 = { name: "Alam", class: "BSC", rollno: "002" };
let obj3 = { name: "Ansari", class: "BCA", rollno: "003" };
let obj4 = { name: "Mahtab", class: "MCA", rollno: "004" };
let obj5 = { name: "Alam", class: "BED", rollno: "005" };
let obj6 = { name: "Ansari", class: "MSC", rollno: "006" };

let students = [
{ name: "Anwaar", class: "BA", rollno: "001" },
{ name: "Alam", class: "BSC", rollno: "002" },
{ name: "Ansari", class: "BCA", rollno: "003"},
{ name: "Mahtab", class: "MCA", rollno: "004" },
{ name: "Alam", class: "BED", rollno: "005" },
{ name: "Ansari", class: "MSC", rollno: "006" },
 
];
console.log(students);