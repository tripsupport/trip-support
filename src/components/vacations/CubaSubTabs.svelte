<script>
	import CayoCoco from './CayoCoco.svelte';
	import CayoLargo from './CayoLargo.svelte';
	import Havana from './Havana.svelte';
	import Holguin from './Holguin.svelte';
	import Varadero from './Varadero.svelte';

	let activeSubTab = 'havana';
</script>

<div class="flex space-x-6 my-4">
	<button
		on:click={() => (activeSubTab = 'cayo-coco')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'cayo-coco'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Cayo Coco
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'cayo-coco'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800 '}
                ">6</span
		>
	</button>

	<button
		on:click={() => (activeSubTab = 'cayo-largo')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'cayo-largo'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Cayo Largo
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'cayo-largo'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">12</span
		>
	</button>

	<button
		on:click={() => (activeSubTab = 'havana')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'havana'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Havana
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'havana'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">9</span
		>
	</button>
	<button
		on:click={() => (activeSubTab = 'holguin')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'holguin'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Holguin
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'holguin'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">5</span
		>
	</button>
	<button
		on:click={() => (activeSubTab = 'varadero')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'varadero'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Varadero
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'varadero'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">18</span
		>
	</button>
</div>
{#if activeSubTab === 'cayo-coco'}
	<CayoCoco />
{/if}
{#if activeSubTab === 'cayo-largo'}
	<CayoLargo />
{/if}
{#if activeSubTab === 'havana'}
	<Havana />
{/if}
{#if activeSubTab === 'holguin'}
	<Holguin />
{/if}
{#if activeSubTab === 'varadero'}
	<Varadero />
{/if}
