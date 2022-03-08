<script>
	import BookingWidget from '../components/booking/BookingWidget.svelte';
	import MexicoSubTabs from '../components/vacations/MexicoSubTabs.svelte';
	import CubaSubTabs from '../components/vacations/CubaSubTabs.svelte';
	// Tabs
	let activeTab = 'mexico';
</script>

<div class="mx-auto max-w-7xl ">
	<div class="hidden sm:flex gap-x-10  ">
		<div class="lg:pt-16 pb-2 px-4 sm:px-6 z-10 max-w-2xl">
			<h1
				class="mt-4text-2xl tracking-tight font-extrabold text-pblue-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl "
			>
				<span class="flex">Vacation packages</span>
			</h1>
			<p class="prose max-w-sm">
				Looking for vacations? Save now with packages that include flight and vacations
			</p>
		</div>

		<div aria-hidden="true" class="relative w-2/3">
			<img
				src="images/vacations/vacation-bg.jpg"
				alt=""
				class="w-full h-96 object-center object-cover"
			/>
			<div class="absolute inset-0 -top-30 bg-gradient-to-t from-white" />
		</div>
	</div>
</div>

<BookingWidget />

<div class="mx-auto max-w-7xl p-6 ">
	<!-- Heading -->
	<section class="relative mb-6">
		<div class="text-left">
			<div class="sm:flex sm:items-baseline sm:justify-between">
				<h1 class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
					<span class="block xl:inline">Popular Vacations</span>
					<!-- <span class="block text-indigo-600 xl:inline">Book Now</span> -->
				</h1>
			</div>
			<p
				class="mt-2 text-md text-gray-500 sm:mt-3 sm:text-md sm:max-w-prose md:mt-3 md:text-md lg:mx-0"
			>
				Special offers from resorts and hotels across the Americas
			</p>
		</div>
	</section>
	<section class="relative" aria-labelledby="contact-heading">
		<div class="flex flex-col rounded-xl bg-white  ">
			<!-- Card -->

			<!-- Countries Tab -->
			<div class="py-2 space-x-2 w-full">
				<nav
					class="flex-1 sm:flex items-center sm:justify-start justify-between border-b border-gray-200"
				>
					<button
						on:click={() => (activeTab = 'mexico')}
						type="button"
						class="text-tiny px-2 md:px-6 -mb-px flex items-center py-4 capitalize {activeTab ===
						'mexico'
							? 'text-pblue-800 border-b border-pblue-800 font-bold'
							: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
					>
						<img src="icons/countries/mexico.svg" alt="mexico flag" class="w-5 mr-1" />
						Mexico
					</button>
					<button
						on:click={() => (activeTab = 'cuba')}
						type="button"
						class="text-tiny px-2 md:px-6 -mb-px flex items-center py-4 capitalize {activeTab ===
						'cuba'
							? 'text-pblue-800 border-b border-pblue-800 font-bold'
							: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
					>
						<img src="icons/countries/cuba.svg" alt="cuba flag" class="w-5 mr-1" />
						Cuba
					</button>
					<button
						on:click={() => (activeTab = 'dominican-republic')}
						type="button"
						class="text-tiny px-2 md:px-6 -mb-px flex items-center py-4 capitalize {activeTab ===
						'dominican-republic'
							? 'text-pblue-800 border-b border-pblue-800 font-bold'
							: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
					>
						<img
							src="icons/countries/dominican-republic.svg"
							alt="dominican-republic flag"
							class="w-5 mr-1"
						/>
						Dominican Republic
					</button>
					<button
						on:click={() => (activeTab = 'jamaica')}
						type="button"
						class="text-tiny px-2 md:px-6 -mb-px flex items-center py-4 capitalize {activeTab ===
						'jamaica'
							? 'text-pblue-800 border-b border-pblue-800 font-bold'
							: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
					>
						<img src="icons/countries/jamaica.svg" alt="jamaica flag" class="w-5 mr-1" />
						Jamaica
					</button>

					<button
						on:click={() => (activeTab = 'florida')}
						type="button"
						class="text-tiny px-2 md:px-6 -mb-px flex items-center py-4 capitalize {activeTab ===
						'florida'
							? 'text-pblue-800 border-b border-pblue-800 font-bold'
							: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
					>
						<img src="icons/countries/usa.svg" alt="usa flag" class="w-5 mr-1" />
						Florida
					</button>
					<button
						on:click={() => (activeTab = 'hawaii')}
						type="button"
						class="text-tiny px-2 md:px-6 -mb-px flex items-center py-4 capitalize {activeTab ===
						'hawaii'
							? 'text-pblue-800 border-b border-pblue-800 font-bold'
							: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
					>
						<img src="icons/countries/hawaii.svg" alt="mexico flag" class="w-5 mr-1" />
						Hawaii
					</button>
					<button
						on:click={() => (activeTab = 'caribbean')}
						type="button"
						class="text-tiny px-2 md:px-6 -mb-px flex items-center py-4 capitalize {activeTab ===
						'caribbean'
							? 'text-pblue-800 border-b border-pblue-800 font-bold'
							: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
					>
						Caribbean
					</button>
				</nav>
			</div>
			<!-- END main vacations tab -->

			<!-- BEGIN vacations sub tab -->
			<div class="py-1 mb-2 lg:pb-4 ">
				{#if activeTab === 'mexico'}
					<MexicoSubTabs />
				{/if}
				{#if activeTab === 'cuba'}
					<CubaSubTabs />
				{/if}
				<!-- add rest here -->
			</div>
			<!-- END Card -->
		</div>
	</section>
</div>

<!-- Roundtrip Tab -->
<!-- {#if activeSubTab === 'roundTrip'}
	<div class="hidden sm:block">
		<RoundTrip />
	</div>
	<div class="block sm:hidden">
		<RoundTripMobForm />
	</div>
	<div class="grid grid-cols-6 justify-self-start place-content-between md:gap-4 items-center">
		<div class="col-span-6 md:col-span-4">
			<SearchOptions />
		</div>
		<div class="col-span-6 md:col-span-2 w-full md:justify-self-end mt-4 md:mt-0">
			<RoundtripSearchBtn />
		</div>
	</div>
{/if} -->
