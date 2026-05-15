# 游戏展示网站

基于 GitHub Pages 的游戏展示与隐私政策页面。

## 结构

```
├── index.html          # 游戏主页
├── privacy.html        # 隐私政策页
├── assets/
│   ├── css/style.css   # 样式
│   └── js/main.js      # 脚本
└── README.md
```

## 部署（GitHub Pages）

1. 在 GitHub 创建仓库
2. 推送代码：
   ```bash
   git init
   git add .
   git commit -m "初始化游戏展示网站"
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```
3. 仓库 Settings → Pages → Source 选 "Deploy from a branch" → 选 `main` 分支 → `/ (root)` → Save
4. 等待 1-2 分钟，访问 `https://你的用户名.github.io/仓库名/`
