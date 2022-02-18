<script>
	import ProfileDropdown from './ProfileDropdown.svelte';
</script>

<!-- Language selection -->
<div class="flex-shrink-0 hidden sm:flex">
	<a href="#" class="text-slate-900 hover:text-rose-600 flex items-center">
		<img
			src="https://tailwindui.com/img/flags/flag-canada.svg"
			alt=""
			class="w-5 h-auto block flex-shrink-0"
		/>
		<span class="ml-3 block text-tiny font-medium"> Francais </span>
		<span class="sr-only">, change language</span>
	</a>
</div>

<!-- Language selection -->
<div class="flex-shrink-0 ">
	<a href="#" class="text-slate-900 hover:text-rose-600 flex items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-auto mr-0"
			fill="currentColor"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="none"
				d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
			/>
		</svg>

		<span class="ml-3 block text-tiny font-medium"> Contact Us </span>
		<span class="sr-only">contact us</span>
	</a>
</div>
<span class="h-6 w-px bg-gray-200" aria-hidden="true" />
<div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
	<!-- currently hidden -->
	<button
		type="button"
		class="hidden bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
	>
		<span class="sr-only">User login</span>
		<!-- Heroicon name: user-circle -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	</button>
	<!-- Dropdown for Uer login -->
	<ProfileDropdown />
</div>
