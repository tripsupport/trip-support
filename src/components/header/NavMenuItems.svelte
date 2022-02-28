<!-- Nav menu items -->
<div class="hidden md:ml-6 lg:flex md:space-x-8">
	<a
		href="flights"
		class="text-tiny font-semibold text-rose-600 inline-flex items-center px-1 pt-1 sm:ml-4"
	>
		Flights
	</a>
	<a
		href="vacations"
		class=" inline-flex items-center px-1 pt-1 text-tiny font-medium text-slate-900 hover:text-rose-600"
	>
		Vacations
	</a>
	<a
		href="hotels"
		class="inline-flex items-center px-1 pt-1 text-tiny font-medium text-slate-900 hover:text-rose-600"
	>
		Hotels
	</a>
	<div class="dropdown">
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label
			tabindex="0"
			class="inline-flex items-center px-1 pt-1 text-tiny font-medium text-slate-900 hover:text-rose-600"
			>More <svg
				class="text-slate-600 h-5 w-5 "
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			></label
		>
		<ul
			tabindex="0"
			class="shadow menu dropdown-content bg-white text-slate-900 rounded-lg w-52 mt-3 px-4 py-4"
		>
			<li>
				<a
					href="javascript:void(0)"
					class="  text-slate-900 hover:text-rose-600 text-tiny font-medium pb-2"
				>
					Flight + Hotel
				</a>
			</li>
			<li>
				<a
					href="javascript:void(0)"
					class="  text-slate-900 hover:text-rose-600 text-tiny font-medium py-2"
				>
					Things to do
				</a>
			</li>
			<li>
				<a
					href="javascript:void(0)"
					class="  text-slate-900 hover:text-rose-600 text-tiny font-medium py-2"
				>
					Explore
				</a>
			</li>
			<li>
				<a
					href="javascript:void(0)"
					class=" text-gray-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none pointer-events-none text-tiny pt-2"
				>
					Cruises
				</a>
			</li>
		</ul>
	</div>
</div>
