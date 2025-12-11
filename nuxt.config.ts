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
	colorMode: {
		classSuffix: ''
	},
	tailwindcss: {
		config: {

			plugins: [require('@tailwindcss/typography')],
		},
	},
	compatibilityDate: '2025-05-05'
})
