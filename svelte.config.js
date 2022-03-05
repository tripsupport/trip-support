// import adapter from '@sveltejs/adapter-static';
import vercel from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: vercel({
			// default options are shown
			// pages: 'build',
			// assets: 'build',
			// fallback: null,
			// precompress: false
		})
	}
};
// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: vercel()
// 	}
// };

// export default config;
