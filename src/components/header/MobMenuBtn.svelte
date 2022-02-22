<!-- Mobile menu button -->
<button
	type="button"
	class="inline-flex items-center justify-center ml-2 text-slate-700 hover:text-slate-900 "
	aria-controls="mobile-menu"
	aria-expanded="false"
	data-collapse-toggle="mobile-menu"
>
	<span class="sr-only">Open main menu</span>
	<!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
	<svg
		class="block h-6 w-6"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M4 6h16M4 12h16M4 18h16"
		/>
	</svg>
	<!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
	<svg
		class="hidden h-6 w-6"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
</button>
