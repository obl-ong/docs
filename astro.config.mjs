import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Obl.ong Docs',
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
				replacesTitle: true
			},
			favicon: "/favicon.png",
			editLink: {
				baseUrl: 'https://github.com/obl-ong/docs/edit/main/',
			},
			social: {
				github: 'https://github.com/obl-ong',
				mastodon: 'https://social.dino.icu/@oblong',
				email: "mailto://team@obl.ong"
			},
			sidebar: [
				{
					label: "Home",
					link: "/"
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Connections',
					autogenerate: { directory: 'connections' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
