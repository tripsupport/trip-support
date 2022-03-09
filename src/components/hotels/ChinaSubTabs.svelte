<script>
	import Beijing from './Beijing.svelte';
	import Guangzhou from './Guangzhou.svelte';
	import Shanghai from './Shanghai.svelte';
	import Chengdu from './Chengdu.svelte';

	let activeSubTab = 'beijing';
</script>

<div class="flex-1 sm:flex space-x-0 sm:space-x-6 my-2 sm:my-4">
	<button
		on:click={() => (activeSubTab = 'beijing')}
		type="button"
		class="my-2 sm:my-0 inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'beijing'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Beijing
	</button>

	<button
		on:click={() => (activeSubTab = 'shanghai')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'shanghai'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Shanghai
	</button>

	<button
		on:click={() => (activeSubTab = 'guangzhou')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'guangzhou'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Guangzhou
	</button>

	<button
		on:click={() => (activeSubTab = 'chengdu')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'chengdu'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Chengdu
	</button>
</div>
{#if activeSubTab === 'beijing'}
	<Beijing />
{/if}
{#if activeSubTab === 'shanghai'}
	<Shanghai />
{/if}
{#if activeSubTab === 'guangzhou'}
	<Guangzhou />
{/if}
{#if activeSubTab === 'chengdu'}
	<Chengdu />
{/if}
