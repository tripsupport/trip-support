<script>
	import LaRomana from './dominican/LaRomana.svelte';
	import PuertoPlata from './dominican/PuertoPlata.svelte';
	import PuntaCana from './dominican/PuntaCana.svelte';
	import Samana from './dominican/Samana.svelte';
	import SantoDomingo from './dominican/SantoDomingo.svelte';

	let activeSubTab = 'punta-cana';
</script>

<div class="flex-1 sm:flex space-x-0 sm:space-x-6 my-2 sm:my-4">
	<button
		on:click={() => (activeSubTab = 'la-romana')}
		type="button"
		class="my-2 sm:my-0 inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'la-romana'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		La Romana
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'la-romana'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800 '}
                ">6</span
		>
	</button>

	<button
		on:click={() => (activeSubTab = 'puerto-plata')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'puerto-plata'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Puerto Plata
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'puerto-plata'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">12</span
		>
	</button>

	<button
		on:click={() => (activeSubTab = 'punta-cana')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'punta-cana'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Punta Cana
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'punta-cana'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">9</span
		>
	</button>
	<button
		on:click={() => (activeSubTab = 'samana')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'samana'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Samana
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'samana'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">5</span
		>
	</button>
	<button
		on:click={() => (activeSubTab = 'santo-domingo')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'santo-domingo'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Santo Domingo
		<span
			class="hidden ml-3 py-[2px] px-2 rounded-full text-xx font-semibold md:inline-block
                {activeSubTab === 'santo-domingo'
				? 'text-slate-900 bg-white border-pblue-500 shadow-none'
				: 'text-white bg-pblue-800'}
                ">18</span
		>
	</button>
</div>
{#if activeSubTab === 'la-romana'}
	<LaRomana />
{/if}
{#if activeSubTab === 'puerto-plata'}
	<PuertoPlata />
{/if}
{#if activeSubTab === 'punta-cana'}
	<PuntaCana />
{/if}
{#if activeSubTab === 'samana'}
	<Samana />
{/if}
{#if activeSubTab === 'santo-domingo'}
	<SantoDomingo />
{/if}
