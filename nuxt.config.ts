// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
		'@nuxt/content'
	],
	content: {
		highlight: {
			theme: {
				default: 'min-light',
				dark: 'min-dark'
			}
		}
	},
	app: {
		pageTransition: { name: 'page', mode: 'out-in' }
	},
	colorMode: {
		classSuffix: ''
	},
	tailwindcss: {
		config: {

			plugins: [require('@tailwindcss/typography')],
		},
	},
	nitro: {
		prerender: {
			routes: ['/sitemap.xml']
		}
	},
	compatibilityDate: '2025-05-05'
})
