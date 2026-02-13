# Personal Blog - GitHub Pages

Một blog cá nhân hiện đại được xây dựng với HTML, CSS, và JavaScript thuần, deploy lên GitHub Pages.

## ✨ Tính năng

- 🎨 **Thiết kế hiện đại**: Giao diện đẹp mắt với gradient, glassmorphism
- 🌓 **Dark Mode**: Chuyển đổi theme sáng/tối mượt mà
- 📱 **Responsive**: Tương thích hoàn hảo trên mọi thiết bị
- ⚡ **Performance**: Tối ưu tốc độ tải trang
- 🎭 **Animations**: Hiệu ứng chuyển động mượt mà
- 📝 **Blog Posts**: Quản lý và hiển thị bài viết dễ dàng

## 🚀 Cách deploy lên GitHub Pages

### Bước 1: Tạo GitHub Repository

1. Truy cập [GitHub](https://github.com) và đăng nhập
2. Click vào nút **"+"** ở góc trên bên phải, chọn **"New repository"**
3. Đặt tên repository theo một trong hai cách:
   - **Cách 1 (Personal site)**: `username.github.io` (thay `username` bằng tên GitHub của bạn)
   - **Cách 2 (Project site)**: `personal-blog` hoặc tên khác bạn muốn
4. Chọn **Public**
5. **KHÔNG** chọn "Initialize this repository with a README"
6. Click **"Create repository"**

### Bước 2: Upload code lên GitHub

Mở Terminal tại thư mục `personal-blog` và chạy các lệnh sau:

```bash
# Khởi tạo Git repository
cd personal-blog
git init

# Add tất cả files
git add .

# Commit
git commit -m "Initial commit: Personal blog"

# Thêm remote repository (thay YOUR_USERNAME và YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push code lên GitHub
git branch -M main
git push -u origin main
```

### Bước 3: Enable GitHub Pages

1. Vào repository trên GitHub
2. Click vào tab **"Settings"**
3. Tìm mục **"Pages"** ở sidebar bên trái
4. Tại phần **"Source"**:
   - Chọn branch: **main**
   - Chọn folder: **/ (root)**
5. Click **"Save"**

### Bước 4: Truy cập website

Sau vài phút, website của bạn sẽ có sẵn tại:

- **Cách 1 (Personal site)**: `https://username.github.io`
- **Cách 2 (Project site)**: `https://username.github.io/personal-blog`

GitHub sẽ hiển thị URL chính xác ở phần Settings > Pages.

## 📁 Cấu trúc thư mục

```
personal-blog/
├── index.html          # Trang chủ
├── css/
│   └── style.css      # Styles và theme
├── js/
│   └── main.js        # JavaScript logic
├── posts/             # Thư mục chứa bài viết (mở rộng sau)
├── images/            # Thư mục chứa hình ảnh
└── README.md          # Tài liệu này
```

## 🎨 Tùy chỉnh

### Thay đổi thông tin cá nhân

Mở `index.html` và tìm các phần sau để chỉnh sửa:

- **Brand name**: Tìm `<h1 class="brand-title">My Blog</h1>`
- **Hero section**: Tìm `<h1 class="hero-title">` và `<p class="hero-subtitle">`
- **About section**: Tìm `<section id="about">` để thay đổi mô tả
- **Contact links**: Tìm `<div class="social-links">` để cập nhật GitHub, Email

### Thêm bài viết mới

Mở `js/main.js` và thêm bài viết vào mảng `posts`:

```javascript
const posts = [
    {
        id: 1,
        title: "Tiêu đề bài viết",
        date: "13/02/2026",
        excerpt: "Mô tả ngắn về bài viết...",
        image: "https://via.placeholder.com/400x200"
    },
    // Thêm bài viết mới ở đây
];
```

### Thay đổi màu sắc

Mở `css/style.css` và chỉnh sửa các biến CSS trong `:root`:

```css
:root {
    --accent-primary: #6366f1;    /* Màu chủ đạo */
    --accent-secondary: #8b5cf6;  /* Màu phụ */
    /* ... */
}
```

## 🔄 Cập nhật website

Sau khi chỉnh sửa code, chạy các lệnh sau để cập nhật:

```bash
git add .
git commit -m "Mô tả thay đổi của bạn"
git push
```

GitHub Pages sẽ tự động deploy phiên bản mới trong vài phút.

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling với CSS Variables, Flexbox, Grid
- **JavaScript (ES6+)**: Logic và tương tác
- **Google Fonts**: Typography (Inter)

## 📝 License

MIT License - Bạn có thể tự do sử dụng và chỉnh sửa project này.

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo issue hoặc pull request nếu bạn có ý tưởng cải thiện.

---

Made with ❤️ by [Your Name]
