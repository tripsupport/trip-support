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

	import { fly } from 'svelte/transition';

	let dropdownOpen = false;

	// import SelectAge from './SelectAge.svelte';
	let ageDropdownOpen = false;
	let totalCount;

	import { clickOutside } from '../clickOutside';

	function handleClickOutside(event) {
		dropdownOpen = !dropdownOpen;
	}
</script>

<!-- Dropdown Container -->

<!-- <button
	class="inline-flex justify-center items-center space-x-2  font-semibold focus:outline-none  text-sm text-pblue-700 hover:text-pblue-900 "
	aria-expanded={dropdownOpen ? 'true' : 'false'}
	on:click={() => (dropdownOpen = !dropdownOpen)}
>
	Travellers +
</button> -->

<!-- NEw -->
<div class="relative inline-block text-left min-w-7xl">
	<div>
		<button
			class="inline-flex justify-center items-center space-x-2  font-semibold focus:outline-none  text-sm text-pblue-700 hover:text-pblue-900 "
			aria-expanded={dropdownOpen ? 'true' : 'false'}
			on:click={() => (dropdownOpen = !dropdownOpen)}
		>
			{1} Room(s)
		</button>
	</div>

	{#if dropdownOpen}
		<div
			role="menu"
			aria-labelledby="tk-dropdown-simple"
			class="z-30 overflow-hidden md:origin-top-right absolute md:right-0 md:left-auto origin-top-left left-0 right-auto mt-2 w-96"
			use:clickOutside
			on:click_outside={handleClickOutside}
		>
			<div class="bg-white shadow overflow-hidden sm:rounded-lg text-left mt-3">
				<div class="px-4 py-3 sm:px-6">
					<h3 class="text-lg leading-6 font-medium text-gray-900">Rooms</h3>
					<p class="mt-1 max-w-2xl text-xs text-gray-500 font-light">Selec the number of rooms</p>
				</div>

				<div class="border-t text-left border-gray-200 px-4 py-4 sm:px-6">
					<!-- Ages of children error msg -->
					<!-- {#if countChild || countInfant > 0}
					<div class="p-3 md:p-4 mb-2 rounded text-red-700 bg-red-100">
						<div class="flex items-center">
							<div class="font-semibold text-sm">Please provide the ages of children</div>
						</div>
					</div>
				{/if} -->
					<!-- END Danger Alert -->
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
					<div class="flex items-center justify-center mt-4 mb-2">
						<button
							type="button"
							class="w-full items-center content-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-pblue-900 hover:bg-pblue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
							aria-expanded={dropdownOpen ? 'true' : 'false'}
							on:click={() => (dropdownOpen = !dropdownOpen)}>Done</button
						>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
