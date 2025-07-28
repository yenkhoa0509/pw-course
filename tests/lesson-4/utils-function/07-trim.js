const name = "   Nguyễn Văn A   ";
const userInput = "   12345   ";
const email = "   example@gmail.com   ";

// 1. Loại bỏ khoảng trắng đầu và cuối của name
const trimmedName = name.trim();
console.log("Name sau khi trim:", `"${trimmedName}"`);

// 2. Loại bỏ khoảng trắng của userInput
const trimmedUserInput = userInput.trim();
console.log("User input sau khi trim:", `"${trimmedUserInput}"`);

// 3. Loại bỏ khoảng trắng đầu của email
const trimmedEmail = email.trimStart();
console.log("Email sau khi trimStart:", `"${trimmedEmail}"`);
