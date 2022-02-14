<script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>

<!-- Main Nav navigation -->
<!-- removed from class bg-opacity-90 backdrop-filter backdrop-blur-xl -->
<nav aria-label="Top" class="relative z-20 bg-white shadow">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
		<div class="h-16 flex items-center">
			<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
			<button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden">
				<span class="sr-only">Open menu</span>
				<!-- Heroicon name: outline/menu -->
				<svg
					class="h-6 w-6"
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
			</button>

			<!-- Logo -->
			<div class="ml-4 flex lg:ml-0">
				<a href="/">
					<span class="sr-only">Trip Support</span>
					<img class="block h-10 w-auto" src="./logos/logo-main.svg" alt="Trip Support" />
				</a>
			</div>

			<!-- Flyout menus -->
			<div class="hidden lg:ml-8 lg:block lg:self-stretch">
				<div class="h-full flex space-x-8">
					<a href="#" class="flex items-center text-tiny font-semibold text-rose-600 ">Flight</a>

					<a
						href="#"
						class="flex items-center text-tiny font-medium text-slate-900 hover:text-rose-600"
						>Vacations</a
					>
					<a
						href="#"
						class="flex items-center text-tiny font-medium text-slate-900 hover:text-rose-600"
						>Hotels</a
					>
					<div class="flex">
						<div class="relative flex">
							<!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
							<button
								type="button"
								class="text-slate-900 group bg-white rounded-md inline-flex items-center text-tiny font-medium hover:text-rose-600 focus:outline-none"
								aria-expanded="false"
								data-dropdown-toggle="dropdown"
							>
								<span>More</span>
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
							</button>
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
					</div>
				</div>
			</div>

			<div class="ml-auto flex items-center">
				<div class="hidden lg:mr-8 lg:flex">
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
				<div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 mr-4">
					<button
						type="button"
						class="inline-flex items-center px-4 py-2 border border-slate-400 shadow-sm text-tiny rounded text-slate-900 bg-white hover:bg-gray-50 focus:outline-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ml-0.5 mr-2 h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
							/>
						</svg>
						<span class="block text-sm font-medium"> Call Support </span>
					</button>

					<!-- <span class="h-6 w-px bg-gray-200" aria-hidden="true" />
					<a href="#" class="text-tiny font-medium text-slate-900 hover:text-rose-600"
						>Create account</a
					> -->
				</div>

				<span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

				<!-- User -->
				<div class="flex">
					<a href="#" class="p-2 text-slate-900 hover:text-rose-900">
						<span class="sr-only">User</span>
						<!-- Heroicon name: outline/search -->
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
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>
