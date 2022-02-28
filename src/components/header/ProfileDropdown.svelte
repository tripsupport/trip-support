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
				placement: 'bottom-start'
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
			class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 w-56 {dropdownPopoverShow
				? 'block'
				: 'hidden'}"
		>
			<a
				href="javascript:void(0)"
				class="block px-4 py-2 text-tiny text-gray-900"
				role="menuitem"
				tabindex="-1"
				id="user-menu-item-0">Your Profile</a
			>
			<a
				href="javascript:void(0)"
				class="block px-4 py-2 text-tiny text-gray-900"
				role="menuitem"
				tabindex="-1"
				id="user-menu-item-1">Settings</a
			>
			<a
				href="javascript:void(0)"
				class="block px-4 py-2 text-tiny text-gray-900"
				role="menuitem"
				tabindex="-1"
				id="user-menu-item-2">Sign out</a
			>
		</div>
	</div>
</OutClick>
