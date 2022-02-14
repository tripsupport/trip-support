<div>
	<div class="sm:hidden">
		<label for="tabs" class="sr-only">Select a tab</label>
		<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
		<select
			id="tabs"
			name="tabs"
			class="block w-full rounded-md border-gray-300 focus:border-slate-700 focus:ring-slate-700"
		>
			<option selected>Flight</option>

			<option>Vacations</option>

			<option>Hotels</option>

			<option>Things To Do</option>
		</select>
	</div>
	<div class="hidden sm:block">
		<div class="border-b border-gray-200">
			<nav class="-mb-px flex space-x-8" aria-label="Tabs">
				<!-- Current: "border-slate-700 text-indigo-600", Default: "border-transparent text-slate-900 hover:text-slate-900 hover:border-gray-300" -->
				<a
					href={'#'}
					class="group inline-flex items-center border-b-2 border-rose-600 py-4 px-1 font-medium text-rose-600 text-sm "
					data-target="panel-1"
				>
					<!--
            Heroicon name: solid/user

            Current: "text-slate-700", Default: "text-slate-500 group-hover:text-rose-600"
          -->
					<svg
						class="-ml-0.5 mr-2 h-5 w-5 text-rose-600"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
							clip-rule="evenodd"
						/>
					</svg>
					<span>Flights</span>
				</a>

				<a
					href={'#'}
					class="group inline-flex items-center border-b-2 border-transparent py-4 px-1 font-medium text-slate-900 text-sm hover:border-rose-600 hover:text-rose-600"
					data-target="panel-2"
				>
					<!-- Heroicon name: solid/office-building -->
					<svg
						class="-ml-0.5 mr-2 h-5 w-5 text-slate-500 group-hover:text-rose-600"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
							clip-rule="evenodd"
						/>
					</svg>
					<span>Vacations</span>
				</a>

				<a
					href={'#'}
					class="group inline-flex items-center border-b-2 border-transparent py-4 px-1 font-medium text-slate-900 text-sm hover:border-rose-600 hover:text-rose-600"
					aria-current="page"
					data-target="panel-3"
				>
					<!-- Heroicon name: solid/users -->
					<svg
						class="-ml-0.5 mr-2 h-5 w-5 text-slate-700 group-hover:text-rose-600"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
						/>
					</svg>
					<span>Hotels</span>
				</a>

				<a
					href={'#'}
					class="group inline-flex items-center border-b-2 border-transparent py-4 px-1 font-medium text-slate-900 text-sm hover:border-rose-600 hover:text-rose-600"
					data-target="panel-4"
				>
					<!-- Heroicon name: solid/credit-card -->
					<svg
						class="-ml-0.5 mr-2 h-5 w-5 text-slate-500 group-hover:text-rose-600"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
						<path
							fill-rule="evenodd"
							d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
							clip-rule="evenodd"
						/>
					</svg>
					<span>Hotels + Flight</span>
				</a>
			</nav>
		</div>
	</div>
</div>
