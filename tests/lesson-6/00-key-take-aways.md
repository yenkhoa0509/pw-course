# Lesson 06 - Git & Javascript Advanced

## Git

1. Clone
- Dùng để sao chép toàn bộ dự án từ remote (GitHub) về máy local
- Câu lệnh:
 ```bash
git clone <url>
git clone <url> <new-folder-name>
```

2. Branch
- Nhánh giúp chia nhỏ công việc khi làm việc nhóm
- Câu lệnh:
```bash
git branch <branch_name>
git checkout <branch_name>
git checkout -b <branch_name> # Tạo và chuyển nhánh
```
3. Push
- Đẩy code từ local lên remote
- Câu lệnh:
```bash
git push <remote_name> <branch_name>
git push origin main
```
4. Pull
- Lấy code mới nhất từ remote về local
So sánh với clone

`clone`: lấy toàn bộ dự án

`pull`: chỉ lấy thay đổi mới của nhánh
- Câu lệnh:
```bash
git pull origin main
```
5. Stash
- Lưu tạm thời những thay đổi chưa hoàn tất.
- Câu lệnh:
```bash
git stash       # Lưu tạm
git stash pop   # Lấy ra để tiếp tục
```
6. Merge Request & Reviewer
- Merge Request: Gộp code từ một nhánh vào nhánh chính
- Reviewer: Người kiểm tra và góp ý code
- Nên đẩy code sớm để nhận được feedback sớm

7. Convention
- Đặt tên nhánh và commit theo chuẩn giúp dễ hiểu và quản lý
- Tên nhánh:
```bash
feat/lesson-6-login-page
fix/fill-info
chore/cleanup
```
- Commit message:
```bash
feat: add solution for test 1
fix: add missing continue
```

## Javascript - Class

1. Class là gì?
- Là khuôn mẫu để tạo đối tượng
- Xác định các thuộc tính và phương thức mà đối tượng sẽ có

2. Lợi ích:
- Tái sử dụng code
- Tăng tính linh hoạt khi phát triển phần mềm

3. Cách dùng:
- Tạo class với constructor, method...
- Ví dụ:
```javascript
class LoginPage {
  fillLogin(username, password) {
    
  }
}

const login = new LoginPage();
login.fillLogin("user", "pass");
```

