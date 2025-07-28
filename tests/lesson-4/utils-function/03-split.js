const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

// 1. Chia name thành mảng các từ (dùng khoảng trắng)
const nameWords = name.split(" ");

// 2. Chia emails thành mảng các email (dùng dấu phẩy)
const emailList = emails.split(",");

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang)
const dateParts = date.split("-");

console.log("nameWords:", nameWords);
console.log("emailList:", emailList);
console.log("dateParts:", dateParts);
