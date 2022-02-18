<script>
	// Only import what you need!
	import { Icon, Exclamation } from 'svelte-hero-icons';
</script>

<nav aria-label="Top" class="relative z-10">
	<!-- Top navigation -->
	<div class="bg-gray-900">
		<div class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
			<div class="hidden sm:flex">
				<Icon src={Exclamation} class="h-6 text-slate-50 w-5 mr-2" />
				<span class="text-sm my-auto"
					>All air passengers must comply with COVID-19 travel and vaccination requirements imposed
					by the Government of Canada.</span
				>
			</div>

			<div class=" lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
				<a href="#" class="text-sm font-medium text-white hover:text-gray-100"
					>Check Covid-19 Restrictions</a
				>
			</div>
		</div>
	</div>
</nav>
