module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite/**/*.js'],
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
    screens: {
      'xs': '370px',
      // => @media (min-width: 370px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    active: 'currentColor',
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
      dropShadow: {
        '3xl': '0 3px 3px rgba(0, 0, 0, 0.30)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
        pblue: {
          100: '#B7BECC',
          200: '#A0ABC0',
          300: '#8997B4',
          400: '#7284A8',
          500: '#5C729C',
          600: '#445D8F',
          700: '#2E4B84',
          800: '#173777',
          900: '#00246B',
        },
        pred: {
          100: '#E7BBBB',
          200: '#E8A7A7',
          300: '#E99292',
          400: '#EA7D7D',
          500: '#EC6969',
          600: '#EC5353',
          700: '#EE4040',
          800: '#EF2B2B',
          900: '#F01616',
        },
      },
      fontSize: {
			// 'xs': ['13px', '20px'],
      'xs': '0.75rem',
      'xz': '0.8rem',
			'sm': '.845rem',
      'tabBody': '0.865rem',
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
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin')
  ],
  daisyui: {
    styled: false,
    themes: true,
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
  },
}
