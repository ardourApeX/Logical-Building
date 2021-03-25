const studentDetails = [
    {
        roll: "1",
        name: "Rohan Singh",
        maths: 86,
        science: 90,
        english: 75,
        computer: 85
    },
    {
        roll: "2",
        name: "Ritvik Patel",
        maths: 27,
        science: 30,
        english: 35,
        computer: 30
    },
    {
        roll: "3",
        name: "Neha Maurya",
        maths: 75,
        science: 69,
        english: 40,
        computer: 75
    },
    {
        roll: "4",
        name: "Mohit Verma",
        maths: 21,
        science: 31,
        english: 45,
        computer: 40
    },
    {
        roll: "5",
        name: "Karan Trivedi",
        maths: 70,
        science: 80,
        english: 35,
        computer: 60
    }
];
const nameAndTotalMarks = (obj) => {
    console.log(obj.name)
    console.log(obj.maths + obj.science + obj.english + obj.computer)
}

const classTopper = (arr) => {
    let maxTotal = 0;
    let topper = "";
    arr.forEach(element => {
        let total = element.computer + element.english + element.science + element.maths;
        if (total > maxTotal) {
            topper = element.name;
            maxTotal = total
        }
    });
    console.log("Topper ", topper)
}

const neecheSeTopper = (arr) => {
    let minTotal = 1000;
    let upsideDownTopper = "";
    arr.forEach(element => {
        let total = element.computer + element.english + element.science + element.maths;
        if (total < minTotal) {
            upsideDownTopper = element.name;
            minTotal = total
        }
    });
    console.log("Neeche se topper ", upsideDownTopper)
}

const avgComputer = (total, element) => total += element.computer

const grading = student => {
    let total = student.computer + student.english + student.maths + student.science;
    switch (true) {
        case (total >= 300):
            console.log("Grade A")
            break;
        case (total >= 240):
            console.log("Grade B")
            break;
        case (total >= 140):
            console.log("Grade C")
            break
        default:
            console.log("Grade D")
            break
    }
}

const result = (pass, student) => {
    let total = student.computer + student.english + student.maths + student.science
    pass += total >= 140 ? 1 : 0;
    return pass
}



studentDetails.map(nameAndTotalMarks) //Display name and marks
classTopper(studentDetails) //Display class topper
neecheSeTopper(studentDetails) // Display neeche se topper
console.log(studentDetails.reduce(avgComputer, 0) / studentDetails.length); // Dispaly average marks in computer
studentDetails.map(grading) // Display grade
console.log(studentDetails.reduce(result, 0)) // Display how many students have passed the exam 
