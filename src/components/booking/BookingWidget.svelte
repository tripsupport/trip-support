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
	class="relative max-w-7xl z-10 mx-auto xl:-mt-32 lg:-mt-28 md:-mt-8 px-4 pb-12 lg:px-8 lg:mb-6"
	aria-labelledby="contact-heading"
>
	<div class="flex flex-col rounded-xl bg-white shadow-xl">
		<!-- Card -->

		<!-- Card Header -->
		<div class="py-4 px-5 lg:px-6 w-full">
			<nav class="flex items-center border-b border-gray-200">
				<button
					on:click={() => (activeTab = 'flights')}
					type="button"
					class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 capitalize {activeTab ===
					'flights'
						? 'text-pblue-900 border-b-2 border-pblue-900 '
						: 'text-gray-500 hover:text-pblue-900'}"
				>
					<FlightsIcon />
					flights
				</button>
				<button
					on:click={() => (activeTab = 'vacations')}
					type="button"
					class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 capitalize {activeTab ===
					'vacations'
						? 'text-pblue-900 border-b-2 border-pblue-900 '
						: 'text-gray-500 hover:text-pblue-900'}"
				>
					<VacationsIcon />
					vacations
				</button>
				<button
					on:click={() => (activeTab = 'hotels')}
					type="button"
					class="px-3 md:px-5 font-medium -mb-px flex items-center space-x-2 py-4 capitalize {activeTab ===
					'hotels'
						? 'text-pblue-900 border-b-2 border-pblue-900 '
						: 'text-gray-500 hover:text-pblue-900'}"
				>
					<HotelsIcon />
					hotels
				</button>
			</nav>
		</div>
		<!-- END Card Header -->

		<div class="px-5 py-4 lg:px-6 lg:py-6 grow w-full">
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
