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
			<div class="-mt-28 justify-self-end ml-8">
				<LottieVacations />
			</div>
		</div>
	</div>
</div>
