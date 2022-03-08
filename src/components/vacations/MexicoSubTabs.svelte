<script>
	import Acapulco from './Acapulco.svelte';
	import Cancun from './Cancun.svelte';
	import LosCabos from './LosCabos.svelte';
	import PuertoVallarta from './PuertoVallarta.svelte';
	import RivieraMaya from './RivieraMaya.svelte';

	let activeSubTab = 'cancun';
</script>

<div class="flex-1 sm:flex grid gap-4 space-x-6 my-4">
	<button
		on:click={() => (activeSubTab = 'acapulco')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'acapulco'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Acapulco
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'acapulco'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800 '}
                ">6</span
		>
	</button>

	<button
		on:click={() => (activeSubTab = 'cancun')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'cancun'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Cancun
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'cancun'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">12</span
		>
	</button>

	<button
		on:click={() => (activeSubTab = 'los-cabos')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'los-cabos'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Los Cabos
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'los-cabos'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">9</span
		>
	</button>
	<button
		on:click={() => (activeSubTab = 'puerto-vallarta')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'puerto-vallarta'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Puerto Vallarta
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'puerto-vallarta'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">5</span
		>
	</button>
	<button
		on:click={() => (activeSubTab = 'riviera-maya')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'riviera-maya'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Riviera Maya
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'riviera-maya'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">18</span
		>
	</button>
</div>
{#if activeSubTab === 'acapulco'}
	<Acapulco />
{/if}
{#if activeSubTab === 'cancun'}
	<Cancun />
{/if}
{#if activeSubTab === 'los-cabos'}
	<LosCabos />
{/if}
{#if activeSubTab === 'puerto-vallarta'}
	<PuertoVallarta />
{/if}
{#if activeSubTab === 'riviera-maya'}
	<RivieraMaya />
{/if}
