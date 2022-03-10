<script>
	import LottieVacations from '../LottieVacations.svelte';
</script>

<div class="mx-auto max-w-7xl">
	<div class="grid grid-cols-1 sm:grid-cols-12 sm:h-[400px]">
		<div class="col-span-1 sm:col-span-6">
			<div class="lg:pt-12 pb-4 sm:pb-2 px-4 sm:px-8 z-10 ">
				<h1
					class="mt-4 text-2xl tracking-tight font-extrabold text-pblue-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl "
				>
					<span class="flex">Search Vacation packages</span>
				</h1>
				<p class="prose text-sm sm:text-tiny max-w-sm">
					Looking for vacations? Save now with packages that include flight and vacations.
				</p>
			</div>
		</div>

		<div class="hidden sm:flex col-span-6">
			<div class="relative z-[3] pb-8 bg-white sm:pb-16 md:pb-20">
				<svg
					class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
					fill="currentColor"
					viewBox="0 0 100 100"
					preserveAspectRatio="none"
					aria-hidden="true"
				>
					<polygon points="50,0 100,0 50,100 0,100" />
				</svg>
			</div>
			<div class="-mt-10">
				<img
					class="hidden h-56 max-w-7xl object-cover sm:h-72 md:h-full lg:block lg:w-full lg:h-full"
					src="images/home/flights-section.jpg"
					alt=""
				/>
			</div>
		</div>
	</div>
</div>
