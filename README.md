# 🌟 Ứng dụng Web với Hiệu ứng Đẹp

Một ứng dụng web tương tác với nhiều hiệu ứng animation và visual effects tuyệt đẹp, được xây dựng bằng HTML, CSS và JavaScript thuần.

## ✨ Tính năng

### 🎨 Hiệu ứng Visual
- **Gradient Background** - Nền gradient đẹp mắt với màu sắc hài hòa
- **Card Animations** - Các thẻ xuất hiện với hiệu ứng fade, slide, và rotate
- **Hover Effects** - Hiệu ứng nổi lên khi di chuột qua
- **Glowing Text** - Tiêu đề có hiệu ứng phát sáng
- **Particle Effects** - Hạt bay lơ lửng tạo không gian động

### ⚡ Tương tác
- **Magic Button** - Hiệu ứng xoay và đổi màu
- **Bounce Button** - Hiệu ứng nhảy lên xuống
- **Pulse Button** - Hiệu ứng co giãn nhịp nhàng
- **Ripple Effect** - Hiệu ứng sóng khi click
- **Scroll Parallax** - Hiệu ứng cuộn mượt mà

### 📱 Responsive Design
- Tự động điều chỉnh trên mọi thiết bị
- Layout linh hoạt với CSS Grid
- Tối ưu cho mobile và desktop

## 🚀 Cách chạy

### Chạy local
```bash
# Clone repository
git clone <your-repo-url>
cd <repo-name>

# Chạy server local (Python)
python3 -m http.server 8000

# Hoặc sử dụng Node.js
npx serve .

# Truy cập http://localhost:8000
```

### Deploy lên GitHub Pages

#### Cách 1: Sử dụng script tự động
```bash
# Cấu hình remote repository trước
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Deploy tự động
./deploy.sh "Commit message của bạn"
```

#### Cách 2: Deploy thủ công
1. Fork repository này
2. Vào Settings > Pages
3. Chọn source: "GitHub Actions"
4. Push code lên branch main/master
5. GitHub Actions sẽ tự động deploy

#### Cách 3: Tạo Release
```bash
# Tạo tag version
git tag v1.0.0
git push origin v1.0.0

# GitHub Actions sẽ tự động tạo release
```

## 📁 Cấu trúc Project

```
├── index.html                    # File HTML chính
├── style.css                     # CSS với animations
├── script.js                     # JavaScript tương tác
├── deploy.sh                     # Script deploy tự động
├── .github/
│   ├── workflows/
│   │   ├── deploy.yml            # Deploy lên GitHub Pages
│   │   ├── ci.yml                # Kiểm tra chất lượng code
│   │   ├── release.yml           # Tạo release tự động
│   │   └── dependency-check.yml  # Kiểm tra dependencies
│   └── dependabot.yml            # Tự động cập nhật dependencies
├── .gitignore                    # Git ignore file
├── README.md                     # File hướng dẫn
└── DEPLOYMENT.md                 # Hướng dẫn deploy chi tiết
```

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc semantic
- **CSS3** - Animations, Transitions, Grid, Flexbox
- **Vanilla JavaScript** - Tương tác và hiệu ứng động
- **GitHub Actions** - CI/CD tự động với 4 workflows
- **GitHub Pages** - Hosting miễn phí
- **Dependabot** - Tự động cập nhật dependencies

## 🤖 GitHub Actions Workflows

### 🚀 Deploy Workflow (`deploy.yml`)
- **Trigger**: Push to main/master, Pull requests
- **Chức năng**: Tự động deploy lên GitHub Pages
- **Features**: Kiểm tra files, setup Pages, upload artifacts

### 🔍 CI Workflow (`ci.yml`)
- **Trigger**: Push, Pull requests, Manual
- **Chức năng**: Kiểm tra chất lượng code
- **Features**: HTML/CSS/JS validation, security check, performance analysis

### 🏷️ Release Workflow (`release.yml`)
- **Trigger**: Push tags (v*.*.*), Manual
- **Chức năng**: Tự động tạo release
- **Features**: Generate changelog, upload assets, create GitHub release

### 🔍 Dependency Check (`dependency-check.yml`)
- **Trigger**: Weekly schedule, Push, Manual
- **Chức năng**: Kiểm tra dependencies và bảo mật
- **Features**: CDN check, bundle analysis, security scan

## 🎯 Hiệu ứng chi tiết

### CSS Animations
- `fadeInDown` - Xuất hiện từ trên xuống
- `fadeInUp` - Xuất hiện từ dưới lên
- `slideInLeft` - Trượt từ trái sang
- `rotateIn` - Xoay vào
- `glow` - Hiệu ứng phát sáng
- `bounce` - Nhảy lên xuống
- `magic` - Xoay và đổi màu
- `pulse` - Co giãn

### JavaScript Interactions
- Intersection Observer cho scroll animations
- Event listeners cho button interactions
- Dynamic particle generation
- Ripple effect on click
- Responsive particle positioning

## 🌐 Live Demo

Xem ứng dụng trực tuyến tại: [GitHub Pages](https://your-username.github.io/your-repo-name)

## 📝 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 🤝 Contributing

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📞 Liên hệ

Nếu có câu hỏi hoặc góp ý, hãy tạo issue hoặc liên hệ qua email.

---

Được tạo với ❤️ và hiệu ứng đẹp!