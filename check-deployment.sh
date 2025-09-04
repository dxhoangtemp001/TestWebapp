#!/bin/bash

# 🚀 Script kiểm tra trạng thái deployment GitHub Pages

echo "🔍 Kiểm tra trạng thái deployment GitHub Pages..."
echo "=================================================="

# Kiểm tra branch hiện tại
echo "📋 Branch hiện tại:"
git branch --show-current

# Kiểm tra remote
echo -e "\n🌐 Remote repository:"
git remote -v

# Kiểm tra files cần thiết
echo -e "\n📁 Kiểm tra files cần thiết:"
for file in index.html style.css script.js; do
    if [ -f "$file" ]; then
        echo "✅ $file - OK"
    else
        echo "❌ $file - MISSING"
    fi
done

# Kiểm tra workflow file
echo -e "\n⚙️ Kiểm tra workflow:"
if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✅ deploy.yml - OK"
    echo "📋 Trigger branches:"
    grep -A 5 "branches:" .github/workflows/deploy.yml | grep -v "branches:"
else
    echo "❌ deploy.yml - MISSING"
fi

# Kiểm tra git status
echo -e "\n📊 Git status:"
git status --porcelain

# Thông tin hữu ích
echo -e "\n🌐 Thông tin deployment:"
echo "Repository: https://github.com/dxhoangtemp001/TestWebapp"
echo "Website URL: https://dxhoangtemp001.github.io/TestWebapp/"
echo "Actions: https://github.com/dxhoangtemp001/TestWebapp/actions"

echo -e "\n✅ Kiểm tra hoàn tất!"
echo "💡 Để xem trạng thái workflow, hãy vào: https://github.com/dxhoangtemp001/TestWebapp/actions"