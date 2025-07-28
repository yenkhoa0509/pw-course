// 3.1 In tên và giá trị mỗi thuộc tính của student
const student = {
    name: "Alex",
    age: 10,
    salary: 20
};

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}

// 3.2 Tính tổng các giá trị số trong student
let total = 0;
for (const key in student) {
    if (typeof student[key] === "number") {
        total += student[key];
    }
}
console.log("Tổng giá trị các số =", total);

// 3.3 Tạo mảng chứa tên các thuộc tính của student
const keys = [];
for (const key in student) {
    keys.push(key);
}
console.log("Các thuộc tính:", keys);
