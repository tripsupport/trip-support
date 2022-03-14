<!-- <script>
	import LottieFlights from '../LottieFlights.svelte';
</script>

<div class="mx-auto max-w-7xl h-[422px]">
	<div class="hidden sm:flex justify-between ">
		<div class="lg:pt-16 pb-2 px-4 sm:px-8 z-10 w-xl">
			<h1
				class="mt-4 text-2xl tracking-tight font-extrabold text-pblue-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl "
			>
				<span class="flex">Amazing Flight Deals</span>
			</h1>
			<p class="prose max-w-sm">
				More options, our best prices, less headaches. Secure your ticket with a small deposit.
			</p>
		</div>

		<div class="relative w-[750px] ">
			<LottieFlights />
		</div>
	</div>
</div> -->
<script>
	import LottieFlights from '../LottieFlights.svelte';
</script>

<div class="mx-auto max-w-7xl">
	<div class="grid grid-cols-1 md:grid-cols-12 h-[200px] md:h-[350px] lg:h-[400px]">
		<div class="col-span-1 sm:col-span-6">
			<div class="lg:pt-12 pb-2 px-4 sm:px-8 z-10 ">
				<h1
					class="bg-gradient-to-r from-pblue-900 to-pred-900 bg-clip-text text-transparent text-3xl md:text-3xl lg:text-4xl mt-4 tracking-tight font-extrabold text-pblue-900 sm:mt-5 sm:text-4xl lg:mt-6 xl:text-4xxl capitalize"
				>
					Amazing Flight Deals
				</h1>
				<p class="hidden md:flex prose text-sm sm:text-lg max-w-sm font-semibold text-slate-700">
					More options, our best prices, less headaches. Secure your ticket now.
				</p>
			</div>
		</div>

		<div class="hidden md:flex sm:col-span-6">
			<div class=" justify-self-end ">
				<LottieFlights />
			</div>
		</div>

		<div class="md:hidden absolute top-32 col-span-1">
			<LottieFlights />
		</div>
	</div>
</div>
