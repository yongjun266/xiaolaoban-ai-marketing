# 小老板 AI 营销助手

一个面向中小商家的 AI 营销文案生成 Web 应用。

用户只需填写商品名称、商品特色和卖点，即可生成商品标题、商品介绍、营销文案和客服回复。

## 当前版本：V1（MVP）

V1 只验证 AI 文案生成能力，是一个无需登录即可体验的工具。

当前版本计划包含：

- 首页（Landing Page）
- AI 工作台
- 商品信息输入
- AI 商品标题生成
- AI 商品介绍生成
- AI 营销文案生成
- AI 客服回复生成
- 一键复制
- 加载状态和错误提示
- 桌面端与手机端响应式页面
- OpenAI API 接入
- Vercel 部署

V1 不使用 Supabase 和数据库，也不提供登录、历史记录或收藏功能。

## 未来版本

V2 将增加：

- 用户登录（Supabase Auth）
- 历史记录
- 收藏和重新生成
- Supabase 数据库存储
- 用户配置

V3 将继续扩展 AI 图片生成、模板管理、多模型、Prompt 模板库、Token 统计和会员系统。

## 技术栈

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Next.js Route Handlers
- OpenAI API
- Zod
- Vercel

Supabase PostgreSQL 和 Supabase Auth 从 V2 开始使用。

## 本地运行

安装依赖：

```bash
pnpm install
```

启动开发服务器：

```bash
pnpm dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000)。

## 项目文档

- 产品需求：`docs/PRD.md`
- 页面设计：`docs/DESIGN.md`
- 开发路线图：`docs/ROADMAP.md`
- 技术选型：`docs/TECH_STACK.md`

`docs/PRD.md` 是本项目唯一且最高优先级的产品需求依据。如果其他文档与 PRD 冲突，以 PRD 为准。
