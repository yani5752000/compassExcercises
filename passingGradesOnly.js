const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passingGrades = grades.filter(item => item >= 50);
console.log("passing grades are", passingGrades);