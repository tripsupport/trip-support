// import adapter from '@sveltejs/adapter-static';

// export default {
// 	kit: {
// 		adapter: adapter({
// 			// default options are shown
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: null,
// 			precompress: false
// 		})
// 	}
// };

import vercel from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel()
	}
};

export default config;


