<script>
	import BookingWidget from '../components/booking/BookingWidget.svelte';
	import Subscribe from '../components/home/Subscribe.svelte';
	import BlogPosts from '../components/home/BlogPosts.svelte';
	import VacationsHero from '../components/vacations/VacationsHero.svelte';

	// Tabs
	import MexicoSubTabs from '../components/vacations/MexicoSubTabs.svelte';
	import CubaSubTabs from '../components/vacations/CubaSubTabs.svelte';
	import DominicanSubTabs from '../components/vacations/DominicanSubTabs.svelte';
	import JamaicaSubTabs from '../components/vacations/JamaicaSubTabs.svelte';
	import FloridaSubTabs from '../components/vacations/FloridaSubTabs.svelte';
	import HawaiiSubTabs from '../components/vacations/HawaiiSubTabs.svelte';
	import CaribbeanSubTabs from '../components/vacations/CaribbeanSubTabs.svelte';
	// Tabs
	let activeTab = 'mexico';
</script>

<VacationsHero />

<BookingWidget />

<div class="mx-auto max-w-7xl p-6">
	<!-- Heading -->
	<section id="popular_vacations" class="relative mb-6">
		<div class="text-left">
			<div class="sm:flex sm:items-baseline sm:justify-between">
				<h1 class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
					<span class="block xl:inline">Popular Vacations</span>
					<!-- <span class="block text-indigo-600 xl:inline">Book Now</span> -->
				</h1>
			</div>
			<div class="max-w-5xl">
				<p class="mt-2 text-base text-gray-700 sm:mt-3  md:mt-3 md:text-md lg:mx-0">
					Special offers from resorts and hotels across North America, South America, the Caribbean,
					Europe, Africa, the Middle East, and Asia.
				</p>
			</div>
		</div>
	</section>
	<section class="relative" aria-labelledby="contact-heading">
		<div class="flex flex-col rounded-xl bg-white w-full ">
			<nav
				class=" overflow-x-scroll lg:overflow-hidden flex items-center sm:justify-start border-b border-gray-200 space-x-8 sm:space-x-12"
			>
				<button
					on:click={() => (activeTab = 'mexico')}
					type="button"
					class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab === 'mexico'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/mexico.svg" alt="mexico flag" class="w-5 mr-2" />
					Mexico
				</button>
				<button
					on:click={() => (activeTab = 'cuba')}
					type="button"
					class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab === 'cuba'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/cuba.svg" alt="cuba flag" class="w-5 mr-2" />
					Cuba
				</button>
				<button
					on:click={() => (activeTab = 'dominican-republic')}
					type="button"
					class="text-tiny px-2 md:px-6 flex whitespace-nowrap items-center py-3 capitalize {activeTab ===
					'dominican-republic'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img
						src="icons/countries/dominican-republic.svg"
						alt="dominican-republic flag"
						class="w-5 mr-2"
					/>
					Dominican Rep
				</button>
				<button
					on:click={() => (activeTab = 'jamaica')}
					type="button"
					class="text-tiny px-2 md:px-6  flex items-center py-3 capitalize {activeTab === 'jamaica'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/jamaica.svg" alt="jamaica flag" class="w-5 mr-2" />
					Jamaica
				</button>

				<button
					on:click={() => (activeTab = 'florida')}
					type="button"
					class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab === 'florida'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/usa.svg" alt="usa flag" class="w-5 mr-2" />
					Florida
				</button>
				<button
					on:click={() => (activeTab = 'hawaii')}
					type="button"
					class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab === 'hawaii'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/hawaii.svg" alt="mexico flag" class="w-5 mr-2" />
					Hawaii
				</button>
				<button
					on:click={() => (activeTab = 'caribbean')}
					type="button"
					class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab === 'caribbean'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/sun.svg" alt="mexico flag" class="w-5 mr-2" />
					Caribbean
				</button>
			</nav>

			<!-- END main vacations tab -->

			<!-- BEGIN vacations sub tab -->
			<div class="py-1 mb-2 lg:pb-4 ">
				{#if activeTab === 'mexico'}
					<MexicoSubTabs />
				{/if}
				{#if activeTab === 'cuba'}
					<CubaSubTabs />
				{/if}
				{#if activeTab === 'dominican-republic'}
					<DominicanSubTabs />
				{/if}
				{#if activeTab === 'jamaica'}
					<JamaicaSubTabs />
				{/if}
				{#if activeTab === 'florida'}
					<FloridaSubTabs />
				{/if}
				{#if activeTab === 'hawaii'}
					<HawaiiSubTabs />
				{/if}
				{#if activeTab === 'caribbean'}
					<CaribbeanSubTabs />
				{/if}
				<!-- add rest here -->
			</div>
			<!-- END Card -->
		</div>
	</section>
</div>

<section class="relative my-3">
	<BlogPosts />
</section>
<section class="relative my-3">
	<Subscribe />
</section>
