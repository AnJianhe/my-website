import type { CommentConfig } from "../types/commentConfig";

export const commentConfig: CommentConfig = {
	// 评论系统类型: none, twikoo, waline, giscus, disqus, artalk
	// 目前设为 none —— 留言板暂时没有评论后端，页面会提示未启用
	// 想开启的话，推荐用 giscus（GitHub Discussions，免费），见下方 giscus 配置
	type: "none",

	//twikoo评论系统配置
	twikoo: {
		envId: "",
		lang: "zh-CN",
		visitorCount: true,
		jsUrl: "https://registry.npmmirror.com/twikoo/1.7.12/files/dist/twikoo.min.js",
		cssUrl: "",
	},

	//waline评论系统配置
	waline: {
		// 需要自己部署 Waline 后端后填入地址
		serverURL: "",
		lang: "zh-CN",
		emoji: [
			"https://unpkg.com/@waline/emojis@1.4.0/weibo",
			"https://unpkg.com/@waline/emojis@1.4.0/bilibili",
		],
		login: "enable",
		visitorCount: true,
	},

	// artalk评论系统配置
	artalk: {
		server: "",
		locale: "zh-CN",
		visitorCount: true,
	},

	//giscus评论系统配置
	// 使用步骤：GitHub → 仓库 Settings → General → Features 勾选 Discussions
	// 然后访问 https://giscus.app/zh-CN 授权并复制 repoId / categoryId 填到下面
	giscus: {
		repo: "AnJianhe/my-website",
		repoId: "",
		category: "General",
		categoryId: "",
		mapping: "pathname",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "top",
		lang: "zh-CN",
		loading: "lazy",
	},

	//disqus评论系统配置
	disqus: {
		shortname: "",
	},
};
