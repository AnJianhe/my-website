import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式："banner" 横幅壁纸，"fullscreen" 全屏壁纸，"overlay" 全屏透明，"none" 纯色背景无壁纸
	mode: "banner",
	// 是否允许用户通过导航栏切换壁纸模式
	// 关闭可避免切换时的过渡错乱，推荐只保留 banner 模式
	switchable: false,
	// 是否启用背景视频播放（已关闭）
	playerEnable: false,

	src: {
		// 桌面背景图片（支持单张或多张随机）
		// 想换成自己的图：把图片放进 src/assets/images/DesktopWallpaper/，再把文件名写进来
		// 想用随机图 API：desktop: "https://t.alcy.cc/pc"
		desktop: [
			"assets/images/DesktopWallpaper/wallpaper.avif",
			"assets/images/DesktopWallpaper/wallpaper2.avif",
		],
		// 移动背景图片（支持单张或多张随机）
		mobile: [
			"assets/images/MobileWallpaper/mwallpaper.avif",
			"assets/images/MobileWallpaper/mwallpaper2.avif",
		],
		// 背景视频已移除（原先指向外部地址，已停用）
		// playerUrl: [""],
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
				// 打字机效果
				enable: true,
				// 打字速度（毫秒）
				speed: 100,
				// 删除速度（毫秒）
				deleteSpeed: 50,
				// 完全显示后的暂停时间（毫秒）
				pauseTime: 2000,
			},
		},
		// 导航栏配置
		navbar: {
			// 导航栏透明模式："semi" 半透明，"full" 完全透明，"semifull" 动态透明
			transparentMode: "semi",
			// 是否开启毛玻璃模糊效果
			enableBlur: true,
			// 毛玻璃模糊度
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
		position: "0% 20%",
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
