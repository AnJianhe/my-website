import type { SiteConfig } from "@/types/siteConfig";

// 定义站点语言
// 语言代码，例如：'zh_CN', 'zh_TW', 'en', 'ja', 'ru'。
const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	// 站点标题
	title: "CatHe",

	// 站点副标题
	subtitle: "个人博客",

	// 站点 URL
	site_url: "https://mycathe.com",

	// 站点描述
	description: "CatHe 的个人博客，记录生活与技术。",

	// 站点关键词
	keywords: ["CatHe", "博客", "技术博客", "随笔", "生活", "静态博客"],

	// 主题色
	themeColor: {
		// 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345
		hue: 210,
		// 是否对访问者隐藏主题色选择器
		fixed: false,
		// 默认模式："light" 亮色，"dark" 暗色，"system" 跟随系统
		defaultMode: "dark",
	},

	// 页面整体宽度（单位：rem）
	pageWidth: 100,

	// 网站Card样式配置
	card: {
		border: true,
		followTheme: false,
	},

	// Favicon 配置
	favicon: [
		{
			src: "/favicon/favicon.ico",
		},
	],

	// 导航栏配置
	navbar: {
		// 导航栏Logo
		logo: {
			type: "image",
			value: "/assets/images/avatar.svg",
			alt: "CatHe Logo",
		},
		// 导航栏标题，空字符串仅显示 Logo
		title: "",
		widthFull: false,
		menuAlign: "center",
		followTheme: false,
		stickyNavbar: true,
	},

	// 站点开始日期，用于统计运行天数
	siteStartDate: "2026-11-25",

	// 站点时区（IANA 时区字符串）
	timezone: "Asia/Shanghai",

	// 页面开关配置 - 控制特定页面的访问权限，设为false会返回404并自动隐藏对应的导航栏菜单项
	pages: {
		// 友链页面开关
		friends: false,
		// 打赏页面开关
		sponsor: false,
		// 留言板页面开关，需要配置评论系统
		guestbook: true,
		// 番组计划页面开关
		bangumi: false,
		// 相册页面开关
		gallery: true,
		// 追番页面开关
		anime: false,
		// 动态页面开关
		dynamic: false,
	},

	// 分类导航栏开关，在首页和归档页顶部显示分类快捷导航
	categoryBar: true,

	// 归档页是否折叠非最新年份文章，禁用后默认展开全部年份
	foldArticle: true,

	// 文章列表布局配置
	postListLayout: {
		defaultMode: "list",
		mobileDefaultMode: "list",
		showTags: true,
		descriptionLines: 2,
		allowSwitch: true,
		grid: {
			masonry: false,
			columnWidth: 320,
		},
	},

	// 文章内容页配置
	post: {
		rehypeCallouts: {
			theme: "github",
			enablePythonMarkdownAdmonitions: false,
		},
		showLastModified: true,
		outdatedThreshold: 30,
		sharePoster: true,
		// OpenGraph图片功能，开启后构建时间明显变长
		generateOgImages: false,
	},

	// bangumi配置（页面已关闭，保留空配置）
	bangumi: {
		userId: "",
		mode: "dynamic",
		apiUrl: "https://bgmapi.anibt.net",
		subjectBaseUrl: "https://bgmmi.anibt.net/subject/",
		categoryOrder: ["anime", "book", "music", "game"],
	},

	// 追番配置（页面已关闭，保留空配置）
	anime: {
		bilibili: {
			uid: "",
		},
	},

	// 分页配置
	pagination: {
		postsPerPage: 10,
	},

	// 图像优化及响应式配置
	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: ["*.hdslb.com", "*.bilibili.com"],
	},

	// 站点语言，在本配置文件顶部SITE_LANG定义
	lang: SITE_LANG,
};
