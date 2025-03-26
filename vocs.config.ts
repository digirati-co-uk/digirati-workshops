import { defineConfig } from "vocs";

export default defineConfig({
	title: "Digital Exhibition Building with IIIF",
	theme: {
		accentColor: {
			textAccent: { light: "#D75281", dark: "white" },
			backgroundAccent: { light: "#D75281", dark: "#D75281" },
			backgroundAccentHover: { light: "#D75281", dark: "#D75281" },
			backgroundAccentText: { light: "white", dark: "white" },
			borderAccent: { light: "#D75281", dark: "#D75281" },
			textAccentHover: { light: "#D75281", dark: "#D75281" },
		},
	},
	sidebar: [
		{
			text: "What you need for the workshop",
			link: "/what-you-will-need",
		},
		{
			text: "Getting Started",
			link: "/getting-started",
		},
		{
			text: "IIIF content to explore",
			link: "/examples-of-iiif-to-explore",
		},
		{
			text: "Manifest Editor overview",
			link: "/manifest-editing",
		},
		{
			text: "Manifest creation",
			link: "/creating-manifests",
		},
		{
			text: "Exhibition building",
			link: "/exhibition-building",
		},
		{
			text: "IIIF enabled images",
			link: "/iiif-enabled-images",
		},
		{
			text: "Manifest Editor Guide",
			collapsed: false,
			items: [
				{
					link: "/me/getting-started",
					text: "Getting started",
				},
				{
					link: "/me/adding-resources",
					text: "Adding resources",
				},
			],
		},
	],
});
