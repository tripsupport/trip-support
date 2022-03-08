<script>
	import { Icon, SwitchHorizontal } from 'svelte-hero-icons';
	import Cabin from './Cabin.svelte';
	import TravellersMob from './TravellersMob.svelte';
	import Travellers from './Travellers.svelte';
	import RoundtripSearchBtn from '../flights/RoundtripSearchBtn.svelte';
	import OneWaySearchBtn from '../flights/OneWaySearchBtn.svelte';
	import SearchOptions from '../flights/SearchOptions.svelte';
	import RoundTrip from '../flights/RoundTrip.svelte';
	import OneWay from '../flights/OneWay.svelte';
	import MultiCity from '../flights/MultiCity.svelte';
	import MultiCitySearchBtn from '../flights/MultiCitySearchBtn.svelte';
	import MultiCitySearchOptions from '../flights/MultiCitySearchOptions.svelte';
	import RoundTripMobForm from '../flights/RoundTripMobForm.svelte';
	import MultiCityMobForm from '../flights/MultiCityMobForm.svelte';
	import OneWayMobForm from '../flights/OneWayMobForm.svelte';
	import MultiCityMob from '../flights/MultiCityMobForm.svelte';
	import InputError from '../booking/InputError.svelte';
	let activeSubTab = 'roundTrip';

	let count = 2;

	let errorShow = true;
	function errorToggle() {
		errorShow != errorShow;
	}
</script>

<div class="grid grid-cols-12">
	<div class="col-span-12 md:col-span-8 flex gap-x-4 justify-start">
		<div class="col-span-2 lg:col-span-1">
			<!-- Simple Button (extra small) -->
			<button
				on:click={() => (activeSubTab = 'roundTrip')}
				type="button"
				class="inline-flex justify-center items-center space-x-2 rounded-full border font-semibold focus:outline-none px-3 py-2 text-sm focus:ring focus:ring-gray-500 focus:ring-opacity-25 
              {activeSubTab === 'roundTrip'
					? 'text-white bg-pblue-800 border-white shadow-none'
					: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
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
				class="inline-flex justify-center items-center space-x-2 rounded-full border font-semibold focus:outline-none px-3 py-2 text-sm focus:ring focus:ring-gray-500 focus:ring-opacity-25 
              {activeSubTab === 'oneWay'
					? 'text-white bg-pblue-800 border-white shadow-none'
					: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
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
				class="inline-flex justify-center items-center space-x-2 rounded-full border font-semibold focus:outline-none px-3 py-2 text-sm focus:ring focus:ring-gray-500 focus:ring-opacity-25 
              {activeSubTab === 'multiCity'
					? 'text-white bg-pblue-800 border-white shadow-none'
					: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
              "
			>
				Multi-city
			</button>
			<!-- END Simple Button (small) -->
		</div>
	</div>
	<div class="col-span-12 md:col-span-4 flex md:justify-end justify-start sm:mt-0 mt-4">
		<div class="hidden sm:flex col-span-2 lg:col-span-1">
			<Travellers />
		</div>

		<div class="sm:hidden flex col-span-2 lg:col-span-1">
			<TravellersMob />
		</div>

		<div class="col-span-2 lg:col-span-1">
			<Cabin />
		</div>
	</div>

	<!-- Travellers -->
</div>
<!-- BEGIN Flights Sub Tabs -->
<!-- Roundtrip Tab -->
{#if activeSubTab === 'roundTrip'}
	<div class="hidden sm:block">
		<RoundTrip />
	</div>
	<div class="block sm:hidden">
		<RoundTripMobForm />
	</div>
	<div class="grid grid-cols-6 justify-self-start place-content-between md:gap-4 items-center">
		<div class="col-span-6 md:col-span-4">
			<SearchOptions />
		</div>
		<div class="col-span-6 md:col-span-2 w-full md:justify-self-end mt-4 md:mt-0">
			<RoundtripSearchBtn />
		</div>
	</div>
{/if}

<!-- OneWay Tab -->
{#if activeSubTab === 'oneWay'}
	<!-- <InputError /> -->
	<!-- This example requires Tailwind CSS v2.0+ -->
	{#if errorShow}
		<div class="bg-rose-50 border-l-4 border-rose-400 p-4 mt-4">
			<div class="flex">
				<div class="ml-3">
					<p class="text-sm text-pred-700 font-medium">
						To continue, please correct the errors below.
					</p>
				</div>
			</div>
		</div>
	{/if}

	<div class="hidden sm:block">
		<OneWay />
	</div>
	<div class="block sm:hidden">
		<OneWayMobForm />
	</div>
	<div class="grid grid-cols-6 justify-self-start place-content-between md:gap-4 items-center">
		<div class="col-span-6 md:col-span-4">
			<SearchOptions />
		</div>
		<div class="col-span-6 md:col-span-2 w-full md:justify-self-end mt-4 md:mt-0">
			<div id="each" />
			<!-- <OneWaySearchBtn /> -->
			<div class="space-x-2 rounded sm:bg-transparent sm:px-0">
				<a
					type="button"
					href="javascript:void(0)"
					class="inline-flex justify-center items-center space-x-2 border font-medium tracking-wide focus:outline-none px-3 py-2 text-sm rounded-full  bg-pblue-800 text-white hover:text-white hover:bg-pblue-900 focus:ring focus:ring-pblue-500 focus:ring-opacity-50 w-full "
					on:click={errorToggle}
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
					<span class="flex">Search One-way Flights</span>
				</a>
			</div>
		</div>
	</div>
{/if}

<!-- Multi-City Tab -->
{#if activeSubTab === 'multiCity'}
	<div class="mt-6">
		<div class="flex bg-gray-50 w-full">
			<span class="font-semibold text-tiny px-3 py-1">Flight 1</span>
		</div>
		{#each Array(count) as _, i}
			{#if i >= 1}
				<div class="grid grid-cols-2 mt-2 bg-gray-50">
					<div class="cols-span-1 place-self-start my-auto">
						<span class="font-semibold text-tiny pl-3">Flight {i + 1}</span>
					</div>
					<div class="col-span-1 place-self-end">
						<button
							type="button"
							class="inline-flex items-center px-4 py-2 text-sm text-red-700 w-full font-bold"
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
					</div>
				</div>
			{/if}
			<div class="hidden sm:block">
				<MultiCity />
			</div>
			<div class="block sm:hidden">
				<MultiCityMobForm />
			</div>
		{/each}
	</div>

	<!-- Add trip button -->
	{#if count < 6}
		<span class="relative z-0 inline-flex rounded-md w-full justify-end ">
			<button
				type="button"
				class="-ml-px relative inline-flex items-center px-4 py-2   text-sm  text-pblue-700 font-bold justify-end bg-gray-50"
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
	{/if}

	<div class="grid grid-cols-6 justify-self-start place-content-between gap-4 items-center mt-5">
		<div class="col-span-6 md:col-span-3 lg:col-span-4">
			<MultiCitySearchOptions />
		</div>
		<div class="col-span-6 md:col-span-3 lg:col-span-2">
			<MultiCitySearchBtn />
		</div>
	</div>
{/if}
