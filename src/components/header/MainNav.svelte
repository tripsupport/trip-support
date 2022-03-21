<script>
	import MobMenuBtn from './MobMenuBtn.svelte';

	import RightNavMenuItems from './RightNavMenuItems.svelte';
	import ProfileDropdown from './ProfileDropdown.svelte';
	import Signup from './Signup.svelte';

	let active = 1;

	function toggleActive(num) {
		active = num;
	}
</script>

<!-- Main navigation -->
<nav class="bg-white shadow relative z-[2] mb-1">
	<div class="max-w-7xl mx-auto py-2">
		<div class="flex flex-wrap justify-between items-center ">
			<div class="flex pl-4">
				<!-- Nav logo -->
				<a
					sveltekit:prefetch
					href="/"
					class="flex-shrink-0 flex place-items-start"
					on:click={() => toggleActive(1)}
				>
					<img class=" h-9 sm:h-11 w-auto" src="logo.svg" alt="Trip Support Logo" />
				</a>

				<!-- Nav Menu Items -->
				<div class="hidden lg:flex items-center gap-1 px-4">
					<!-- Nav menu items -->
					<div class="hidden md:ml-6 lg:flex md:space-x-8">
						<a
							sveltekit:prefetch
							href="/flights"
							class="text-tiny inline-flex items-center px-1 pt-1 sm:ml-4  hover:text-rose-600
								{active === 2 ? 'text-rose-600 font-semibold' : 'text-gray-900 font-medium'}
								"
							on:click={() => toggleActive(2)}
						>
							Flights
						</a>
						<a
							sveltekit:prefetch
							href="/vacations"
							class="text-tiny inline-flex items-center px-1 pt-1 sm:ml-4 hover:text-rose-600
								{active === 3 ? 'text-rose-600 font-semibold' : 'text-gray-900 font-medium'}
								"
							on:click={() => toggleActive(3)}
						>
							Vacations
						</a>
						<a
							sveltekit:prefetch
							href="/hotels"
							class="text-tiny inline-flex items-center px-1 pt-1 sm:ml-4 hover:text-rose-600
								{active === 4 ? 'text-rose-600 font-semibold' : 'text-gray-900 font-medium'}
								"
							on:click={() => toggleActive(4)}
						>
							Hotels
						</a>
					</div>
				</div>
			</div>

			<div class="inline-flex items-center py-2 text-sm text-gray-900 rounded-lg lg:hidden pr-4">
				<a href="tel:1-855-606-0606" class="text-pblue-900 hover:text-rose-600 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-auto mr-2"
						fill="currentColor"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="none"
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						/>
					</svg>
				</a>
				<Signup />
				<ProfileDropdown />
				<MobMenuBtn />
			</div>

			<div class="hidden lg:flex items-center gap-1 sm:gap-8 px-6">
				<RightNavMenuItems />
			</div>
		</div>
	</div>
</nav>
