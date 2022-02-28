<script>
	// import { fly } from 'svelte/transition';

	// let dropdownOpen = false;

	// import { clickOutside } from '../clickOutside';

	// function handleClickOutside(event) {
	// 	dropdownOpen = !dropdownOpen;
	// }

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
</script>

<div class="flex flex-wrap">
	<div class="w-full sm:w-6/12 md:w-4/12 px-4">
		<div class="relative inline-flex align-middle items-center w-full">
			<button
				class="flex text-pblue-900 font-bold capitalize text-sm px-2 py-0  outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150"
				type="button"
				bind:this={btnDropdownRef}
				on:click={toggleDropdown}
			>
				Economy
				<svg
					class="hi-solid hi-chevron-down inline-block w-5 h-5 opacity-100"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
			<div
				bind:this={popoverDropdownRef}
				class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 w-56 {dropdownPopoverShow
					? 'block'
					: 'hidden'}"
			>
				<a
					href="#pablo"
					class="text-sm py-2 px-4 font-medium block w-full whitespace-no-wrap text-gray-900 items-center bg-gray-100 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
				>
					Economy
				</a>
				<a
					href="#pablo"
					class="text-sm py-2 px-4 font-medium block w-full whitespace-no-wrap bg-transparent text-gray-700 items-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
				>
					Premium Economy
				</a>
				<a
					href="#pablo"
					class="text-sm py-2 px-4 font-medium block w-full whitespace-no-wrap bg-transparent text-gray-700 items-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
				>
					Business Class
				</a>
				<a
					href="#pablo"
					class="text-sm py-2 px-4 font-medium block w-full whitespace-no-wrap bg-transparent text-gray-700 items-center hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
				>
					First Class
				</a>
			</div>
		</div>
	</div>
</div>
<!-- END Popperjs -->

<!-- PREVIOUS -->
<!-- <button
	type="button"
	class="inline-flex justify-center items-center font-semibold text-sm  text-pblue-700 hover:text-pblue-900"
	id="tk-dropdown-simple"
	aria-haspopup="true"
	aria-expanded={dropdownOpen ? 'true' : 'false'}
	on:click={() => (dropdownOpen = !dropdownOpen)}
>
	<span>Economy</span>
	<svg
		class="hi-solid hi-chevron-down inline-block w-5 h-5 opacity-100"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
			clip-rule="evenodd"
		/></svg
	>
</button> -->
<!-- END Dropdown Toggle Button -->

<!-- Dropdown -->
<!-- {#if dropdownOpen}
	<div
		role="menu"
		aria-labelledby="tk-dropdown-simple"
		class="absolute mt-3 w-56 shadow-xl rounded z-20 "
		use:clickOutside
		on:click_outside={handleClickOutside}
	>
		<div class="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100">
			<div class="p-2 space-y-1">
				<a
					role="menuitem"
					href="/"
					class="block items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
				>
					Economy
				</a>
				<a
					role="menuitem"
					href="/"
					class="block items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
				>
					Premium Economy
				</a>
				<a
					role="menuitem"
					href="/"
					class="block items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
				>
					Business Class
				</a>
				<a
					role="menuitem"
					href="/"
					class="block items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
				>
					First Class
				</a>
			</div>
		</div>
	</div>
{/if} -->
