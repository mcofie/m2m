// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    colorMode: {
        preference: 'light'
    },
    css: ['~/assets/css/main.css'],
    modules: [['@nuxtjs/google-fonts', {
        families: {
            'Finger Paint': true,
            'Work+Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900],
        }
    }], "@nuxt/ui",]
})
