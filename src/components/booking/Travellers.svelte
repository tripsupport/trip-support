<script>
	$: countAdult = 1;
	function incAdult() {
		countAdult += 1;
	}

	function decAdult() {
		if (countAdult == 0) {
			return;
		} else {
			countAdult -= 1;
		}
	}

	$: countChild = 0;
	function incChild() {
		countChild += 1;
	}

	function decChild() {
		if (countChild == 0) {
			return;
		} else {
			countChild -= 1;
		}
	}

	$: countInfant = 0;
	function incInfant() {
		countInfant += 1;
	}

	function decInfant() {
		if (countInfant == 0) {
			return;
		} else {
			countInfant -= 1;
		}
	}

	$: totalCount = countAdult + countChild + countInfant;
	// Popper
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
	<div class="flex flex-wrap ">
		<button
			class="flex text-pblue-900 font-semibold capitalize text-sm px-2 py-0  outline-none focus:outline-none  ease-linear transition-all duration-150"
			type="button"
			bind:this={btnDropdownRef}
			on:click={toggleDropdown}
		>
			{totalCount} Travellers
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
				<h3 class="text-lg leading-6 font-medium text-gray-900">Travellers</h3>
				<p class="mt-1 max-w-2xl text-xs text-gray-500 font-light">
					Please choose the number of travellers
				</p>
			</div>

			<div class="border-t text-left border-gray-200 px-4 py-4 sm:px-6">
				<dl class="grid grid-cols-2 gap-x-2 gap-y-4">
					<div class="col-span-1 my-auto">
						<dt class="text-tiny font-medium text-gray-900">Adults</dt>
						<dd class="text-xs font-normal text-gray-500">Age 12+</dd>
					</div>
					<div class="col-span-1">
						<div class="inline-flex my-2">
							<button
								type="button"
								class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-l active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300   active:bg-white active:border-white active:shadow-none"
								on:click={decAdult}
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
								<span>{countAdult}</span>
							</button>
							<button
								type="button"
								class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-r active:z-1 focus:z-1 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300   active:bg-white active:border-white active:shadow-none"
								on:click={incAdult}
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
					<!-- BEGIN Child -->
					<div class="col-span-1 my-auto">
						<dt class="text-tiny font-medium text-gray-900">Children</dt>
						<dd class="text-xs font-normal text-gray-500">Age 2-11</dd>
					</div>
					<div class="col-span-1 w-full">
						<div class="inline-flex my-2">
							<button
								type="button"
								class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-l active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300   active:bg-white active:border-white active:shadow-none"
								on:click={decChild}
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
								<span>{countChild}</span>
							</button>

							<button
								type="button"
								class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-r active:z-1 focus:z-1 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300   active:bg-white active:border-white active:shadow-none"
								on:click={incChild}
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

					<!-- END Children -->
					<!-- BEGIN Infant -->
					<div class="col-span-1 my-auto">
						<dt class="text-tiny font-medium text-gray-900">Infant</dt>
						<dd class="text-xs font-normal text-gray-500">Age under 2</dd>
					</div>
					<div class="col-span-1">
						<div class="inline-flex my-2">
							<button
								type="button"
								class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-l active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300   active:bg-white active:border-white active:shadow-none"
								on:click={decInfant}
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
								<span>{countInfant}</span>
							</button>
							<button
								type="button"
								class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-r active:z-1 focus:z-1 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300   active:bg-white active:border-white active:shadow-none"
								on:click={incInfant}
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
				</dl>
			</div>
		</div>
	</div>
</OutClick>
<!-- Mobile -->
