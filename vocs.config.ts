import { defineConfig } from "vocs";

export default defineConfig({
	title: "Change this to workshop title",
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
			text: "IIIF content to Explore",
			link: "/examples-of-iiif-to-explore",
		},
		{
			text: "Getting Started",
			link: "/getting-started",
		},
		{
			text: "Manifest Editor",
			link: "/manifest-editing",
		},
		{
			text: "Exhibition building",
			link: "/exhibition-building",
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
