<script>
	let countAdult = 0;
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

	let countChild = 0;
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

	let countInfant = 0;
	function incInfant() {
		++countInfant;
	}

	function decInfant() {
		if (countInfant == 0) {
			return;
		} else {
			--countInfant;
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
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class=" md:hidden max-w-7xl mx-auto sm:px-6 lg:px-8">
	Testing
	<!-- Content goes here -->
</div>
<div class="flex flex-wrap">
	<div class="w-full sm:w-full px-0">
		<div class="relative inline-flex align-middle items-center w-full">
			<button
				class="flex text-pblue-900 font-bold capitalize text-sm px-2 py-0  outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150"
				type="button"
				bind:this={btnDropdownRef}
				on:click={toggleDropdown}
			>
				1 Rooms
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
				class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-4 w-96 {dropdownPopoverShow
					? 'block'
					: 'hidden'}"
			>
				<div class="px-4 py-3 sm:px-6">
					<h3 class="text-lg leading-6 font-medium text-gray-900">Rooms</h3>
					<p class="mt-1 max-w-2xl text-xs text-gray-500 font-light">Selec the number of rooms</p>
				</div>

				<div class="border-t text-left border-gray-200 px-4 py-4 sm:px-6">
					<dl class="grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">
						<div class="sm:col-span-1 my-auto">
							<dt class="text-tiny font-medium text-gray-900">Rooms</dt>
							<dd class="text-xs font-normal text-gray-500">Maximum 4</dd>
						</div>
						<div class="sm:col-span-1">
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
					</dl>
				</div>
			</div>
		</div>
	</div>
</div>
