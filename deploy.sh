#!/bin/bash

# 🚀 Script tự động deploy lên GitHub Pages
# Sử dụng: ./deploy.sh [commit-message]

set -e

# Màu sắc cho output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Hàm in thông báo
print_message() {
    echo -e "${2}${1}${NC}"
}

# Kiểm tra git
check_git() {
    if ! command -v git &> /dev/null; then
        print_message "❌ Git không được cài đặt!" $RED
        exit 1
    fi
    
    if [ ! -d ".git" ]; then
        print_message "❌ Đây không phải là git repository!" $RED
        print_message "Chạy: git init" $YELLOW
        exit 1
    fi
}

# Kiểm tra files cần thiết
check_files() {
    print_message "🔍 Kiểm tra files..." $BLUE
    
    local missing_files=()
    
    [ ! -f "index.html" ] && missing_files+=("index.html")
    [ ! -f "style.css" ] && missing_files+=("style.css")
    [ ! -f "script.js" ] && missing_files+=("script.js")
    [ ! -f ".github/workflows/deploy.yml" ] && missing_files+=(".github/workflows/deploy.yml")
    
    if [ ${#missing_files[@]} -ne 0 ]; then
        print_message "❌ Thiếu các files sau:" $RED
        printf '%s\n' "${missing_files[@]}"
        exit 1
    fi
    
    print_message "✅ Tất cả files cần thiết đã có!" $GREEN
}

# Kiểm tra remote repository
check_remote() {
    if ! git remote get-url origin &> /dev/null; then
        print_message "⚠️ Chưa có remote repository!" $YELLOW
        print_message "Thêm remote repository:" $CYAN
        print_message "git remote add origin https://github.com/USERNAME/REPO_NAME.git" $CYAN
        exit 1
    fi
    
    print_message "✅ Remote repository đã được cấu hình!" $GREEN
}

# Commit và push
deploy() {
    local commit_msg="${1:-🚀 Deploy: $(date '+%Y-%m-%d %H:%M:%S')}"
    
    print_message "📦 Đang chuẩn bị deploy..." $BLUE
    
    # Add tất cả files
    git add .
    
    # Kiểm tra có thay đổi không
    if git diff --staged --quiet; then
        print_message "ℹ️ Không có thay đổi để commit!" $YELLOW
        return 0
    fi
    
    # Commit
    print_message "💾 Đang commit..." $BLUE
    git commit -m "$commit_msg"
    
    # Push
    print_message "🚀 Đang push lên GitHub..." $BLUE
    git push origin main 2>/dev/null || git push origin master 2>/dev/null || {
        print_message "❌ Lỗi khi push!" $RED
        print_message "Kiểm tra remote repository và permissions!" $YELLOW
        exit 1
    }
    
    print_message "✅ Deploy thành công!" $GREEN
    print_message "🌐 GitHub Actions đang build và deploy..." $CYAN
    print_message "📊 Xem tiến trình tại: https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]\([^.]*\).*/\1/')/actions" $PURPLE
}

# Hiển thị thông tin repository
show_info() {
    local repo_url=$(git remote get-url origin 2>/dev/null || echo "Chưa có remote")
    local current_branch=$(git branch --show-current)
    
    print_message "📋 Thông tin Repository:" $CYAN
    print_message "  URL: $repo_url" $NC
    print_message "  Branch: $current_branch" $NC
    print_message "  Last commit: $(git log -1 --pretty=format:'%h - %s (%cr)')" $NC
}

# Hiển thị help
show_help() {
    print_message "🚀 GitHub Pages Deploy Script" $PURPLE
    echo ""
    print_message "Sử dụng:" $YELLOW
    echo "  ./deploy.sh [commit-message]"
    echo ""
    print_message "Ví dụ:" $YELLOW
    echo "  ./deploy.sh"
    echo "  ./deploy.sh 'Thêm hiệu ứng mới'"
    echo "  ./deploy.sh 'Fix bug responsive'"
    echo ""
    print_message "Các lệnh khác:" $YELLOW
    echo "  ./deploy.sh --info    # Hiển thị thông tin repository"
    echo "  ./deploy.sh --help    # Hiển thị help này"
    echo ""
    print_message "Lưu ý:" $CYAN
    echo "  - Đảm bảo đã cấu hình GitHub Pages trong Settings"
    echo "  - Repository phải là Public để dùng GitHub Pages miễn phí"
    echo "  - GitHub Actions sẽ tự động deploy sau khi push"
}

# Main function
main() {
    case "${1:-}" in
        --help|-h)
            show_help
            exit 0
            ;;
        --info|-i)
            check_git
            show_info
            exit 0
            ;;
        *)
            check_git
            check_files
            check_remote
            show_info
            echo ""
            deploy "$1"
            ;;
    esac
}

# Chạy script
main "$@"