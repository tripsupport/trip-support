module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg',
    'bg-opacity-50',
    'dark:bg-opacity-80'
  ],
  theme: {
    interFontFeatures: {
			default: ['calt', 'liga', 'kern'],
			numeric: ['tnum', 'salt', 'ss02']
		},
		fontFamily: {
			sans: ['Inter var', 'system-ui', 'ui-sans-serif'],
			serif: ['Inter var', 'system-ui', 'ui-sans-serif'],
			display: ['Inter var', 'system-ui', 'ui-sans-serif'],
			body: ['Inter var', 'system-ui', 'ui-sans-serif']
		},
    extend: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      'body': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      fontSize: {
			// 'xs': ['13px', '20px'],
      'xs': '0.75rem',
      'xz': '0.8rem',
			'sm': '.845rem',
			'tiny': '.895rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '3.5rem',
			'7xl': '5rem'
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.15em',
        widest: '.25em',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin')
  ],
}
