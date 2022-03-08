<script>
	import Orlando from '../vacations/florida/Orlando.svelte';
	let activeSubTab = 'orlando';
</script>

<div class="flex space-x-6 my-4">
	<button
		on:click={() => (activeSubTab = 'orlando')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'orlando'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Orlando
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'orlando'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800 '}
                ">2</span
		>
	</button>
</div>
{#if activeSubTab === 'orlando'}
	<Orlando />
{/if}
