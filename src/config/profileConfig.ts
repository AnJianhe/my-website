import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.svg"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间）
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "/assets/images/avatar.svg",

	// 名字
	name: "CatHe",

	// 个人签名
	bio: "记录生活与技术。",

	// 链接配置
	// 已预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问 https://icones.js.org/ 获取图标代码
	// 想隐藏某个链接，直接注释掉对应的一项即可
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/AnJianhe",
			showName: false,
		},
		{
			name: "邮箱",
			icon: "fa7-solid:envelope",
			url: "mailto:hi@mycathe.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
		// QQ —— 填上你的 QQ 邀请链接后取消注释即可显示
		// {
		// 	name: "QQ",
		// 	icon: "fa7-brands:qq",
		// 	url: "https://qm.qq.com/q/你的邀请码",
		// 	showName: false,
		// },
	],
};
