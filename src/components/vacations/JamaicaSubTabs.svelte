<script>
	import MontegoBay from './jamaica/MontegoBay.svelte';
	import Negril from './jamaica/Negril.svelte';
	import OchoRios from './jamaica/OchoRios.svelte';
	import RunawayBay from './jamaica/RunawayBay.svelte';
	import Whitehouse from './jamaica/Whitehouse.svelte';

	let activeSubTab = 'montego-bay';
</script>

<div class="flex space-x-6 my-4">
	<button
		on:click={() => (activeSubTab = 'montego-bay')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'montego-bay'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Montego Bay
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'montego-bay'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800 '}
                ">6</span
		>
	</button>

	<button
		on:click={() => (activeSubTab = 'negril')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'negril'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Negril
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'negril'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">12</span
		>
	</button>

	<button
		on:click={() => (activeSubTab = 'ocho-rios')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'ocho-rios'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Ocho Rios
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'ocho-rios'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">9</span
		>
	</button>
	<button
		on:click={() => (activeSubTab = 'runaway-bay')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'runaway-bay'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Runaway Bay
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'runaway-bay'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">5</span
		>
	</button>
	<button
		on:click={() => (activeSubTab = 'whitehouse')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'whitehouse'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Whitehouse
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'whitehouse'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">18</span
		>
	</button>
</div>
{#if activeSubTab === 'montego-bay'}
	<MontegoBay />
{/if}
{#if activeSubTab === 'negril'}
	<Negril />
{/if}
{#if activeSubTab === 'ocho-rios'}
	<OchoRios />
{/if}
{#if activeSubTab === 'runaway-bay'}
	<RunawayBay />
{/if}
{#if activeSubTab === 'whitehouse'}
	<Whitehouse />
{/if}
