<script>
	$: countAdult = 0;
	function incAdult() {
		++countAdult;
	}

	function decAdult() {
		if (countAdult == 0) {
			return;
		} else {
			--countAdult;
		}
	}

	$: countChild = 0;
	function incChild() {
		++countChild;
	}

	function decChild() {
		if (countChild == 0) {
			return;
		} else {
			--countChild;
		}
	}

	// Child's Age
	let showChildAge = false;

	const toggleAge = () => {
		showChildAge = !showChildAge;
	};

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

	const hideAge = () => {
		if (showChildAge) {
			showChildAge = false;
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
			1 Travellers
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
				</dl>
				<OutClick on:outclick={hideAge}>
					{#if countChild == 1}
						<dl class="grid grid-cols-2 gap-x-2 gap-y-4 w-full place-content-center mt-4">
							<div class="col-span-1 my-auto">
								<dt class="text-tiny font-medium text-gray-900">Child 1</dt>
							</div>
							<div class="col-span-1">
								<div class=" inline-block w-[148px] text-left">
									<div>
										<button
											type="button"
											class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
											on:click={toggleAge}
										>
											Select Age

											<svg
												class="-mr-1 ml-2 h-5 w-5"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
													clip-rule="evenodd"
												/>
											</svg>
										</button>
									</div>

									{#if showChildAge}
										<div
											class="origin-bottom-left absolute right-10 mt-2 w-[148px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="menu-button"
											tabindex="-1"
										>
											<div class="py-1" role="none">
												<a
													href="#"
													class="text-gray-700 block px-4 py-2 text-sm"
													role="menuitem"
													tabindex="-1"
													id="menu-item-0">2</a
												>
												<a
													href="#"
													class="text-gray-700 block px-4 py-2 text-sm"
													role="menuitem"
													tabindex="-1"
													id="menu-item-1">3</a
												>
												<a
													href="#"
													class="text-gray-700 block px-4 py-2 text-sm"
													role="menuitem"
													tabindex="-1"
													id="menu-item-2">4</a
												>
											</div>
										</div>
									{/if}
								</div>
							</div>
						</dl>
					{/if}
				</OutClick>
			</div>
		</div>
	</div>
</OutClick>
<!-- Mobile -->
