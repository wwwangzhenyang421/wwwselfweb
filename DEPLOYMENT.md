# 部署指南

本指南将帮助你将个人网站部署到 GitHub Pages 或其他平台。

## 方式一：部署到 GitHub Pages（推荐）

### 前置条件

- 已安装 Git
- 已安装 Node.js 和 yarn
- 拥有 GitHub 账号

### 步骤 1: 在 GitHub 上创建新仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 `+` 号，选择 `New repository`
3. 填写仓库信息：
   - **Repository name**: `wwwselfweb`（或你想要的名称）
   - **Description**: 个人作品集网站
   - **Visibility**: 选择 `Public`（GitHub Pages 免费版需要公开仓库）
   - **不要**勾选 "Initialize this repository with a README"
4. 点击 `Create repository`

### 步骤 2: 更改 Git Remote 地址

当前你的项目还连接到原来的仓库，需要改为你自己的仓库：

```bash
# 查看当前 remote
git remote -v

# 删除原来的 remote
git remote remove origin

# 添加你的新仓库地址（将 YOUR_USERNAME 替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/wwwselfweb.git

# 例如，如果是 wwwangzhenyang421，则：
# git remote add origin https://github.com/wwwangzhenyang421/wwwselfweb.git
```

### 步骤 3: 检查并更新 package.json 中的 homepage

打开 `package.json`，确认 `homepage` 字段正确：

```json
{
  "homepage": "https://wwwangzhenyang421.github.io/wwwselfweb"
}
```

**重要**: 将 `wwwangzhenyang421` 替换为你的 GitHub 用户名。

### 步骤 4: 提交所有更改

```bash
# 查看更改的文件
git status

# 添加所有更改的文件
git add .

# 提交更改
git commit -m "初始化个人作品集网站"

# 推送到 GitHub（首次推送）
git push -u origin main
```

如果遇到分支名问题（可能是 master），使用：
```bash
git branch -M main
git push -u origin main
```

### 步骤 5: 构建并部署

```bash
# 构建项目
yarn build

# 部署到 GitHub Pages
yarn deploy
```

部署成功后，你的网站将在以下地址可用：
- `https://YOUR_USERNAME.github.io/wwwselfweb`

**注意**: 首次部署可能需要几分钟时间才能访问。

### 步骤 6: 启用 GitHub Pages（如果需要）

1. 进入你的 GitHub 仓库页面
2. 点击 `Settings`（设置）
3. 在左侧菜单找到 `Pages`
4. 在 `Source` 下拉菜单中选择 `gh-pages` 分支
5. 点击 `Save`

### 步骤 7: 配置自动部署（可选）

每次更新后，只需运行：
```bash
git add .
git commit -m "更新内容描述"
git push
yarn build
yarn deploy
```

## 方式二：部署到 Vercel（推荐，更简单）

Vercel 提供了更简单的部署方式，并且可以自动部署：

### 步骤 1: 安装 Vercel CLI

```bash
npm install -g vercel
```

### 步骤 2: 部署

```bash
vercel
```

按照提示操作：
- 登录 Vercel 账号（如果没有，会引导你注册）
- 确认项目配置
- 部署完成

### 步骤 3: 连接 GitHub（自动部署）

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 `Add New Project`
3. 导入你的 GitHub 仓库
4. 配置项目（Vercel 会自动检测 React 项目）
5. 点击 `Deploy`

之后每次你推送代码到 GitHub，Vercel 会自动重新部署。

## 方式三：部署到 Netlify

### 步骤 1: 构建项目

```bash
yarn build
```

### 步骤 2: 部署

1. 访问 [Netlify](https://www.netlify.com)
2. 注册/登录账号
3. 点击 `Add new site` → `Deploy manually`
4. 将 `build` 文件夹拖拽到页面上
5. 等待部署完成

### 步骤 3: 连接 GitHub（自动部署）

1. 在 Netlify Dashboard 中，选择你的项目
2. 点击 `Site settings` → `Build & deploy`
3. 点击 `Link repository`
4. 选择你的 GitHub 仓库
5. 配置：
   - **Build command**: `yarn build`
   - **Publish directory**: `build`
6. 保存设置

## 常见问题

### 1. 部署后页面空白

- 检查 `package.json` 中的 `homepage` 字段是否正确
- 确保构建成功（`yarn build` 没有错误）
- 检查浏览器控制台是否有错误

### 2. 图片不显示

- 确保图片路径正确（相对于 `public` 文件夹）
- 检查图片文件名大小写是否匹配

### 3. GitHub Pages 404 错误

- 等待几分钟（首次部署需要时间）
- 检查仓库 Settings → Pages 中是否正确配置了 `gh-pages` 分支
- 确认 `homepage` 路径与仓库名匹配

### 4. 样式丢失

- 确保 `package.json` 中的 `homepage` 字段正确
- 检查 CSS 文件路径

## 更新网站内容

### 本地修改内容

1. 编辑 `src/portfolio.js` 更新个人信息
2. 编辑各个组件文件更新内容
3. 替换 `public/images/` 中的图片

### 提交并部署

```bash
# 添加更改
git add .

# 提交更改
git commit -m "更新网站内容"

# 推送到 GitHub
git push

# 构建并部署
yarn build
yarn deploy
```

## 推荐的工作流程

1. **开发**: 在本地修改代码，使用 `yarn start` 预览
2. **测试**: 确保所有功能正常
3. **提交**: 使用 Git 提交更改
4. **推送**: 推送到 GitHub
5. **部署**: 运行 `yarn build && yarn deploy`

或者使用 Vercel/Netlify 实现自动部署，只需要步骤 1-4。

## 联系支持

如果遇到问题，可以：
- 查看 GitHub Issues
- 查阅相关平台的文档
- 检查浏览器控制台的错误信息

