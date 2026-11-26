/**
 * 边缘重定向：把根路径用真正的 301 跳走。
 *
 * 背景：主页（src/pages/index.astro）在关闭「动态」页时会调用 Astro.redirect，
 * 但静态构建发不出 HTTP 301，只能生成一个「2 秒后 meta 刷新」的空白页。
 * 这里在 Worker 层直接返回 301，浏览器立刻跳转，不再白屏。
 */
export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		if (url.pathname === "/") {
			return Response.redirect(url.origin + "/blog/", 301);
		}

		return env.ASSETS.fetch(request);
	},
};
