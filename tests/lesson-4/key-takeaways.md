# Key Takeaways - Lesson 4: Git & Javascript Basic (tiếp theo)

## Javascript

### 1. Phạm vi của biến và Hoisting
- Biến có thể có phạm vi toàn cục (global) hoặc cục bộ (scope: `{}`)
- `var`: có thể được truy cập trước khi khai báo (giá trị mặc định là `undefined`)
- `let`: không thể truy cập trước khi khai báo (gây lỗi nếu truy cập sớm)

### 2. Câu lệnh điều kiện nâng cao
- `if...else` là cấu trúc điều kiện cơ bản nhất. Nó kiểm tra một điều kiện, nếu đúng thì thực hiện một hành động, nếu sai thì thực hiện hành động khác

```javascript
if (điều kiện) {
    // Thực hiện khi điều kiện đúng
} else {
    // Thực hiện khi điều kiện sai
}
```

- `if...else if...else`Cho phép kiểm tra nhiều điều kiện khác nhau, mỗi điều kiện sẽ có nhánh xử lý riêng
```javascript
if (điều kiện 1) {
    // Xử lý nếu điều kiện 1 đúng
} else if (điều kiện 2) {
    // Xử lý nếu điều kiện 2 đúng
} else {
    // Xử lý nếu không điều kiện nào đúng
}
```

- `switch...case` là một cấu trúc điều kiện giúp kiểm tra một biến với nhiều giá trị cụ thể. `default` là lựa chọn dự phòng nếu không có case nào phù hợp

```javascript
switch (biến) {
    case giá trị 1:
        // Thực hiện nếu biến == giá trị 1
        break;
    case giá trị 2:
        // Thực hiện nếu biến == giá trị 2
        break;
    ...
    default:
        // Thực hiện nếu không khớp giá trị nào
}
```

### 3. So sánh
- `==` và `!=`: so sánh "lỏng lẻo", tự động chuyển đổi kiểu dữ liệu
- `===` và `!==`: so sánh tuyệt đối, so sánh cả kiểu và giá trị

### 4. Vòng lặp nâng cao

| Tên cấu trúc   | Khi nào dùng                                           | Dùng với                           | Trả về                                |
|----------------|--------------------------------------------------------|------------------------------------|----------------------------------------|
| `for...in`     | Khi cần duyệt qua key/index                           | Object, Array                      | Key (tên thuộc tính hoặc chỉ số)       |
| `forEach()`    | Khi cần duyệt từng phần tử trong mảng (không cần break/continue) | Array                    | Giá trị và chỉ số                      |
| `for...of`     | Khi chỉ cần lấy giá trị từng phần tử                  | Iterable (Array, String, Map, Set) | Giá trị                                |
| `break`        | Khi cần thoát hoàn toàn khỏi vòng lặp                 | Mọi vòng lặp                       | Không có (thoát vòng lặp)              |
| `continue`     | Khi cần bỏ qua lượt lặp hiện tại và tiếp tục lượt sau | Mọi vòng lặp                       | Không có (bỏ qua lần lặp hiện tại)     |


## Javascript Utility Functions

### Định nghĩa

- **Util** = tiện ích
- **Util function** = các hàm tiện ích có sẵn trong Javascript
- Mục đích: giúp xử lý code nhanh, gọn, hiệu quả hơn

## Phân loại chính:

### 1. String Utilities

Các hàm hỗ trợ thao tác với chuỗi 

- `trim()` Loại bỏ khoảng trắng ở đầu và cuối chuỗi

- `toLowerCase()` Chuyển toàn bộ chuỗi thành chữ thường

- `toUpperCase()` Chuyển toàn bộ chuỗi thành chữ in hoa

- `includes()` Kiểm tra chuỗi con có tồn tại trong chuỗi hay không

- `replace()` Thay thế một phần của chuỗi bằng nội dung khác

- `split()` Tách chuỗi thành mảng dựa trên ký tự phân tách

- `substring()` Trích xuất một phần chuỗi từ vị trí bắt đầu đến vị trí kết thúc (không bao gồm kết thúc)

- `indexOf()` Trả về chỉ số xuất hiện đầu tiên của chuỗi con trong chuỗi gốc


### 2. Array Utilities

Các hàm hỗ trợ thao tác với mảng

- `map()` Duyệt qua từng phần tử, trả về mảng mới với giá trị đã được biến đổi

- `filter()` Lọc các phần tử thỏa mãn điều kiện và trả về mảng mới

- `find()` Tìm và trả về phần tử đầu tiên thỏa điều kiện

- `reduce()` Tính toán tích lũy trên các phần tử mảng, thường dùng để tính tổng, chuỗi, v.v

- `some()` Trả về `true` nếu có ít nhất một phần tử thỏa điều kiện

- `every()` Trả về `true` nếu tất cả phần tử đều thỏa điều kiện

- `push()` Thêm phần tử vào cuối mảng

- `shift()` Xóa và trả về phần tử đầu tiên trong mảng

- `sort()` Sắp xếp các phần tử của mảng (theo mặc định là chuỗi, có thể truyền hàm so sánh)
