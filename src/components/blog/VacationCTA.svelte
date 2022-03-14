<script>
	import VacationsIcon from '../icons/VacationsIcon.svelte';
</script>

<div class="relative">
	<div
		class="absolute pattern-dots-lg text-gray-200 top-0 left-0 w-32 h-48 md:h-72 transform -translate-y-12 -translate-x-16 -rotate-3"
	/>
	<div
		class="absolute pattern-dots-lg text-gray-200 bottom-0 right-0 w-32 h-48 md:h-72 transform translate-y-12 translate-x-16 rotate-3"
	/>
	<div
		class="absolute rounded-3xl top-0 right-0 w-20 h-20 bg-emerald-200 bg-opacity-50 -mt-3 -mr-10 transform -rotate-6"
	/>
	<div
		class="absolute rounded-3xl bottom-0 left-0 w-20 h-20 bg-yellow-200 bg-opacity-50 -mb-3 -ml-10 transform rotate-6"
	/>

	<div class="bg-white shadow overflow-hidden sm:rounded-md relative">
		<a href="#" class="block hover:bg-gray-50 no-underline">
			<div class="flex items-center px-4 sm:px-6">
				<div class="min-w-0 flex-1 flex items-center">
					<div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4 place-items-center">
						<div>
							<p class="flex items-center text-sm text-pblue-900">
								<!-- Heroicon name: solid/mail -->

								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="flex-shrink-0 mr-1.5 h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
										clip-rule="evenodd"
									/>
								</svg>
								Plan your Vacation with Trip Support
							</p>
						</div>
						<div class="flex">
							<div>
								<p class="flex items-center text-sm text-rose-600 truncate">
									<VacationsIcon />
									Book your vacation now, Pay later
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<!-- Heroicon name: solid/chevron-right -->
					<svg
						class="h-5 w-5 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</a>
	</div>
</div>
