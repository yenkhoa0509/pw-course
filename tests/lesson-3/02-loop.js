// 1. Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1 đến 100 là:", sum);

// 2. In bảng cửu chương từ 2 đến 9
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 3. Tạo mảng chứa các số lẻ từ 1 đến 99
let oddNumbers = [];
for (let i = 1; i < 100; i += 2) {
    oddNumbers.push(i);
}
console.log("Mảng các số lẻ từ 1 đến 99:", oddNumbers);

//4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user1@example.com, user2@example.com, ..., user10@example.com).
for (let i = 1; i <= 10; i++) {
    console.log(`khoa${i}@example.com`);
}

//  5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100}
const doanhThu = [
    { month: 1, total: 100 },
    { month: 2, total: 120 },
    { month: 3, total: 80 },
    { month: 4, total: 150 },
    { month: 5, total: 90 },
    { month: 6, total: 200 },
    { month: 7, total: 75 },
    { month: 8, total: 50 },
    { month: 9, total: 130 },
    { month: 10, total: 110 },
    { month: 11, total: 140 },
    { month: 12, total: 95 }
];

let totalRevenue = 0;
for (let item of doanhThu) {
    totalRevenue += item.total;
}
console.log("Tổng doanh thu cả năm là:", totalRevenue);
