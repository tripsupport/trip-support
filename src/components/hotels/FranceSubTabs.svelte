<script>
	import Paris from './Paris.svelte';
	import Marseille from './Marseille.svelte';
	import Lyon from './Lyon.svelte';
	import Nantes from './Nantes.svelte';
	let activeSubTab = 'paris';
</script>

<div class="flex-1 sm:flex space-x-0 sm:space-x-6 my-2 sm:my-4">
	<button
		on:click={() => (activeSubTab = 'paris')}
		type="button"
		class="my-2 sm:my-0 inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'paris'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Paris
	</button>

	<button
		on:click={() => (activeSubTab = 'marseille')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'marseille'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Marseille
	</button>

	<button
		on:click={() => (activeSubTab = 'lyon')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'lyon'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Lyon
	</button>

	<button
		on:click={() => (activeSubTab = 'nantes')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'nantes'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Nantes
	</button>
</div>
{#if activeSubTab === 'paris'}
	<Paris />
{/if}
{#if activeSubTab === 'marseille'}
	<Marseille />
{/if}
{#if activeSubTab === 'lyon'}
	<Lyon />
{/if}
{#if activeSubTab === 'nantes'}
	<Nantes />
{/if}
