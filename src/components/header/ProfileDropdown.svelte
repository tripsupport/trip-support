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
	<div class="mx-2 relative ">
		<div>
			<button
				type="button"
				class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 ease-linear transition-all duration-150"
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
			class=" bg-white text-base z-[5] py-2 list-none w-[100vw] rounded shadow-lg   {dropdownPopoverShow
				? 'block'
				: 'hidden'}"
		>
			<a
				href="flights"
				class="bg-pblue-50 border-rose-600 text-pblue-900 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"
				>Profile</a
			>
			<a
				href="vacations"
				class="border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"
				>Settings</a
			>
			<a
				href="vacations"
				class="border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"
				>Sign out</a
			>
		</div>
	</div>
</OutClick>
