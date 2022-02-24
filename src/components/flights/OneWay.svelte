<script>
	import { Icon, SwitchHorizontal } from 'svelte-hero-icons';
	import Seating from './Seating.svelte';
	import TravellersMenu from './TravellersMenu.svelte';
	import TravellerCount from './TravellerCount.svelte';
	let activeSubTab = 'roundTrip';
</script>

<div class="grid grid-cols-12">
	<div class="col-span-8 flex gap-x-4">
		<div class="col-span-2 lg:col-span-1">
			<!-- Simple Button (extra small) -->
			<button
				on:click={() => (activeSubTab = 'roundTrip')}
				type="button"
				class="inline-flex justify-center items-center space-x-2 rounded-full border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm focus:ring focus:ring-gray-500 focus:ring-opacity-25 
              {activeSubTab === 'roundTrip'
					? 'text-white bg-pblue-900 border-white shadow-none'
					: 'bg-white text-pblue-900'}
              "
			>
				Roundtrip
			</button>
			<!-- END Simple Button (extra small) -->
		</div>
		<div class="col-span-2 lg:col-span-1 lg:gap-4">
			<!-- Simple Button (small) -->
			<!-- Simple Button (extra small) -->
			<button
				on:click={() => (activeSubTab = 'oneWay')}
				type="button"
				class="inline-flex justify-center items-center space-x-2 rounded-full border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm focus:ring focus:ring-gray-500 focus:ring-opacity-25 
              {activeSubTab === 'oneWay'
					? 'text-white bg-pblue-900 border-white shadow-none'
					: 'bg-white text-pblue-900'}
              "
			>
				One-way
			</button>
			<!-- END Simple Button (small) -->
		</div>
		<div class="col-span-2 lg:col-span-1 lg:gap-4">
			<!-- Simple Button (extra small) -->
			<button
				on:click={() => (activeSubTab = 'multiCity')}
				type="button"
				class="inline-flex justify-center items-center space-x-2 rounded-full border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm focus:ring focus:ring-gray-500 focus:ring-opacity-25 
              {activeSubTab === 'multiCity'
					? 'text-white bg-pblue-900 border-white shadow-none'
					: 'bg-white text-pblue-900'}
              "
			>
				Multi-city
			</button>
			<!-- END Simple Button (small) -->
		</div>
	</div>
	<div class="col-span-12 md:col-span-4 mt-6 md:mt-0 flex gap-x-2 sm:gap-x-6">
		<div class="hidden ml-3 md:block col-span-2 lg:col-span-1">
			<TravellerCount />
		</div>
		<!-- Mobile Modal -->
		<div class="md:hidden col-span-2 lg:col-span-1">
			<!-- Travellers Section -->
			<TravellersMenu />
		</div>
		<div class="col-span-2 lg:col-span-1 mr-2">
			<Seating />
		</div>
	</div>

	<!-- Travellers -->
</div>
<!-- BEGIN Flights Sub Tabs -->
<!-- Roundtrip Tab -->
{#if activeSubTab === 'roundTrip'}
	<div class="mt-8 mb-4">
		<div class="grid grid-cols-12 lg:gird-cols-12 gap-4">
			<div class="col-span-12 lg:col-span-8">
				<div class="grid grid-cols-12">
					<div class="col-span-5">
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
								name="name"
								id="name"
								class="block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 sm:text-sm "
								placeholder="YYZ-Toronto Lester B. Pearson Intl, Canada"
							/>
						</div>
					</div>

					<div class="col-span-1 my-auto mx-auto">
						<Icon src={SwitchHorizontal} class="h-6 text-pblue-900 w-6" />
					</div>

					<div class="col-span-5">
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
								id="name"
								class="block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 sm:text-sm "
								placeholder="YYZ-Toronto Lester B. Pearson Intl, Canada"
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- Departure and return -->
			<div class="col-span-12 md:col-span-4 lg:col-span-4">
				<div
					class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 flex items-center"
				>
					<label
						for="name"
						class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"
						>Departure / Return</label
					>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-7 h-6 text-pblue-800"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/>
					</svg>
					<div class="flex items-center">
						<input
							type="text"
							name="name"
							id="name"
							class="block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 sm:text-sm"
							placeholder="AMS-Amsterdam Airport Schiphol, Netherlands"
						/>
						<span class="mx-4 h-6 w-px bg-pblue-400 mt-1 lg:mx-6" aria-hidden="true" />
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-12 h-5 text-pblue-800"
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
							class="block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 sm:text-sm"
							placeholder="AMS-Amsterdam Airport Schiphol, Netherlands"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- Roundtrip Tab -->
{#if activeSubTab === 'oneWay'}
	<div class="my-2">
		<h2>Active One-way</h2>
	</div>
{/if}

<!-- Roundtrip Tab -->
{#if activeSubTab === 'multiCity'}
	<div class="my-2">
		<h2>Active Multi-City</h2>
	</div>
{/if}

<div class="md:flex hidden lg:block">
	<div class="my-2">
		<div class="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
			<div class="col-span-1 lg:col-span-2 hidden lg:block">
				<div
					class="flex-none flex items-center justify-start sm:justify-start space-x-2 md:py-3 rounded sm:bg-transparent px-2 sm:px-0 "
				>
					<div>
						<fieldset class="mt-4">
							<legend class="sr-only">Notification method</legend>
							<div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
								<div class="flex items-center">
									<input
										id="email"
										name="notification-method"
										type="radio"
										checked
										class="focus:ring-pblue-500 h-4 w-4 text-pblue-600 border-gray-300"
									/>
									<label for="email" class="ml-3 block text-sm font-medium text-gray-700">
										Flexible Search (+/- 3 Days)
									</label>
								</div>

								<div class="flex items-center">
									<input
										id="sms"
										name="notification-method"
										type="radio"
										class="focus:ring-pblue-500 h-4 w-4 text-pblue-600 border-gray-300"
									/>
									<label for="sms" class="ml-3 block text-sm font-medium text-gray-700">
										Non-stop flights only
									</label>
								</div>

								<div class="flex items-center">
									<input
										id="push"
										name="notification-method"
										type="radio"
										class="focus:ring-pblue-500 h-4 w-4 text-pblue-600 border-gray-300"
									/>
									<label for="push" class="ml-3 block text-sm font-medium text-gray-700">
										Airline specific
									</label>
								</div>
								<div class="flex items-center">
									<input
										id="push"
										name="notification-method"
										type="radio"
										class="focus:ring-pblue-500 h-4 w-4 text-pblue-600 border-gray-300"
									/>
									<label for="push" class="ml-3 block text-sm font-medium text-gray-700">
										More
									</label>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
			</div>
			<!-- Mobile version -->
			<div class="col-span-1 lg:col-span-2  lg:hidden">
				<div
					class=" items-center justify-start sm:justify-start space-x-2 md:py-3 rounded sm:bg-transparent px-2 sm:px-0 "
				>
					<div>
						<label for="location" class="block text-xs font-medium text-gray-700"
							>More options</label
						>
						<select
							id="location"
							name="location"
							class="mt-1 block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-xs rounded-md"
						>
							<option>Flexible Search (+/- 3 Days)</option>
							<option>Non-stop flights only</option>
							<option>Airline specific</option>
						</select>
					</div>
				</div>
			</div>
			<div class="col-span-1 lg:col-span-1">
				<div
					class="flex  items-center justify-end sm:justify-end space-x-2 md:py-3 rounded sm:bg-transparent px-2 sm:px-0"
				>
					<a
						href="javascript:void(0)"
						class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded-full  bg-pblue-900 text-white hover:text-white hover:bg-pblue-700 focus:ring focus:ring-pblue-500 focus:ring-opacity-50 active:bg-pblue-900 "
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd"
							/>
						</svg>
						<span class="flex">Search Flights</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
