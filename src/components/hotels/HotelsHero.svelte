<script>
	import LottieHotels from '../LottieHotels.svelte';
</script>

<div class="mx-auto max-w-7xl">
	<div class="grid grid-cols-1 md:grid-cols-12 h-[200px] md:h-[350px] lg:h-[400px]">
		<div class="col-span-1 sm:col-span-6">
			<div class="lg:pt-12 pb-6 sm:pb-2 px-4 sm:px-8">
				<h1
					class="bg-gradient-to-r from-pblue-900 to-pred-900 bg-clip-text text-transparent text-3xl md:text-3xl lg:text-4xl mt-4 tracking-tight font-extrabold text-pblue-900 sm:mt-5 sm:text-4xl lg:mt-6 xl:text-4xxl capitalize"
				>
					<span class="flex">Longing for a Getaway?</span>
				</h1>
				<p class="prose text-sm sm:text-lg md:max-w-sm font-semibold text-slate-700">
					We will find the hotel that best suits you
				</p>
			</div>
		</div>

		<!-- positioning of the blue buildings -->
		<div class="hidden md:flex col-span-6">
			<div class=" xl:-mt-[192px] lg:-mt-[120px] md:-mt-[30px] mr-[44px]">
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
