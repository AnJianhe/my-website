import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式："banner" 顶部横幅，"fullscreen" 全屏壁纸，"overlay" 全屏透明（图在卡片下面），"none" 纯色
	// overlay：背景图铺满整页，内容卡片半透明浮在上面，形成毛玻璃效果
	mode: "overlay",
	// 不允许访客自行切换模式，避免切换时过渡错乱
	switchable: false,
	playerEnable: false,

	src: {
		// 桌面背景（远程 URL，已提前压成 WebP）
		desktop: ["https://dl.mycathe.com/img/bg-desk.webp"],
		// 移动背景
		mobile: ["https://dl.mycathe.com/img/bg-mobile.webp"],
	},

	common: {
		dimOpacity: 0.2,
		playerMode: "random",
		homeText: {
			enable: true,
			switchable: true,
			title: "CatHe",
			titleSize: "3.8rem",
			subtitle: "记录生活与技术",
			neteaseComment: {
				enable: false,
				cacheHours: 24,
				maxLength: 88,
			},
			subtitleSize: "1.5rem",
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		navbar: {
			transparentMode: "semi",
			enableBlur: true,
			blur: 5,
		},
		waves: {
			enable: {
				desktop: true,
				mobile: false,
			},
			switchable: true,
		},
		gradient: {
			enable: {
				desktop: true,
				mobile: true,
			},
			height: "10%",
			switchable: true,
		},
		carousel: {
			enable: false,
			interval: 5000,
			transitionEffect: "zoom",
			switchable: true,
		},
	},

	// banner 模式配置（当前未使用）
	banner: {
		position: "center",
	},

	// overlay 模式：背景图铺满，卡片半透明浮在上面
	overlay: {
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
		zIndex: -1,
		// 背景图不透明度，略降让文字更清楚
		opacity: 0.85,
		// 背景模糊程度
		blur: 6,
		// 卡片透明度，越小越透（越能看见背景）
		cardOpacity: 0.55,
	},

	fullscreen: {
		position: "center",
	},
};
