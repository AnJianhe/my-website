import { defineCollection } from "astro:content";
import { CAMERA_FOV_RANGE } from "@playcanvas/supersplat-viewer/settings";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postsCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),
		pinned: z.boolean().optional().default(false),
		author: z.string().optional().default(""),
		sourceLink: z.string().optional().default(""),
		licenseName: z.string().optional().default(""),
		licenseUrl: z.string().optional().default(""),
		comment: z.boolean().optional().default(true),
		password: z.string().optional().default(""),
		passwordHint: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

const specCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/spec" }),
	schema: z.object({}),
});

const dynamicCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/dynamic" }),
	schema: z.object({
		published: z.date(),
	}),
});

const sceneVector = z.tuple([z.number(), z.number(), z.number()]);
const scenesCollection = defineCollection({
	loader: glob({
		base: "./public/scenes",
		pattern: "*/scene.json",
		generateId: ({ entry }) => entry.split("/")[0],
	}),
	schema: z.object({
		title: z.string(),
		model: z.string(),
		gaussians: z.number().int().positive(),
		camera: z.object({
			position: sceneVector,
			target: sceneVector,
			fov: z.number().min(CAMERA_FOV_RANGE.min).max(CAMERA_FOV_RANGE.max),
		}),
	}),
});

export const collections = {
	scenes: scenesCollection,
	dynamic: dynamicCollection,
	posts: postsCollection,
	spec: specCollection,
};
