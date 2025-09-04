# 🚀 Hướng dẫn cấu hình GitHub Pages

## ✅ Đã hoàn thành

1. **Workflow GitHub Actions** đã được cấu hình trong `.github/workflows/deploy.yml`
2. **Nhánh hiện tại** `cursor/add-github-pages-deploy-ci-cd-action-805f` đã được thêm vào trigger
3. **Code đã được push** lên GitHub

## 🔧 Cần cấu hình thêm

### 1. Bật GitHub Pages trong Repository Settings

1. Vào **Settings** của repository trên GitHub
2. Cuộn xuống phần **Pages** (bên trái)
3. Trong **Source**, chọn **GitHub Actions**
4. Lưu cài đặt

### 2. Kiểm tra Permissions

Đảm bảo repository có các permissions sau:
- **Actions**: Enabled
- **Pages**: Enabled  
- **Workflow permissions**: Read and write permissions

### 3. Chạy Workflow

Workflow sẽ tự động chạy khi:
- Push code lên nhánh `main`, `master`, hoặc `cursor/add-github-pages-deploy-ci-cd-action-805f`
- Tạo Pull Request
- Chạy thủ công qua **Actions** tab

## 🌐 Truy cập Website

Sau khi deploy thành công, website sẽ có sẵn tại:
```
https://dxhoangtemp001.github.io/TestWebapp/
```

## 📋 Kiểm tra Status

1. Vào tab **Actions** trên GitHub
2. Tìm workflow **🚀 Deploy to GitHub Pages**
3. Kiểm tra logs nếu có lỗi

## 🔍 Troubleshooting

### Lỗi thường gặp:

1. **Pages not found**: Kiểm tra cấu hình Source trong Settings
2. **Permission denied**: Kiểm tra workflow permissions
3. **Build failed**: Kiểm tra logs trong Actions tab

### Debug commands:

```bash
# Kiểm tra files có tồn tại không
ls -la index.html style.css script.js

# Kiểm tra git status
git status

# Kiểm tra remote
git remote -v
```

## 📞 Hỗ trợ

Nếu gặp vấn đề, hãy kiểm tra:
1. Logs trong GitHub Actions
2. Settings của repository
3. Permissions của workflow