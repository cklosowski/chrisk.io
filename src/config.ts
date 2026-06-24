import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Chris Klosowski",
	subtitle: "On eCommerce, software, and running a software business",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 30, // Warm terracotta, matching the desert banner. 0-360: red 0, teal 200, cyan 250, pink 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "/images/banner.jpg", // In /public. Superstition Mountains, Mesa AZ.
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [LinkPreset.Home, LinkPreset.Archive, LinkPreset.About],
};

export const profileConfig: ProfileConfig = {
	avatar: "/images/avatar.jpg", // In /public.
	name: "Chris Klosowski",
	bio: "President of Easy Digital Downloads. 14+ years building software for people who sell digital products online. Here to talk shop on eCommerce and running a software business.",
	links: [
		{
			name: "X",
			icon: "fa6-brands:x-twitter", // Visit https://icones.js.org/ for icon codes
			url: "https://x.com/cklosowski",
		},
		{
			name: "LinkedIn",
			icon: "fa6-brands:linkedin",
			url: "https://www.linkedin.com/in/cklosowski/",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/cklosowski",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
