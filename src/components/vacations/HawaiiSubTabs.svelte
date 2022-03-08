<script>
	import Honolulu from '../vacations/hawaii/Honolulu.svelte';
	import Kona from '../vacations/hawaii/Kona.svelte';
	import Maui from '../vacations/hawaii/Maui.svelte';

	let activeSubTab = 'maui';
</script>

<div class="flex-1 sm:flex space-x-0 sm:space-x-6 my-2 sm:my-4">
	<button
		on:click={() => (activeSubTab = 'honolulu')}
		type="button"
		class="my-2 sm:my-0 inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'honolulu'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Honolulu
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'honolulu'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800 '}
                ">6</span
		>
	</button>

	<button
		on:click={() => (activeSubTab = 'kona')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'kona'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Kona
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'kona'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">12</span
		>
	</button>

	<button
		on:click={() => (activeSubTab = 'maui')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'maui'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Maui
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'maui'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">9</span
		>
	</button>
</div>
{#if activeSubTab === 'honolulu'}
	<Honolulu />
{/if}
{#if activeSubTab === 'kona'}
	<Kona />
{/if}
{#if activeSubTab === 'maui'}
	<Maui />
{/if}
