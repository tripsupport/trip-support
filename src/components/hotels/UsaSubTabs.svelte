<script>
	import NewYork from './NewYork.svelte';
	import SanFrancisco from './SanFrancisco.svelte';
	import LosAngeles from './LosAngeles.svelte';
	import Miami from './Miami.svelte';
	import Boston from './Boston.svelte';

	let activeSubTab = 'los-angeles';
</script>

<div class="flex-1 sm:flex space-x-0 sm:space-x-6 my-2 sm:my-4">
	<button
		on:click={() => (activeSubTab = 'new-york')}
		type="button"
		class="my-2 sm:my-0 inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'new-york'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		New York
	</button>

	<button
		on:click={() => (activeSubTab = 'san-francisco')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'san-francisco'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		San Francisco
	</button>

	<button
		on:click={() => (activeSubTab = 'los-angeles')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'los-angeles'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Los Angeles
	</button>
	<button
		on:click={() => (activeSubTab = 'miami')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'miami'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Miami
	</button>
	<button
		on:click={() => (activeSubTab = 'boston')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'boston'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Boston
	</button>
</div>
{#if activeSubTab === 'new-york'}
	<NewYork />
{/if}
{#if activeSubTab === 'san-francisco'}
	<SanFrancisco />
{/if}
{#if activeSubTab === 'los-angeles'}
	<LosAngeles />
{/if}
{#if activeSubTab === 'miami'}
	<Miami />
{/if}
{#if activeSubTab === 'boston'}
	<Boston />
{/if}
