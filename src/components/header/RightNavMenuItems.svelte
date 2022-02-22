<script>
	import ProfileDropdown from './ProfileDropdown.svelte';
</script>

<!-- Language selection -->
<div class="flex-shrink-0 flex">
	<a href="javascript:void(0)" class="text-slate-900 hover:text-rose-600 flex items-center">
		<img
			src="https://tailwindui.com/img/flags/flag-canada.svg"
			alt=""
			class="w-5 h-auto block flex-shrink-0"
		/>
		<span class="ml-3 block text-tiny font-medium"> Francais </span>
		<span class="sr-only">, change language</span>
	</a>
</div>

<!-- Language selection -->
<div class="flex-shrink-0 ">
	<a href="javascript:void(0)" class="text-slate-900 hover:text-rose-600 flex items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-auto mr-0"
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

		<span class="ml-3 block text-tiny font-medium"> Contact Us </span>
		<span class="sr-only">contact us</span>
	</a>
</div>
<span class="h-6 w-px bg-gray-200" aria-hidden="true" />
<div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
	<!-- currently hidden -->
	<button
		type="button"
		class="hidden bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
		data-collapse-toggle="user-profile"
	>
		<span class="sr-only">User login</span>
		<!-- Heroicon name: user-circle -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	</button>
	<!-- Dropdown for Uer login -->
	<!-- Profile dropdown -->
	<div class="mx-2 relative">
		<div>
			<button
				type="button"
				class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
				aria-expanded="false"
				aria-haspopup="true"
				data-collapse-toggle="profile"
			>
				<span class="sr-only">Open user menu</span>
				<img
					class="h-8 w-8 rounded-full"
					src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
					alt=""
				/>
			</button>
		</div>

		<!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
		<!-- currently hidden -->
		<div
			class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			id="profile"
			aria-orientation="vertical"
			aria-labelledby="user-menu-button"
			tabindex="-1"
		>
			<!-- Active: "bg-gray-100", Not Active: "" -->
			<a
				href="javascript:void(0)"
				class="block px-4 py-2 text-tiny font-medium text-gray-700"
				role="menuitem"
				tabindex="-1"
				id="user-menu-item-0">Your Profile</a
			>
			<a
				href="javascript:void(0)"
				class="block px-4 py-2 text-tiny font-medium text-gray-700"
				role="menuitem"
				tabindex="-1"
				id="user-menu-item-1">Settings</a
			>
			<a
				href="javascript:void(0)"
				class="block px-4 py-2 text-tiny font-medium text-gray-700"
				role="menuitem"
				tabindex="-1"
				id="user-menu-item-2">Sign out</a
			>
		</div>
	</div>
</div>
