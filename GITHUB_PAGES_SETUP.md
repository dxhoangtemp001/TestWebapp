# Hướng dẫn thiết lập GitHub Pages

## 🚀 GitHub Actions workflow đã được tạo!

Tôi đã tạo file `.github/workflows/deploy.yml` để tự động deploy ứng dụng lên GitHub Pages.

## 📋 Các bước cần thực hiện trên GitHub:

### 1. Kích hoạt GitHub Pages
1. Vào repository trên GitHub: `https://github.com/dxhoangtemp001/TestWebapp`
2. Nhấn vào tab **Settings**
3. Cuộn xuống phần **Pages** ở sidebar bên trái
4. Trong phần **Source**, chọn **GitHub Actions**

### 2. Chạy workflow
- Workflow sẽ tự động chạy khi có push vào branch `main`
- Hoặc bạn có thể chạy thủ công:
  1. Vào tab **Actions**
  2. Chọn workflow **Deploy to GitHub Pages**
  3. Nhấn **Run workflow**

### 3. Kiểm tra deployment
- Sau khi workflow chạy thành công, website sẽ có sẵn tại:
  `https://dxhoangtemp001.github.io/TestWebapp/`

## ⚙️ Workflow hoạt động như thế nào:

1. **Trigger**: Chạy khi có push vào branch `main` hoặc chạy thủ công
2. **Build job**: 
   - Checkout code
   - Setup GitHub Pages
   - Upload toàn bộ files làm artifact
3. **Deploy job**:
   - Deploy artifact lên GitHub Pages
   - Cung cấp URL của website

## 🔧 Tính năng của workflow:

- ✅ Tự động deploy khi push code mới
- ✅ Có thể chạy thủ công từ GitHub UI
- ✅ Sử dụng các actions chính thức của GitHub
- ✅ Thiết lập quyền bảo mật phù hợp
- ✅ Chỉ cho phép một deployment chạy cùng lúc

## 🎯 Lưu ý:

- Website sẽ được deploy từ thư mục gốc của repository
- Mọi thay đổi push vào branch `main` sẽ tự động trigger deployment mới
- Quá trình deployment thường mất 1-3 phút

Chúc bạn thành công! 🎉