// Khởi tạo ứng dụng khi DOM đã load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Khởi tạo các hiệu ứng cho thẻ
    initializeCardAnimations();
    
    // Khởi tạo các nút tương tác
    initializeInteractiveButtons();
    
    // Khởi tạo hiệu ứng hạt
    initializeParticleEffect();
    
    // Khởi tạo hiệu ứng cuộn
    initializeScrollAnimations();
}

// Hiệu ứng cho các thẻ
function initializeCardAnimations() {
    const cards = document.querySelectorAll('.card');
    
    // Hiệu ứng xuất hiện khi cuộn
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.getAttribute('data-animation');
                entry.target.classList.add(animation);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Khởi tạo các nút tương tác
function initializeInteractiveButtons() {
    const magicBtn = document.getElementById('magicBtn');
    const bounceBtn = document.getElementById('bounceBtn');
    const pulseBtn = document.getElementById('pulseBtn');
    const colorBox = document.getElementById('colorBox');
    
    // Nút phép màu
    magicBtn.addEventListener('click', function() {
        colorBox.classList.remove('bounce-effect', 'pulse-effect');
        colorBox.classList.add('magic');
        
        // Thay đổi nội dung
        colorBox.innerHTML = '<p>✨ Phép màu đã được thực hiện! ✨</p>';
        
        // Tạo hiệu ứng hạt
        createParticles(magicBtn);
        
        // Reset sau 1 giây
        setTimeout(() => {
            colorBox.classList.remove('magic');
            colorBox.innerHTML = '<p>Nhấn các nút để xem hiệu ứng!</p>';
        }, 1000);
    });
    
    // Nút bounce
    bounceBtn.addEventListener('click', function() {
        colorBox.classList.remove('magic', 'pulse-effect');
        colorBox.classList.add('bounce-effect');
        
        // Thay đổi nội dung
        colorBox.innerHTML = '<p>🏀 Bounce! Bounce! Bounce! 🏀</p>';
        
        // Reset sau 0.6 giây
        setTimeout(() => {
            colorBox.classList.remove('bounce-effect');
            colorBox.innerHTML = '<p>Nhấn các nút để xem hiệu ứng!</p>';
        }, 600);
    });
    
    // Nút pulse
    pulseBtn.addEventListener('click', function() {
        colorBox.classList.remove('magic', 'bounce-effect');
        colorBox.classList.add('pulse-effect');
        
        // Thay đổi nội dung
        colorBox.innerHTML = '<p>💓 Pulse! Pulse! Pulse! 💓</p>';
        
        // Reset sau 0.5 giây
        setTimeout(() => {
            colorBox.classList.remove('pulse-effect');
            colorBox.innerHTML = '<p>Nhấn các nút để xem hiệu ứng!</p>';
        }, 500);
    });
}

// Tạo hiệu ứng hạt
function createParticles(element) {
    const rect = element.getBoundingClientRect();
    const particleContainer = document.getElementById('particleContainer');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Vị trí ngẫu nhiên xung quanh nút
        const x = rect.left + rect.width / 2 + (Math.random() - 0.5) * 100;
        const y = rect.top + rect.height / 2 + (Math.random() - 0.5) * 100;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        // Màu sắc ngẫu nhiên
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particleContainer.appendChild(particle);
        
        // Xóa hạt sau khi animation kết thúc
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 4000);
    }
}

// Khởi tạo hiệu ứng hạt nền
function initializeParticleEffect() {
    const particleContainer = document.getElementById('particleContainer');
    
    // Tạo hạt nền
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Vị trí ngẫu nhiên
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        
        // Kích thước ngẫu nhiên
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Độ mờ ngẫu nhiên
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        // Thời gian animation ngẫu nhiên
        particle.style.animationDuration = (Math.random() * 4 + 3) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        particleContainer.appendChild(particle);
    }
}

// Hiệu ứng cuộn
function initializeScrollAnimations() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.header');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Hiệu ứng hover cho các thẻ
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Hiệu ứng click cho các nút
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Tạo hiệu ứng ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Thêm CSS cho hiệu ứng ripple
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Hiệu ứng loading khi trang load
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Hiệu ứng resize window
window.addEventListener('resize', function() {
    // Cập nhật vị trí hạt khi resize
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        if (Math.random() < 0.1) { // Chỉ cập nhật 10% hạt
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
        }
    });
});