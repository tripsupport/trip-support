<script>
	import Istanbul from './Istanbul.svelte';
	import Izmir from './Izmir.svelte';
	import Antalya from './Antalya.svelte';
	import Bursa from './Bursa.svelte';
	import Konya from './Konya.svelte';
	import Ankara from './Ankara.svelte';
	let activeSubTab = 'istanbul';
</script>

<div class="flex-1 sm:flex space-x-0 sm:space-x-6 my-2 sm:my-4">
	<button
		on:click={() => (activeSubTab = 'istanbul')}
		type="button"
		class="my-2 sm:my-0 inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'istanbul'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Istanbul
	</button>

	<button
		on:click={() => (activeSubTab = 'izmir')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'izmir'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Izmir
	</button>

	<button
		on:click={() => (activeSubTab = 'antalya')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'antalya'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Antalya
	</button>

	<button
		on:click={() => (activeSubTab = 'bursa')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'bursa'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Bursa
	</button>
	<button
		on:click={() => (activeSubTab = 'konya')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'konya'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Konya
	</button>
	<button
		on:click={() => (activeSubTab = 'ankara')}
		type="button"
		class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                {activeSubTab === 'ankara'
			? 'text-white bg-pblue-800 border-white shadow-none'
			: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                "
	>
		Ankara
	</button>
</div>
{#if activeSubTab === 'istanbul'}
	<Istanbul />
{/if}
{#if activeSubTab === 'izmir'}
	<Izmir />
{/if}
{#if activeSubTab === 'antalya'}
	<Antalya />
{/if}
{#if activeSubTab === 'bursa'}
	<Bursa />
{/if}
{#if activeSubTab === 'konya'}
	<Konya />
{/if}
{#if activeSubTab === 'ankara'}
	<Ankara />
{/if}
