# Hướng dẫn thiết lập GitHub Pages

## 🚀 GitHub Actions workflow đã được sửa lại!

Tôi đã sửa lại file `.github/workflows/deploy.yml` để sử dụng approach đơn giản hơn với `peaceiris/actions-gh-pages`.

## 📋 Các bước cần thực hiện trên GitHub:

### 1. Kích hoạt GitHub Pages
1. Vào repository trên GitHub: `https://github.com/dxhoangtemp001/TestWebapp`
2. Nhấn vào tab **Settings**
3. Cuộn xuống phần **Pages** ở sidebar bên trái
4. Trong phần **Source**, chọn **Deploy from a branch**
5. Chọn branch **gh-pages** và folder **/ (root)**
6. Nhấn **Save**

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
2. **Deploy job**: 
   - Checkout code từ branch `main`
   - Sử dụng `peaceiris/actions-gh-pages` để deploy
   - Tạo/cập nhật branch `gh-pages` với nội dung website
   - GitHub Pages sẽ serve từ branch `gh-pages`

## 🔧 Tính năng của workflow:

- ✅ Tự động deploy khi push code mới
- ✅ Có thể chạy thủ công từ GitHub UI
- ✅ Sử dụng action đáng tin cậy `peaceiris/actions-gh-pages`
- ✅ Tự động tạo branch `gh-pages`
- ✅ Đơn giản và ổn định

## 🎯 Lưu ý quan trọng:

- **Bước 1 rất quan trọng**: Phải chọn source là "Deploy from a branch" và chọn branch "gh-pages"
- Website sẽ được deploy từ thư mục gốc của repository
- Workflow sẽ tự động tạo branch `gh-pages` nếu chưa có
- Mọi thay đổi push vào branch `main` sẽ tự động trigger deployment mới
- Quá trình deployment thường mất 1-3 phút

## 🔄 Nếu vẫn gặp lỗi:

1. Đảm bảo đã làm theo bước 1 chính xác
2. Chờ workflow chạy xong và tạo branch `gh-pages`
3. Refresh trang Settings → Pages để thấy branch `gh-pages` xuất hiện
4. Chọn lại source nếu cần

Chúc bạn thành công! 🎉