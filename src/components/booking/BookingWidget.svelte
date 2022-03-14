<script>
	import FlightsIcon from '../icons/FlightsIcon.svelte';
	import VacationsIcon from '../icons/VacationsIcon.svelte';
	import HotelsIcon from '../icons/HotelsIcon.svelte';

	// Tabs
	import FlightsTab from './FlightsTab.svelte';
	import VacationsTab from './VacationsTab.svelte';
	import HotelsTab from './HotelsTab.svelte';

	let activeTab = 'flights';
</script>

<section
	class="relative max-w-7xl z-[2] -mt-5 mx-auto xl:-mt-32 lg:-mt-28 md:-mt-8 px-0 md:px-4 pb-12 lg:px-6 lg:mb-6"
	aria-labelledby="contact-heading"
>
	<div class="flex flex-col rounded-xl bg-white shadow-xl">
		<!-- Card -->

		<!-- Card Header -->
		<div class="py-2 px-5 lg:px-6 w-full">
			<nav class="flex items-center sm:justify-start justify-between border-b border-gray-200">
				<button
					on:click={() => (activeTab = 'flights')}
					type="button"
					class="text-tiny px-3 md:px-5 -mb-px flex items-center space-x-2 py-4 capitalize {activeTab ===
					'flights'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<FlightsIcon />
					Flights
				</button>
				<button
					on:click={() => (activeTab = 'vacations')}
					type="button"
					class="text-tiny px-3 md:px-5 -mb-px flex items-center space-x-2 py-4 capitalize {activeTab ===
					'vacations'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<VacationsIcon />
					Vacations
				</button>
				<button
					on:click={() => (activeTab = 'hotels')}
					type="button"
					class="text-tiny px-3 md:px-5 -mb-px flex items-center space-x-2 py-4 capitalize {activeTab ===
					'hotels'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<HotelsIcon />
					Hotels
				</button>
			</nav>
		</div>
		<!-- END Card Header -->

		<div class="px-5 py-3 mb-3 lg:px-6 lg:pb-4 grow w-full">
			{#if activeTab === 'flights'}
				<FlightsTab />
			{/if}
			{#if activeTab === 'vacations'}
				<VacationsTab />
			{/if}
			{#if activeTab === 'hotels'}
				<HotelsTab />
			{/if}
		</div>
		<!-- END Card -->
	</div>
</section>
