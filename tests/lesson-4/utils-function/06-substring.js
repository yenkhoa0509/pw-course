const fullName = "Nguyễn Văn A";
const date = "2024-05-19";
const email = "example@gmail.com";

// 1. Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6)
const ho = fullName.substring(0, 6);
console.log("Họ:", ho);

// 2. Trích xuất năm từ date (4 ký tự đầu)
const year = date.substring(0, 4);
console.log("Năm:", year);

// 3. Trích xuất tên miền từ email (từ sau "@")
const atIndex = email.indexOf("@");
const domain = email.substring(atIndex + 1);
console.log("Tên miền:", domain);
