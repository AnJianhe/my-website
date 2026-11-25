import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		// 添加相册的步骤：
		// 1. 在 public/gallery/ 下新建一个目录，例如 public/gallery/2026-trip/
		// 2. 把照片（jpg/png/webp/avif/gif）放进去，可放一张 cover.* 作为封面
		// 3. 在下面加一项配置，id 和目录名一致
		//
		// {
		// 	id: "2026-trip",
		// 	name: "2026 旅行",
		// 	description: "随手拍的一些风景",
		// 	location: "浙江",
		// 	date: "2026-11-25",
		// 	tags: ["风景"],
		// },
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	columnWidth: 240,
};
