<script>
	import MobMenuBtn from './MobMenuBtn.svelte';
	import Logo from './Logo.svelte';
	import NavMenuItems from './NavMenuItems.svelte';
	import MobileMenuItems from './MobileMenuItems.svelte';
	import RightNavMenuItems from './RightNavMenuItems.svelte';
	import ProfileDropdown from './ProfileDropdown.svelte';
</script>

<!-- Main navigation -->
<nav class="bg-white shadow relative z-10">
	<div class="max-w-7xl mx-auto py-2">
		<div class="flex flex-wrap justify-between items-center ">
			<div class="flex pl-4">
				<!-- Nav logo -->
				<Logo />

				<!-- Nav Menu Items -->
				<div class="hidden lg:flex items-center gap-1 px-4">
					<NavMenuItems />
				</div>
			</div>

			<div class="inline-flex items-center py-2 text-sm text-gray-900 rounded-lg lg:hidden pr-4">
				<!-- Mobile menu button -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-white mr-4 bg-rose-600 rounded-full"
					fill="currentColor"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
					/>
				</svg>
				<ProfileDropdown />
				<MobMenuBtn />
			</div>

			<div class="hidden lg:flex items-center gap-1 sm:gap-8 px-6">
				<RightNavMenuItems />
			</div>
		</div>
	</div>
</nav>
