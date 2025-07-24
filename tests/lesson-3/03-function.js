// 1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.
function multiply(a, b) {
    const result = a * b;
    console.log(`Kết quả: ${result}`);
}
multiply(3, 4);
multiply(7, 5);

// 2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}
let result1 = findMin(3, 7, 2);
console.log("Giá trị nhỏ nhất:", result1);
let result2 = findMin(10, 4, 15);
console.log("Giá trị nhỏ nhất:", result2);

// 3. Viết hàm getTopStudents nhận 2 tham số:
function getTopStudents(students, threshold) {
    let topNames = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topNames.push(students[i].name);
        }
    }
    return topNames;
}
const studentsList = [
    { name: "Ôn", score: 9 },
    { name: "Nguyễn", score: 7 },
    { name: "Yến", score: 8.5 },
    { name: "Khoa", score: 6.5 },
];
const topStudents = getTopStudents(studentsList, 8);
console.log("Top students:", topStudents);

// 4. Viết hàm calculateInterest nhận 3 tham số:
function calculateInterest(principal, rate, years) {
    let interest = (principal * rate * years) / 100;
    let total = principal + interest;
    return total;
}
let total1 = calculateInterest(10000000, 6, 3);
console.log("Tổng tiền sau 3 năm là:", total1);
let total2 = calculateInterest(5000000, 5, 2);
console.log("Tổng tiền sau 2 năm là:", total2);
