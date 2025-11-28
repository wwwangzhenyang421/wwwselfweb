# 快速部署步骤

## 第一步：在 GitHub 上创建仓库

1. 访问 https://github.com/new
2. 仓库名填写：`wwwselfweb`
3. 选择 **Public**（GitHub Pages 免费版需要公开仓库）
4. **不要**勾选任何初始化选项
5. 点击 "Create repository"

## 第二步：更改 Git Remote 地址

打开终端，在项目目录下执行：

```bash
# 删除原来的 remote
git remote remove origin

# 添加你的新仓库（将 YOUR_USERNAME 替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/wwwselfweb.git

# 例如，如果你的用户名是 wwwangzhenyang421：
git remote add origin https://github.com/wwwangzhenyang421/wwwselfweb.git
```

## 第三步：检查 package.json 中的 homepage

确保 `package.json` 中的 `homepage` 字段正确：

```json
"homepage": "https://YOUR_USERNAME.github.io/wwwselfweb"
```

你的 `package.json` 中已经设置为：
```json
"homepage": "https://wwwangzhenyang421.github.io/wwwselfweb"
```

如果用户名不对，需要修改。

## 第四步：提交并推送代码

```bash
# 查看更改的文件
git status

# 添加所有文件
git add .

# 提交更改
git commit -m "初始化个人作品集网站"

# 推送到 GitHub（首次推送）
git push -u origin main
```

**注意**：如果提示分支名不对（可能是 `master`），使用：
```bash
git branch -M main
git push -u origin main
```

## 第五步：构建并部署

```bash
# 构建项目
yarn build

# 部署到 GitHub Pages
yarn deploy
```

部署成功后，等待几分钟，然后访问：
**https://wwwangzhenyang421.github.io/wwwselfweb**

## 第六步：启用 GitHub Pages（如果需要）

1. 进入你的 GitHub 仓库页面
2. 点击 `Settings`（设置）
3. 在左侧菜单找到 `Pages`
4. 在 `Source` 下拉菜单中选择 `gh-pages` 分支
5. 点击 `Save`

## 之后更新网站

以后要更新网站内容，只需：

```bash
# 1. 修改代码后，提交更改
git add .
git commit -m "更新描述"
git push

# 2. 构建并部署
yarn build
yarn deploy
```

---

## 遇到问题？

查看 `DEPLOYMENT.md` 文件获取详细说明和常见问题解决方案。

