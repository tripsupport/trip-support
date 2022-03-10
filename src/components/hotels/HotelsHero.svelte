<script>
	import LottieHotels from '../LottieHotels.svelte';
</script>

<div class="mx-auto max-w-7xl">
	<div class="grid grid-cols-1 sm:grid-cols-12 sm:h-[400px]">
		<div class="col-span-1 sm:col-span-6">
			<div class="lg:pt-12 pb-6 sm:pb-2 px-4 sm:px-8 z-10 ">
				<h1
					class="mt-4 text-2xl tracking-tight font-extrabold text-pblue-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl "
				>
					<span class="flex">Longing for a Getaway?</span>
				</h1>
				<p class="prose text-sm sm:text-tiny max-w-sm">
					You’re in luck—we offer top hotels wherever you’re headed, from boutique and luxury to
					beachfront accommodations and hotels with pools.
				</p>
			</div>
		</div>

		<!-- positioning of the blue buildings -->
		<div class="hidden sm:flex col-span-6">
			<div class=" -mt-[192px] mr-[44px]">
				<LottieHotels />
			</div>
		</div>
		<!-- <div class="hidden sm:flex col-span-6">
			<div class="-mt-10">
				<LottieHotels />
			</div>
		</div> -->
	</div>
</div>
