<script>
	import MobMenuBtn from './MobMenuBtn.svelte';
	import Logo from './Logo.svelte';
	import NavMenuItems from './NavMenuItems.svelte';
	import MobileMenuItems from './MobileMenuItems.svelte';
	import RightNavMenuItems from './RightNavMenuItems.svelte';
	import ProfileDropdown from './ProfileDropdown.svelte';
</script>

<!-- Main navigation -->
<nav class="bg-white shadow relative z-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-2">
		<div class="flex container flex-wrap justify-between items-center ">
			<div class="flex">
				<!-- Nav logo -->
				<Logo />

				<!-- Nav Menu Items -->
				<div class="hidden lg:flex items-center gap-1 ">
					<NavMenuItems />
				</div>
			</div>

			<div class="inline-flex items-center p-2 text-sm text-gray-900 rounded-lg lg:hidden">
				<!-- Mobile menu button -->
				<ProfileDropdown />
				<MobMenuBtn />
			</div>

			<div class="hidden lg:flex items-center gap-1 sm:gap-8 ">
				<RightNavMenuItems />
			</div>
		</div>
	</div>

	<MobileMenuItems />
</nav>
