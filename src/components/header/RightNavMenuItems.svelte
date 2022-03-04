<script>
	// popper dropdown
	// library for creating dropdown menu appear on click
	import { createPopper } from '@popperjs/core';

	// core components

	let dropdownPopoverShow = false;

	let btnDropdownRef;
	let popoverDropdownRef;

	const toggleDropdown = () => {
		if (dropdownPopoverShow) {
			dropdownPopoverShow = false;
		} else {
			dropdownPopoverShow = true;
			createPopper(btnDropdownRef, popoverDropdownRef, {
				placement: 'bottom-end'
			});
		}
	};

	// outclick
	import OutClick from 'svelte-outclick';

	const hideDropdown = () => {
		if (dropdownPopoverShow) {
			dropdownPopoverShow = false;
		}
	};
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
	<OutClick on:outclick={hideDropdown}>
		<!-- Profile dropdown -->
		<div class="mx-2 relative">
			<div>
				<button
					type="button"
					class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500 ease-linear transition-all duration-150"
					aria-expanded="false"
					aria-haspopup="true"
					data-collapse-toggle="user-profile"
					bind:this={btnDropdownRef}
					on:click={toggleDropdown}
				>
					<span class="sr-only">Open user menu</span>
					<img
						class="h-8 w-8 rounded-full"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</button>
			</div>
			<div
				bind:this={popoverDropdownRef}
				class="bg-white text-base list-none text-left rounded shadow-lg w-96 {dropdownPopoverShow
					? 'block'
					: 'hidden'}"
			>
				<form class="space-y-4 p-6" action="#" method="POST">
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700">
							Email address
						</label>
						<div class="mt-1">
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="off"
								required
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"
							/>
						</div>
					</div>

					<div>
						<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
						<div class="mt-1">
							<input
								id="password"
								name="password"
								type="password"
								autocomplete="off"
								required
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"
							/>
						</div>
					</div>

					<div class="flex items-center justify-between">
						<div class="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								class="h-4 w-4 text-pblue-600 focus:ring-pblue-500 border-gray-300 rounded"
							/>
							<label for="remember-me" class="ml-2 block text-sm text-gray-900">
								Remember me
							</label>
						</div>

						<div class="text-sm">
							<a href="#" class="font-medium text-pblue-600 hover:text-pblue-500">
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-pblue-800 hover:bg-pblue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
							>Sign in</button
						>
					</div>
				</form>
			</div>
		</div>
	</OutClick>
</div>
