// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	future: {
		compatibilityVersion: 4,
	},
	devtools: { enabled: false },
	experimental: {
		scanPageMeta: 'after-resolve',
		sharedPrerenderData: false,
		compileTemplate: true,
		resetAsyncDataToUndefined: true,
		templateUtils: true,
		relativeWatchPaths: true,
		normalizeComponentNames: false,
		spaLoadingTemplateLocation: 'within',
		parseErrorData: false,
		pendingWhenIdle: true,
		payloadExtraction: false,
		alwaysRunFetchOnKeyChange: true,
		defaults: {
			useAsyncData: {
				deep: true,
			},
		},
	},
	features: {
		inlineStyles: true,
	},
	unhead: {
		renderSSRHeadOptions: {
			omitLineBreaks: false,
		},
	},
	googleFonts: {
		families: {
			Montserrat: true,
		},
	},
	image: {
		domains: ['https://cdn.dummyjson.com'],
	},
	modules: [
		'@nuxt/eslint',
		'@nuxtjs/google-fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
		'@vite-pwa/nuxt',
	],
	pwa: {
		manifest: {
			name: 'DishLicious',
			short_name: 'DishLicious',
			description: 'A recipe app to explore and share delicious recipes.',
			theme_color: '#ffffff',
			icons: [
				{
					src: 'pwa-192x192.png',
					sizes: '192x192',
					type: 'image/png',
					purpose: 'any maskable',
				},
				{
					src: 'icon-green.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any maskable',
				},
			],
		},
		devOptions: {
			enabled: true,
			type: 'module',
			navigateFallback: '/index.html',
		},
	},
});
