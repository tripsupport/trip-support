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
				<a
					href="/"
					type="button"
					class="inline-flex items-center p-2 border mr-4 border-transparent rounded-full shadow-sm text-white bg-pblue-800 hover:bg-pblue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
				>
					<!-- Heroicon name: solid/plus-sm -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
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
