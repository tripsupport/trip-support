<script>
	import Berlin from './Berlin.svelte';
	import Munich from './Munich.svelte';
	import Hamburg from './Hamburg.svelte';
	import Frankfurt from './Frankfurt.svelte';
	import Cologne from './Cologne.svelte';
	let activeSubTab = 'berlin';
</script>

<div class="flex-1 sm:flex space-x-0 sm:space-x-6 my-2 sm:my-4">
	<button
		on:click={() => (activeSubTab = 'berlin')}
		type="button"
		class="my-2 sm:my-0 inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'berlin'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Berlin
	</button>

	<button
		on:click={() => (activeSubTab = 'munich')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'munich'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Munich
	</button>

	<button
		on:click={() => (activeSubTab = 'hamburg')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'hamburg'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Hamburg
	</button>

	<button
		on:click={() => (activeSubTab = 'frankfurt')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'frankfurt'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Frankfurt
	</button>
	<button
		on:click={() => (activeSubTab = 'cologne')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'cologne'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Cologne
	</button>
</div>

{#if activeSubTab === 'berlin'}
	<Berlin />
{/if}
{#if activeSubTab === 'munich'}
	<Munich />
{/if}
{#if activeSubTab === 'hamburg'}
	<Hamburg />
{/if}
{#if activeSubTab === 'frankfurt'}
	<Frankfurt />
{/if}
{#if activeSubTab === 'cologne'}
	<Cologne />
{/if}
