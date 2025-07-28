const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng "." trong phoneNumber
const newPhoneNumber = phoneNumber.replace(/ /g, ".");
console.log("Số điện thoại sau khi thay:", newPhoneNumber);

// 2. Thay "lỗi" bằng "bug" trong report
const newReport = report.replace("lỗi", "bug");
console.log("Báo cáo sau khi thay:", newReport);

// 3. Thay "," bằng "." trong numbersStr
const newNumbersStr = numbersStr.replace(/,/g, ".");
console.log("Chuỗi số sau khi thay:", newNumbersStr);
