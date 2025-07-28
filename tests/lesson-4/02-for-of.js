// 2.1 In lần lượt từng ký tự của str
const str = "Playwright";
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
for (const char of str) {
    console.log(char);
}

// 2.2 Tạo mảng đảo ngược từ str
const reversed = [];
for (const char of str) {
    reversed.unshift(char);
}
console.log("Đảo ngược:", reversed.join(""));

// 2.3 Tìm ra vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
let first = -1;
let last = -1;
arr.forEach((val, i) => {
    if (val === 3) {
        if (first === -1) first = i;
        last = i;
    }
});

console.log("Vị trí đầu tiên:", first);
console.log("Vị trí cuối cùng:", last);

// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr
const unique = [];
for (const num of dupArr) {
    if (dupArr.indexOf(num) === dupArr.lastIndexOf(num)) {
        unique.push(num);
    }
}

console.log("Các phần tử chỉ xuất hiện 1 lần:", unique);
