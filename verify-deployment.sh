#!/bin/bash

# Marvel Digital Solutions - Deployment Verification Script

echo "🚀 Marvel Digital Solutions - Deployment Verification"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

echo "✅ Project structure verified"

# Check required files
required_files=(
    "next.config.js"
    "tailwind.config.js"
    "tsconfig.json"
    "vercel.json"
    ".gitignore"
    "src/app/page.tsx"
    "src/app/layout.tsx"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

# Check git status
if git status > /dev/null 2>&1; then
    echo "✅ Git repository initialized"
    if git remote get-url origin > /dev/null 2>&1; then
        echo "✅ GitHub remote configured"
        echo "   Remote URL: $(git remote get-url origin)"
    else
        echo "❌ GitHub remote not configured"
    fi
else
    echo "❌ Git not initialized"
fi

# Check Node.js version
node_version=$(node --version)
echo "✅ Node.js version: $node_version"

# Check npm
npm_version=$(npm --version)
echo "✅ npm version: $npm_version"

echo ""
echo "📋 Next Steps for Deployment:"
echo "1. Go to https://vercel.com"
echo "2. Click 'New Project'"
echo "3. Import from GitHub: vubangsi/marveldigitalsolutions"
echo "4. Deploy with default settings"
echo ""
echo "🌐 Your site will be available at: https://marveldigitalsolutions.vercel.app"
echo ""
echo "🎉 Ready for deployment!"
