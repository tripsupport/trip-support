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
				<ProfileDropdown />
				<MobMenuBtn />
			</div>

			<div class="hidden lg:flex items-center gap-1 sm:gap-8 px-6">
				<RightNavMenuItems />
			</div>
		</div>
	</div>
</nav>
