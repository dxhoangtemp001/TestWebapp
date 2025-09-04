# 🚀 Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Tạo GitHub Repository

1. Đăng nhập vào [GitHub](https://github.com)
2. Click **"New repository"** (nút + ở góc phải)
3. Đặt tên repository (ví dụ: `web-app-with-effects`)
4. Chọn **Public** để có thể sử dụng GitHub Pages miễn phí
5. **KHÔNG** tích "Add a README file" (vì chúng ta đã có rồi)
6. Click **"Create repository"**

## Bước 2: Upload code lên GitHub

### Cách 1: Sử dụng Git Command Line

```bash
# Khởi tạo git repository
git init

# Thêm tất cả files
git add .

# Commit lần đầu
git commit -m "Initial commit: Web app with effects"

# Thêm remote repository (thay YOUR_USERNAME và YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push lên GitHub
git branch -M main
git push -u origin main
```

### Cách 2: Sử dụng GitHub Desktop
1. Tải [GitHub Desktop](https://desktop.github.com/)
2. Mở GitHub Desktop
3. Click **"Add an Existing Repository"**
4. Chọn thư mục chứa project
5. Click **"Publish repository"**

### Cách 3: Upload trực tiếp
1. Vào repository vừa tạo trên GitHub
2. Click **"uploading an existing file"**
3. Kéo thả tất cả files vào
4. Viết commit message: "Initial commit"
5. Click **"Commit changes"**

## Bước 3: Kích hoạt GitHub Pages

1. Vào repository trên GitHub
2. Click tab **"Settings"**
3. Cuộn xuống phần **"Pages"** (bên trái)
4. Trong **"Source"**, chọn **"GitHub Actions"**
5. GitHub sẽ tự động detect workflow file

## Bước 4: Kiểm tra Deploy

1. Vào tab **"Actions"** trong repository
2. Bạn sẽ thấy workflow **"Deploy to GitHub Pages"** đang chạy
3. Đợi cho đến khi có dấu ✅ (thành công)
4. Vào **"Settings" > "Pages"** để xem URL
5. URL sẽ có dạng: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Bước 5: Cập nhật README

Sau khi có URL, cập nhật file `README.md`:

```markdown
## 🌐 Live Demo

Xem ứng dụng trực tuyến tại: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

## 🔧 Troubleshooting

### Lỗi thường gặp:

1. **Workflow không chạy:**
   - Kiểm tra file `.github/workflows/deploy.yml` có đúng không
   - Đảm bảo branch là `main` hoặc `master`

2. **Pages không hiển thị:**
   - Vào Settings > Pages, kiểm tra source đã chọn "GitHub Actions"
   - Đợi vài phút để GitHub build xong

3. **Lỗi permissions:**
   - Vào Settings > Actions > General
   - Chọn "Read and write permissions"
   - Tích "Allow GitHub Actions to create and approve pull requests"

### Kiểm tra logs:
1. Vào tab **"Actions"**
2. Click vào workflow run
3. Xem logs để tìm lỗi cụ thể

## 🎉 Hoàn thành!

Sau khi deploy thành công, bạn sẽ có:
- ✅ Website trực tuyến miễn phí
- ✅ Tự động deploy khi push code mới
- ✅ URL công khai để chia sẻ
- ✅ HTTPS tự động

## 📱 Test trên mobile

Sau khi deploy, test trên điện thoại:
1. Mở URL trên mobile browser
2. Kiểm tra responsive design
3. Test các hiệu ứng touch

---

**Lưu ý:** Lần đầu deploy có thể mất 5-10 phút. Các lần sau sẽ nhanh hơn!