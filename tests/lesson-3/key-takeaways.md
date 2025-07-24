# Key Takeaways – Lesson 3: Git & JavaScript Basics (Tiếp theo)

## Git

- **Sửa commit message:**  
  `git commit --amend -m "new message"` để thay đổi nội dung commit gần nhất

- **Đưa file từ staging về working directory:**  
  `git restore --staged <file>` để gỡ file khỏi vùng staging

- **Undo commit gần nhất:**  
  `git reset HEAD~1` để đưa commit gần nhất về lại working directory

- **Quản lý branch:**  
  `git branch <ten_nhanh>` để    tạo nhánh mới
  `git checkout <ten_nhanh>` để chuyển nhánh
  `git checkout -b <ten_nhanh>` để tạo và chuyển cùng lúc
  
  **Tips:** Luôn tạo branch mới trước khi thực hiện một lệnh copy từ internet

- **Sử dụng .gitignore:**  
  Bỏ qua file không cần Git theo dõi bằng cách liệt kê tên trong file `.gitignore` 

## JavaScript

1. **Quy ước đặt tên (Convention):**  
 `camelCase`: biến, hàm  
 `PascalCase`: class  
 `kebab-case`: tên file  
 `snake_case`: hiếm dùng

2. **Sử dụng console.log:**
  - `console.log` với dấu nháy đơn ' hoặc nháy kép "
```javascript
console.log(‘Toi la Nga’);
console.log(“Toi la Phong”);
```
  - `console.log` (chèn biến vào chuỗi)
```javascript
console.log(`${variable_name}`)
```

3. **Object:**

 Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số
- *Khai báo Object:* Gom nhiều thông tin vào một object
```javascript
const user = {
  name: "Alex",
  age: 10,
  email: "alex@gmail.com"
};
```
 - *Object lồng nhau:*  Object có thể chứa object khác bên trong
```javascript
const product = {
  name: "Laptop",
  price: 500,
  isWindow: true,
  manufacturer: {
    name: "Acer",
    year: 2024
  }
};
```
- *Truy xuất và cập nhật giá trị trong Object:* có thể dùng dấu `.` hoặc dấu `[]`
```javascript
console.log(user.name);
console.log(product.manufacturer.name);
console.log(product["price"]);

user.age = 28;
product["manufacturer"]["year"] = 2025;
```
3. **Logical Operators**

&& : cả 2 vế của mệnh đề đều
đúng

|| : một trong 2 vế đúng

! : đảo ngược lại giá trị của
mệnh đề

4. **Array**
- *Cách khai báo mảng:*
```javascript
const students = ["Ôn", "Nguyễn", "Yến", "Khoa"];
```
- *Lấy độ dài mảng:*
```javascript
console.log(students.length);
```
- *Truy cập phần tử trong mảng:*
```javascript
console.log(students[4]);
```

5. **Fuction**

Function = hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể
```javascript
function greet(name) {
  return `Hello, ${name}`;
}
```


