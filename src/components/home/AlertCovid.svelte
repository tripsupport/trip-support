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
				<span class="text-xz my-auto text-white"
					>All air passengers must comply with COVID-19 travel and vaccination requirements imposed
					by the Government of Canada.</span
				>
			</div>

			<div class="lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
				<a href="javascript:void(0)" class="-m-3 p-3 flex items-center ">
					<!-- Heroicon name: outline/information-circle -->
					<svg
						class="sm:hidden flex-shrink-0 h-4 w-4 text-gray-100"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
					<a
						href="javascript:void(0)"
						class="ml-4 sm:text-xz text-xs font-medium text-white hover:text-gray-100"
						>Check Covid-19 Restrictions</a
					>
				</a>
			</div>
		</div>
	</div>
</nav>
