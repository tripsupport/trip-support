<script>
	import OutClick from 'svelte-outclick';

	import { Icon, SwitchHorizontal } from 'svelte-hero-icons';
	import SearchFlights from '../booking/SearchFlights.svelte';
	import { writable } from 'svelte/store';

	function useToggle(initialState) {
		const { subscribe, update } = writable(initialState);
		return {
			subscribe,
			toggle: () => update((x) => !x)
		};
	}

	const searchFrom = useToggle(false);
	const searchTo = useToggle(false);
	const calendarFrom = useToggle(false);
	const calendarTo = useToggle(false);
</script>

<div class="my-6">
	<div class="grid grid-cols-12 lg:gird-cols-12 gap-4 items-center">
		<div class="col-span-12 lg:col-span-8">
			<div class="grid grid-cols-12 items-center gap-6 py-2 md:py-1 relative">
				<div class="col-span-12 md:col-span-6">
					<div
						class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"
					>
						<label
							for="name"
							class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"
							>Leaving from?</label
						>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 text-pblue-800 mt-[5px]"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								clip-rule="evenodd"
							/>
						</svg>

						<input
							type="text"
							autocomplete="off"
							name="name"
							class="block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"
							placeholder=""
							on:click={searchFrom.toggle}
						/>
					</div>

					{#if $searchFrom}
						<OutClick on:outclick={searchFrom.toggle}>
							<SearchFlights />
						</OutClick>
					{/if}
				</div>

				<div
					class="z-20 hidden md:block absolute top-[45%] left-[49.97%] transform -translate-x-1/2 -translate-y-3 "
				>
					<Icon
						src={SwitchHorizontal}
						class="bg-white h-8 text-pblue-900 w-8 border rounded-full p-[5px] border-pblue-500"
					/>
				</div>

				<div
					class="z-30 md:hidden absolute top-[47.3%] left-[94%] transform -translate-x-1/2 -translate-y-3"
				>
					<Icon
						src={SwitchHorizontal}
						class="bg-white h-8 text-pblue-900 w-8 rotate-90 border rounded-full p-[5px] border-pblue-500"
					/>
				</div>

				<div class="col-span-12 md:col-span-6">
					<div
						class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"
					>
						<label
							for="name"
							class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"
							>Going to?</label
						>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 text-pblue-800 mt-[5px]"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
								clip-rule="evenodd"
							/>
						</svg>

						<input
							type="text"
							name="name"
							class="block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"
							placeholder=""
							autocomplete="off"
							on:click={searchTo.toggle}
						/>
					</div>
					{#if $searchTo}
						<OutClick on:outclick={searchTo.toggle}>
							<SearchFlights />
						</OutClick>
					{/if}
				</div>
			</div>
		</div>
		<!-- Departure and return -->
		<div class="col-span-12 lg:col-span-4">
			<div date-rangepicker="" datepicker-orientation="bottom" class="flex items-center">
				<div
					class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 "
				>
					<label
						for="name"
						class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"
						>Departure / Return</label
					>

					<div class="flex items-center">
						<div class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 text-pblue-800"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clip-rule="evenodd"
								/>
							</svg>
							<input
								type="text"
								name="name"
								id="name"
								class="block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"
								placeholder=""
								autocomplete="off"
							/>
						</div>

						<div class="flex place-self-center items-center">
							<span class="mx-2 h-6 w-px bg-pblue-400 " aria-hidden="true" />
						</div>

						<div class=" place-self-start">
							<div class="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 text-pblue-800"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clip-rule="evenodd"
									/>
								</svg>
								<input
									type="text"
									name="name"
									id="name"
									class="block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"
									placeholder=""
									autocomplete="off"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
