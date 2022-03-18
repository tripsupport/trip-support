<script>
	import LottieHotels from '../components/hotels/HotelsHero.svelte';
	import HotelsHero from '../components/hotels/HotelsHero.svelte';
	import BookingWidget from '../components/booking/BookingWidget.svelte';
	import BlogPosts from '../components/home/BlogPosts.svelte';
	import Subscribe from '../components/home/Subscribe.svelte';

	import CanadaSubTabs from '../components/hotels/CanadaSubTabs.svelte';
	import UsaSubTabs from '../components/hotels/UsaSubTabs.svelte';
	import FranceSubTabs from '../components/hotels/FranceSubTabs.svelte';
	import SpainSubTabs from '../components/hotels/SpainSubTabs.svelte';
	import ChinaSubTabs from '../components/hotels/ChinaSubTabs.svelte';
	import ItalySubTabs from '../components/hotels/ItalySubTabs.svelte';
	import TurkeySubTabs from '../components/hotels/TurkeySubTabs.svelte';
	import GermanySubTabs from '../components/hotels/GermanySubTabs.svelte';

	let activeTab = 'canada';
</script>

<HotelsHero />
<BookingWidget />

<div class="mx-auto max-w-7xl p-6">
	<!-- Heading -->
	<section class="relative mb-6">
		<div class="text-left">
			<div class="sm:flex sm:items-baseline sm:justify-between">
				<h1 class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
					<span class="block xl:inline">Trending Hotel Destinations</span>
					<!-- <span class="block text-indigo-600 xl:inline">Book Now</span> -->
				</h1>
			</div>
			<p
				class="mt-2 text-md text-gray-500 sm:mt-3 sm:text-md sm:max-w-prose md:mt-3 md:text-md lg:mx-0"
			>
				Explore destinations currently popular with travelers across Canada.
			</p>
		</div>
	</section>
	<section class="relative" aria-labelledby="contact-heading">
		<div class="flex flex-col rounded-xl bg-white w-full ">
			<nav
				class=" overflow-x-scroll overflow-hidden flex items-center sm:justify-between border-b border-gray-200 space-x-8"
			>
				<button
					on:click={() => (activeTab = 'canada')}
					type="button"
					class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab === 'canada'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/canada.svg" alt="mexico flag" class="w-5 mr-2" />
					Canada
				</button>
				<button
					on:click={() => (activeTab = 'usa')}
					type="button"
					class="text-tiny px-2 md:px-6 flex whitespace-nowrap items-center py-3 capitalize {activeTab ===
					'usa'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/usa.svg" alt="usa flag" class="w-5 mr-2" />
					United States
				</button>
				<button
					on:click={() => (activeTab = 'france')}
					type="button"
					class="text-tiny px-2 md:px-6 flex whitespace-nowrap items-center py-3 capitalize {activeTab ===
					'france'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/france.svg" alt="france flag" class="w-5 mr-2" />
					France
				</button>
				<button
					on:click={() => (activeTab = 'spain')}
					type="button"
					class="text-tiny px-2 md:px-6  flex items-center py-3 capitalize {activeTab === 'spain'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/spain.svg" alt="spain flag" class="w-5 mr-2" />
					Spain
				</button>

				<button
					on:click={() => (activeTab = 'china')}
					type="button"
					class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab === 'china'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/china.svg" alt="china flag" class="w-5 mr-2" />
					China
				</button>
				<button
					on:click={() => (activeTab = 'italy')}
					type="button"
					class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab === 'italy'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/italy.svg" alt="italy flag" class="w-5 mr-2" />
					Italy
				</button>
				<button
					on:click={() => (activeTab = 'turkey')}
					type="button"
					class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab === 'turkey'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/turkey.svg" alt="turkey flag" class="w-5 mr-2" />
					Turkey
				</button>
				<button
					on:click={() => (activeTab = 'germany')}
					type="button"
					class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab === 'germany'
						? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
						: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
				>
					<img src="icons/countries/germany.svg" alt="germany flag" class="w-5 mr-2" />
					Germany
				</button>
			</nav>

			<!-- END main vacations tab -->

			<!-- BEGIN vacations sub tab -->
			<div class="py-1 mb-2 lg:pb-4 ">
				{#if activeTab === 'canada'}
					<CanadaSubTabs />
				{/if}
				{#if activeTab === 'usa'}
					<UsaSubTabs />
				{/if}
				{#if activeTab === 'france'}
					<FranceSubTabs />
				{/if}
				{#if activeTab === 'spain'}
					<SpainSubTabs />
				{/if}
				{#if activeTab === 'china'}
					<ChinaSubTabs />
				{/if}
				{#if activeTab === 'italy'}
					<ItalySubTabs />
				{/if}
				{#if activeTab === 'turkey'}
					<TurkeySubTabs />
				{/if}
				{#if activeTab === 'germany'}
					<GermanySubTabs />
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
