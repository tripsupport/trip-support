<script>
	import { Icon, SwitchHorizontal } from 'svelte-hero-icons';
	import Seating from './Seating.svelte';
	import TravellersMenu from './TravellersMenu.svelte';
	import TravellerCount from './TravellerCount.svelte';
	import SearchFlightsButton from '../flights/SearchFlightsButton.svelte';
	import SearchOptions from '../flights/SearchOptions.svelte';
	import RoundTrip from '../flights/RoundTrip.svelte';
	import OneWay from '../flights/OneWay.svelte';
	import MultiCity from '../flights/MultiCity.svelte';
	import MultiCitySearchBtn from '../flights/MultiCitySearchBtn.svelte';
	import MultiCitySearchOptions from '../flights/MultiCitySearchOptions.svelte';
	let activeSubTab = 'roundTrip';

	let count = 2;
</script>

<div class="grid grid-cols-12">
	<div class="col-span-12 md:col-span-8 flex gap-x-4">
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
	<div class="col-span-12 md:col-span-4 mt-6 md:mt-0 flex md:justify-end justify-start">
		<div class="hidden ml-3 sm:block col-span-2 lg:col-span-1">
			<TravellerCount />
		</div>
		<!-- Mobile Modal -->
		<div class="sm:hidden col-span-2 lg:col-span-1">
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
	<RoundTrip />
	<div class="grid grid-cols-6 justify-self-start place-content-between md:gap-4 items-center">
		<div class="col-span-6 md:col-span-4">
			<SearchOptions />
		</div>
		<div class="col-span-6 md:col-span-2 w-full md:justify-self-end mt-4 md:mt-0">
			<SearchFlightsButton />
		</div>
	</div>
{/if}

<!-- OneWay Tab -->
{#if activeSubTab === 'oneWay'}
	<OneWay />
	<div class="grid grid-cols-6 justify-self-start place-content-between md:gap-4 items-center">
		<div class="col-span-6 md:col-span-4">
			<SearchOptions />
		</div>
		<div class="col-span-6 md:col-span-2 w-full md:justify-self-end mt-4 md:mt-0">
			<div id="each" />
			<SearchFlightsButton />
		</div>
	</div>
{/if}

<!-- Multi-City Tab -->
{#if activeSubTab === 'multiCity'}
	{#each Array(count) as _, i}
		<MultiCity />
	{/each}
	<div class="grid grid-cols-12 justify-self-start place-content-between gap-4 items-center ">
		<MultiCitySearchOptions />
		<div class="col-span-12 md:col-span-6 lg:col-span-3">
			<!-- This example requires Tailwind CSS v2.0+ -->
			<span class="relative z-0 inline-flex rounded-md w-full justify-center bg-gray-50 ">
				<button
					type="button"
					class="relative inline-flex items-center px-4 py-2 text-sm text-red-700 w-full font-bold"
					disabled={count === 1}
					on:click={() => (count = count - 1)}
				>
					<span class="sr-only">Remove</span>
					<!-- Heroicon name: solid/chevron-left -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 text-pred-700"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
					Remove
				</button>
				<button
					type="button"
					class="-ml-px relative inline-flex items-center px-4 py-2   text-sm  text-pblue-700 w-full font-bold justify-end"
					on:click={() => (count = count + 1)}
				>
					<!-- Heroicon name: solid/chevron-right -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 text-pblue-700"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="sr-only">Add</span>
					Add trip
				</button>
			</span>
		</div>
		<div class="col-span-12 md:col-span-6 lg:col-span-3">
			<MultiCitySearchBtn />
		</div>
	</div>
{/if}
