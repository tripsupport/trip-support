<script>
	// Only import what you need!
	import { Icon, Exclamation } from 'svelte-hero-icons';
</script>

<!-- Trip Support Benefit Cards -->
<div class="bg-gray-900 relative z-10">
	<div
		class="sm:mx-auto grid max-w-md gap-4 sm:max-w-lg sm:px-8 lg:max-w-7xl lg:grid-cols-1 lg:px-0 "
	>
		<div class="alert bg-gray-900 rounded-none shadow-none ">
			<div class="hidden sm:flex">
				<Icon src={Exclamation} class="h-6 text-slate-50 w-5" />
				<span class="text-sm "
					>All air passengers must comply with COVID-19 travel and vaccination requirements imposed
					by the Government of Canada.</span
				>
			</div>
			<div class="flex-none">
				<button class="btn btn-sm btn-ghost text-xz">Check Coivd-19 Restrictions</button>
			</div>
		</div>
	</div>
</div>
