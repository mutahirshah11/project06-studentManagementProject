import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt(// asking student name and his desirable course
[
    {
        name: "studentName",
        type: "input",
        message: "Enter student name ",
        validate: function (input) {
            if (input.trim() !== "") {
                return true;
            }
            else {
                return "Please enter a value";
            }
        }
    },
    {
        name: "courses", // available courses
        type: "list",
        message: "Select your courses",
        choices: ["Typescript", "Python", "React", "SQL", "Next.js", "Javascript"]
    }
]);
const tutionFee = {
    "Typescript": 1500,
    "Python": 2200,
    "React": 3000,
    "Next.js": 6300,
    "Javascript": 1100,
    "SQL": 4000,
};
console.log(`\nYour TutionFee = ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance = ${myBalance} `);
const Payments = await inquirer.prompt(// 2. Payments 
[
    {
        name: "PaymentMethod",
        type: "list",
        message: "Select your Payment method",
        choices: ["Bank Transfer", "Easypaisa", "JazzCash", "SADAPAY"] // Avaialable Payment methods
    },
    {
        name: "PaymentAmount",
        type: "input",
        message: "Enter your amount", // entering Payment amount
        validate: function (input) {
            if (input.trim() !== "") {
                return true;
            }
            else
                return "Please enter your amount";
        }
    }
]);
console.log(`\nYou selected "${Payments.PaymentMethod}" as your payment method\n`);
const CourseFees = tutionFee[answer.courses]; // tution fee of the student 
const PaidAmount = parseFloat(Payments.PaymentAmount); // using parseFloat to convert string into a floating point Number
if (CourseFees === PaidAmount) {
    console.log(`\nCongratulations , you have succesfully enrolled for "${answer.courses}"\n `);
    let ans = await inquirer.prompt([
        {
            name: "AfterEnrollment",
            type: "list",
            message: "What you want to do next",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.AfterEnrollment === "View Status") {
        console.log("**********STATUS**********");
        const Student00 = {
            "Student Name": answer.studentName,
            "Student Id": randomNumber,
            "Enrolled Course ": answer.courses,
            "Course Payment": Payments.PaymentAmount,
            "Balance": myBalance = +PaidAmount,
        };
        console.log(Student00);
    }
    else {
        console.log("*****You Exited the Page*****");
    }
}
else {
    console.log(`***Invalid Amount for the course you want to enroll*** `);
}
