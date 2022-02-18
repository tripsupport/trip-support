<script>
	import MobMenuBtn from './MobMenuBtn.svelte';
	import Logo from './Logo.svelte';
	import NavMenuItems from './NavMenuItems.svelte';
	import MobileMenuItems from './MobileMenuItems.svelte';
	import RightNavMenuItems from './RightNavMenuItems.svelte';
</script>

<!-- Main navigation -->
<nav class="bg-white shadow relative z-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex">
				<div class="-ml-2 mr-2 flex items-center md:hidden">
					<!-- Mobile menu button -->
					<MobMenuBtn />
				</div>
				<!-- Nav logo -->
				<Logo />
				<!-- Nav Menu Items -->
				<NavMenuItems />
			</div>

			<div class="flex items-center gap-1 sm:gap-8 ">
				<RightNavMenuItems />
			</div>
		</div>
	</div>

	<MobileMenuItems />
</nav>
