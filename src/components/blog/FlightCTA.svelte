<script>
	import FlightsIcon from '../icons/FlightsIcon.svelte';
</script>

<div class="relative">
	<div
		class="hidden sm:flex absolute rounded-3xl top-0 right-0 w-20 h-20 bg-emerald-200 bg-opacity-50 -mt-3 -mr-10 transform -rotate-6"
	/>
	<div
		class="absolute rounded-3xl bottom-0 left-0 w-20 h-20 bg-blue-200 bg-opacity-50 -mb-3 -ml-10 transform rotate-6"
	/>

	<div class="bg-white shadow overflow-hidden sm:rounded-md relative">
		<a href="#" class="block hover:bg-gray-50 no-underline">
			<div class="flex items-center px-4 sm:px-6">
				<div class="min-w-0 flex-1 flex items-center">
					<div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-1 md:gap-4 place-items-center">
						<div class="flex">
							<div>
								<p class="flex items-center font-bold text-sm text-pblue-900 truncate">
									<FlightsIcon />
									Get the best flight deals at Trip Support, Book Now, Pay Later!
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
