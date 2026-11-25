import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式："banner" 横幅壁纸，"fullscreen" 全屏壁纸，"overlay" 全屏透明，"none" 纯色背景无壁纸
	mode: "banner",
	// 是否允许用户通过导航栏切换壁纸模式
	switchable: false,
	// 是否启用背景视频播放（已关闭）
	playerEnable: false,

	src: {
		// 桌面背景（远程 URL，不会被 Astro 处理，已提前压成 WebP）
		// 想换图：直接改地址，或把图片放进 src/assets/images/DesktopWallpaper/ 后写相对路径
		desktop: ["https://dl.mycathe.com/img/bg-desk.webp"],
		// 移动背景
		mobile: ["https://dl.mycathe.com/img/bg-mobile.webp"],
	},

	// 横幅壁纸和全屏壁纸共享配置
	common: {
		// 横幅文字遮罩暗度，0-1之间，值越大越暗
		dimOpacity: 0.2,
		// 多视频播放模式
		playerMode: "random",
		// 主页横幅文字
		homeText: {
			// 是否启用主页横幅文字
			enable: true,
			// 是否允许用户通过控制面板切换横幅标题显示
			switchable: true,
			// 主页横幅主标题
			title: "CatHe",
			// 主页横幅主标题字体大小
			titleSize: "3.8rem",
			// 主页横幅副标题
			subtitle: "记录生活与技术",
			// 网易云热评（需要 API 密钥，已关闭）
			neteaseComment: {
				enable: false,
				cacheHours: 24,
				maxLength: 88,
			},
			// 主页横幅副标题字体大小
			subtitleSize: "1.5rem",
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		// 导航栏配置
		navbar: {
			transparentMode: "semi",
			enableBlur: true,
			blur: 5,
		},
		// 水波纹动画效果配置
		waves: {
			enable: {
				desktop: true,
				mobile: false,
			},
			switchable: true,
		},
		// 渐变过渡效果配置
		gradient: {
			enable: {
				desktop: true,
				mobile: true,
			},
			height: "10%",
			switchable: true,
		},
		// 壁纸轮播配置，仅在配置多张图片时生效
		carousel: {
			enable: false,
			interval: 5000,
			transitionEffect: "zoom",
			switchable: true,
		},
	},

	// Banner模式特有配置
	banner: {
		position: "center",
	},

	// 全屏透明覆盖模式特有配置
	overlay: {
		switchable: {
			opacity: true,
			blur: true,
			cardOpacity: true,
		},
		zIndex: -1,
		opacity: 0.8,
		blur: 10,
		cardOpacity: 0.5,
	},

	// 全屏壁纸模式特有配置
	fullscreen: {
		position: "center",
	},
};
