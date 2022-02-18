<!-- Nav menu items -->
<div class="hidden md:ml-6 md:flex md:space-x-8">
	<a
		href="#"
		class="text-tiny font-semibold text-rose-600 inline-flex items-center px-1 pt-1 sm:ml-4"
	>
		Flights
	</a>
	<a
		href="#"
		class=" inline-flex items-center px-1 pt-1 text-tiny font-medium text-slate-900 hover:text-rose-600"
	>
		Vacations
	</a>
	<a
		href="#"
		class="inline-flex items-center px-1 pt-1 text-tiny font-medium text-slate-900 hover:text-rose-600"
	>
		Hotels
	</a>
	<a
		href="#"
		class="inline-flex items-center px-1 pt-1 text-tiny font-medium text-slate-900 hover:text-rose-600"
	>
		More
		<!--
                Heroicon name: solid/chevron-down

                Item active: "text-gray-600", Item inactive: "text-gray-400"
              -->
		<svg
			class="text-slate-600 h-5 w-5 group-hover:text-rose-600"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
		>
			<path
				fill-rule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</a>
	<!-- Dropdown menu -->
	<div class="relative sm:hidden">
		<!--
    Flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 translate-y-1"
  -->
		<div
			class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen sm:w-60 max-w-md sm:px-0"
		>
			<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
				<div class="relative grid gap-6 bg-white px-2 py-4 sm:gap-5 sm:p-8">
					<a
						href="#"
						class="-m-3 p-3 flex items-start  text-slate-900 hover:text-rose-600 text-tiny"
					>
						Flight + Hotel
					</a>

					<a
						href="#"
						class="-m-3 p-3 flex items-start  text-slate-900 hover:text-rose-600 text-tiny"
					>
						Things to do
					</a>

					<a
						href="#"
						class="-m-3 p-3 flex items-start  text-slate-900 hover:text-rose-600 text-tiny"
					>
						Explore
					</a>
					<a
						href="#"
						class="-m-3 p-3 flex items-start text-gray-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none pointer-events-none text-tiny"
					>
						Cruises
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Dropdown menu -->
	<div
		class="hidden bg-white text-tiny z-50 list-none divide-y divide-gray-100 rounded shadow w-40"
		id="dropdown"
	>
		<ul class="py-1" aria-labelledby="dropdown">
			<li>
				<a
					href="#"
					class="text-sm font-medium hover:bg-gray-100 hover:text-rose-600 text-slate-900 block px-4 py-2"
					><span>Flight + Hotel</span></a
				>
			</li>
			<li>
				<a
					href="#"
					class="text-sm font-medium hover:bg-gray-100 hover:text-rose-600 text-slate-900 block px-4 py-2"
					>Explore</a
				>
			</li>
		</ul>
		<div class="px-4 py-3">
			<span class="block text-sm text-slate-400">Cruises</span>
		</div>
	</div>
</div>
