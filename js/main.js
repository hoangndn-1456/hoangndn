// Sample blog posts data
const posts = [
    {
        id: 1,
        title: "Khởi đầu với GitHub Pages",
        date: "13/02/2026",
        excerpt: "Hướng dẫn chi tiết cách tạo và deploy một trang web tĩnh lên GitHub Pages một cách đơn giản và nhanh chóng.",
        image: "https://via.placeholder.com/400x200/6366f1/ffffff?text=GitHub+Pages"
    },
    {
        id: 2,
        title: "Thiết kế Web hiện đại",
        date: "12/02/2026",
        excerpt: "Khám phá các xu hướng thiết kế web mới nhất với glassmorphism, dark mode và animations mượt mà.",
        image: "https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Modern+Design"
    },
    {
        id: 3,
        title: "JavaScript Tips & Tricks",
        date: "11/02/2026",
        excerpt: "Những mẹo và thủ thuật JavaScript giúp code của bạn sạch hơn, hiệu quả hơn và dễ bảo trì hơn.",
        image: "https://via.placeholder.com/400x200/ec4899/ffffff?text=JavaScript"
    }
];

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Render Posts
function renderPosts() {
    const postsGrid = document.getElementById('postsGrid');
    if (!postsGrid) return;

    postsGrid.innerHTML = posts.map(post => `
        <article class="post-card" onclick="openPost(${post.id})">
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-content">
                <time class="post-date">${post.date}</time>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more">
                    Đọc thêm
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 12l4-4-4-4"/>
                    </svg>
                </a>
            </div>
        </article>
    `).join('');
}

// Open Post (placeholder for future implementation)
function openPost(postId) {
    console.log('Opening post:', postId);
    // You can implement navigation to a detailed post page here
    alert(`Chức năng xem chi tiết bài viết sẽ được phát triển trong phiên bản tiếp theo!`);
}

// Smooth Scroll Navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.post-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderPosts();
    initSmoothScroll();
    initNavbarScroll();

    // Add event listener for theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Initialize scroll animations after posts are rendered
    setTimeout(initScrollAnimations, 100);
});

// Add to posts data functionality (for future use)
function addPost(title, excerpt, date, image) {
    const newPost = {
        id: posts.length + 1,
        title,
        date,
        excerpt,
        image: image || "https://via.placeholder.com/400x200/6366f1/ffffff?text=New+Post"
    };
    posts.unshift(newPost);
    renderPosts();
    initScrollAnimations();
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { posts, addPost, renderPosts };
}
