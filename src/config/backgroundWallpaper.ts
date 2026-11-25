import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "overlay",
	switchable: false,
	playerEnable: false,

	src: {
		desktop: ["https://dl.mycathe.com/img/bg-desk.webp"],
		mobile: ["https://dl.mycathe.com/img/bg-mobile.webp"],
	},

	common: {
		dimOpacity: 0.15,
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

	banner: {
		position: "center",
	},

	// overlay 模式：背景图铺满整页，卡片毛玻璃浮在上面
	overlay: {
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
		zIndex: -1,
		// 背景图几乎不透明，让图片看清楚
		opacity: 0.95,
		// 背景模糊降到最低（只做轻微柔化，方便文字阅读）
		blur: 1,
		// 卡片透明度，越小越透
		cardOpacity: 0.5,
	},

	fullscreen: {
		position: "center",
	},
};
