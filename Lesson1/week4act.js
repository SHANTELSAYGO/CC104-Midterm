class Student {

    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let total = 0;

        for (let i = 0; i < this.scores.length; i++) {
            total = total + this.scores[i];
        }

        return total / this.scores.length;
    }

    getLetterGrade() {
        let average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}


function analyzeClass(students) {

    let totalAverage = 0;
    let topStudent = students[0];
    let highestAverage = students[0].getAverage();

    console.log("------- STUDENT REPORT -------");

    for (let i = 0; i < students.length; i++) {

        let student = students[i];
        let average = student.getAverage();
        let grade = student.getLetterGrade();

        console.log(
            student.name +
            " - Average: " +
            average.toFixed(1) +
            " | Grade: " +
            grade
        );

        totalAverage = totalAverage + average;

        if (average > highestAverage) {
            highestAverage = average;
            topStudent = student;
        }
    }

    let classAverage = totalAverage / students.length;

    console.log("-----------------------------------");
    console.log("Class Average: " + classAverage.toFixed(1));
    console.log(
        "Top Student: " +
        topStudent.name +
        " with " +
        highestAverage.toFixed(1)
    );
}

const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherthe", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];

let students = [];

for (let i = 0; i < studentData.length; i++) {
    let student = new Student(
        studentData[i].name,
        studentData[i].scores
    );

    students.push(student);
}

analyzeClass(students);
