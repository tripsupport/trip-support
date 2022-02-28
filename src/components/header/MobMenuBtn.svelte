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
	<!-- Mobile menu button -->
	<button
		type="button"
		class="inline-flex items-center justify-center ml-2 text-slate-700 hover:text-slate-900 "
		bind:this={btnDropdownRef}
		on:click={toggleDropdown}
	>
		<span class="sr-only">Open main menu</span>
		<!--
								Icon when menu is closed.
	
								Heroicon name: outline/menu
	
								Menu open: "hidden", Menu closed: "block"
							-->
		<svg
			class="block h-6 w-6"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
		<!--
								Icon when menu is open.
	
								Heroicon name: outline/x
	
								Menu open: "block", Menu closed: "hidden"
							-->
		<svg
			class="hidden h-6 w-6"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	</button>
	<!-- Mobile menu, show/hide based on menu state. -->
	<div
		bind:this={popoverDropdownRef}
		class="bg-white text-tiny font-medium z-50 float-left py-2 list-none text-left rounded shadow-lg w-56 {dropdownPopoverShow
			? 'block'
			: 'hidden'}"
	>
		<div class="pt-2 pb-3 space-y-1">
			<!-- Current: "bg-pblue-50 border-pblue-500 text-pblue-700", Default: "border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
			<a
				href="flights"
				class="bg-pblue-50 border-pblue-500 text-pblue-900 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"
				>Flights</a
			>
			<a
				href="vacations"
				class="border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"
				>Vacations</a
			>
			<a
				href="hotels"
				class="border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny  font-medium sm:pl-5 sm:pr-6"
				>Hotels</a
			>
			<a
				href="javascript:void(0)"
				class="border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny  font-medium sm:pl-5 sm:pr-6"
				>Hotel + Flight</a
			>
			<a
				href="javascript:void(0)"
				class="border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny  font-medium sm:pl-5 sm:pr-6"
				>Things to do</a
			>
		</div>
	</div>
</OutClick>
