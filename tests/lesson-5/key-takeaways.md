# Lesson 05 – Key Takeaways: DOM Terminology & Playwright Basic

## Function nâng cao trong JavaScript

1. Lambda (Arrow Function)
Sử dụng dấu => thay vì từ khoá function
```javascript
(parameters) => {
  // code
}
```
2. Anonymous Function (Hàm ẩn danh)
Hàm không tên, thường dùng một lần hoặc làm đối số truyền vào hàm khác
```javascript
function (parameters) {
  // code
}
```

## DOM
1. Khái niệm cơ bản:

- DOM là cấu trúc dạng cây của HTML

- Mỗi thành phần HTML là một “node”

2. Cấu trúc DOM cơ bản bao gồm:

- `<html>`: Thẻ gốc bao bọc toàn bộ tài liệu HTML.
- `<head>`: Chứa thông tin metadata (tiêu đề, CSS, script,...).
- `<body>`: Chứa nội dung chính hiển thị trên trình duyệt.

3. Phân loại thẻ

- Thẻ mở / đóng: `<option>United States</option>`

- Thẻ tự đóng: `<img />, <br />, <hr />`

- Thuộc tính: `<option value="usa" school="HN">United States</option>`

4. Thẻ HTML thường gặp:

- div, form, input, textarea, button, table, iframe

- input: các loại như text, email, radio, checkbox, file, date,...

- table: gồm thead, tbody, tr, th, td

## Selector

Tuyệt đối: bắt đầu bằng /

Tương đối: bắt đầu bằng // (khuyến khích dùng)
`//tagname[@attribute="value"]`

## Playwright Basic Syntax

1. Khai báo một test:
```javascript
import { test } from '@playwright/test';

test('Tên test', async ({ page }) => {
  // code
});
```
2. Step trong test:
```javascript
await test.step('Tên step', async () => {
  // code
});
```
Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain

## Các hành động cơ bản trong Playwright

1. Navigate (Điều hướng):
```javascript
await page.goto("https://pw-practice.playwrightvn.com/");
```

2. Click:
```javascript
await page.locator("//button").click(); // single click
await page.locator("//button").dblclick(); // double click
await page.locator("//button").click({ button: 'right' }); // right click
```

3. Input:
```javascript
await page.locator("//input").fill('Nội dung'); // paste
await page.locator("//input").pressSequentially('Nội dung', { delay: 100 }); // gõ từng ký tự
```

4. Checkbox/Radio
```javascript
await page.locator("//input").check();
await page.locator("//input").setChecked(false);
```

5. Select option (Chọn từ dropdown)
```javascript
await page.locator("select").selectOption("value1"); // Theo value
await page.locator("select").selectOption({ label: 'Option Text' }); // Theo label
```

6. Set Input File (Upload file):
```javascript
await page.locator("input[type='file']").setInputFiles('path/to/file.txt');
```


