// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: true },

 modules: [
					'@nuxtjs/tailwindcss',
					'@nuxtjs/color-mode'
	],

 colorMode: {
					classSuffix: ''
	},

 compatibilityDate: '2025-05-05'
})