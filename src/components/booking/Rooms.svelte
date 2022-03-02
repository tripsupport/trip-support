<script>
	$: countRoom = 1;

	function incRoom() {
		if (countRoom > 3) {
			return;
		}
		countRoom += 1;
	}

	function decRoom() {
		if (countRoom == 0) {
			return;
		} else {
			countRoom -= 1;
		}
	}

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

	// error
	let showError = true;
	const toggleError = () => {
		if (showError == true) {
			return;
		}
		showError = !showError;
	};
</script>

<OutClick on:outclick={hideDropdown}>
	<div class="flex flex-wrap">
		<div class="relative inline-flex align-middle items-center w-full">
			<button
				class="flex text-pblue-900 font-semibold capitalize text-sm px-2 py-0  outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150"
				type="button"
				bind:this={btnDropdownRef}
				on:click={toggleDropdown}
			>
				{countRoom} Rooms
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
				class="bg-white text-base z-30 float-left py-2 list-none text-left rounded shadow-lg mt-4 w-96 {dropdownPopoverShow
					? 'block'
					: 'hidden'}"
			>
				<div class="px-4 py-3 sm:px-6">
					<h3 class="text-lg leading-6 font-medium text-gray-900">Rooms</h3>
					<p class="mt-1 max-w-2xl text-sz text-gray-500 font-light">Select the number of rooms</p>
				</div>

				<div class="border-t text-left border-gray-200">
					<!-- Begin error -->
					{#if showError}
						<div class="bg-rose-50 border-l-4 border-rose-400 p-4 -mt-1">
							<div class="flex">
								<div class="flex-shrink-0">
									<!-- Heroicon name: solid/exclamation -->
									<svg
										class="h-5 w-5 text-rose-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<div class="ml-3">
									<p class="text-sz text-rose-700">
										Sorry, the adult occupancy must be consistent for all rooms in an online
										booking.
									</p>
								</div>
							</div>
						</div>
					{/if}
					<!-- End error -->
					<div class="px-4 py-4 sm:px-6">
						<dl class="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">
							<div class="sm:col-span-1 my-auto">
								<dt class="text-tiny font-medium text-gray-900">Rooms</dt>
								<dd class="text-sz font-normal text-gray-500">Maximum 4</dd>
							</div>
							<div class="sm:col-span-1">
								<div class="inline-flex my-2">
									<button
										type="button"
										class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-l active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300   active:bg-white active:border-white active:shadow-none"
										on:click={decRoom}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="inline-block w-5 h-5 text-rose-500"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
												clip-rule="evenodd"
											/>
										</svg>
									</button>
									<button
										type="button"
										class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-2 leading-6 active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300   active:bg-white active:border-white active:shadow-none"
									>
										<span>{countRoom}</span>
									</button>
									<button
										type="button"
										class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-r active:z-1 focus:z-1 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300   active:bg-white active:border-white active:shadow-none"
										on:click={incRoom}
									>
										<svg
											class="hi-solid hi-plus inline-block w-5 h-5 text-emerald-500"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
											><path
												fill-rule="evenodd"
												d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
												clip-rule="evenodd"
											/></svg
										>
									</button>
								</div>
							</div>
							<!-- END Adult -->
						</dl>
					</div>
				</div>
				<div class="flex items-center justify-center mt-0 mb-6">
					<button
						type="button"
						class="w-full mx-4 items-center content-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-pblue-900 hover:bg-pblue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
						aria-expanded={dropdownPopoverShow ? 'true' : 'false'}
						on:click={() => (dropdownPopoverShow = !dropdownPopoverShow)}>Done</button
					>
				</div>
			</div>
		</div>
	</div>
</OutClick>
