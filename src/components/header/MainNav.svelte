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
				<a href="javascript:void(0)" class="text-pblue-900 hover:text-rose-600 ">
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
				<ProfileDropdown />
				<MobMenuBtn />
			</div>

			<div class="hidden lg:flex items-center gap-1 sm:gap-8 px-6">
				<RightNavMenuItems />
			</div>
		</div>
	</div>
</nav>
