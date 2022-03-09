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
	<div class="grid grid-cols-1 sm:grid-cols-12 h-[400px]">
		<div class="col-span-1 sm:col-span-6">
			<div class="lg:pt-12 pb-2 px-4 sm:px-8 z-10 ">
				<h1
					class="mt-4 text-2xl tracking-tight font-extrabold text-pblue-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl "
				>
					<span class="flex">Amazing Flight Deals</span>
				</h1>
				<p class="prose max-w-sm">
					More options, our best prices, less headaches. Secure your ticket with a small deposit.
				</p>
			</div>
		</div>

		<div class="hidden sm:flex col-span-6">
			<div class=" justify-self-end ">
				<LottieFlights />
			</div>
		</div>
	</div>
</div>
