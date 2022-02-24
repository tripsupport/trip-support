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
</script>

<!-- Dropdown Container -->

<button
	class="inline-flex justify-center items-center space-x-2  font-semibold focus:outline-none  text-sm text-pblue-700 hover:text-pblue-900 "
	aria-expanded={dropdownOpen ? 'true' : 'false'}
	on:click={() => (dropdownOpen = !dropdownOpen)}
>
	Travellers +
</button>

{#if dropdownOpen}
	<div role="menu" aria-labelledby="tk-dropdown-simple" class="z-50">
		<div class="absolute bg-white shadow overflow-hidden sm:rounded-lg z-40 text-left mt-3">
			<div class="px-4 py-3 sm:px-6">
				<h3 class="text-lg leading-6 font-medium text-gray-900">Travellers</h3>
				<p class="mt-1 max-w-2xl text-xs text-gray-500 font-light">
					Please choose the number of travellers
				</p>
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
						<dt class="text-tiny font-medium text-gray-900">Adults</dt>
						<dd class="text-xs font-normal text-gray-500">Age 12+</dd>
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
					<!-- BEGIN Child -->
					<div class="sm:col-span-1 my-auto">
						<dt class="text-tiny font-medium text-gray-900">Children</dt>
						<dd class="text-xs font-normal text-gray-500">Age 2-11</dd>
					</div>
					<div class="sm:col-span-1">
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
					<!-- {#each Array(countChild) as _, i}
						<div id={countChild}>
							<div class="my-4 w-full flex">

								<div>
									<div class="mt-1 relative">
										<button
											type="button"
											class="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"
											aria-haspopup="listbox"
											aria-expanded={ageDropdownOpen ? 'true' : 'false'}
											on:click={() => (ageDropdownOpen = !ageDropdownOpen)}
										>
											<span class="block truncate"> Tom Cook </span>
											<span
												class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
											>

												<svg
													class="h-5 w-5 text-gray-400"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														fill-rule="evenodd"
														d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
														clip-rule="evenodd"
													/>
												</svg>
											</span>
										</button>

										{#if ageDropdownOpen}
											<ul
												class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
												tabindex="-1"
												role="listbox"
												aria-labelledby="listbox-label"
												aria-activedescendant="listbox-option-3"
											>
												<li
													class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
													id="listbox-option-{countChild}"
													role="option"
												>
													<span class="font-normal block truncate"> Wade Cooper </span>

													<span
														class="text-pblue-600 absolute inset-y-0 right-0 flex items-center pr-4"
													>
														<svg
															class="h-5 w-5"
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															aria-hidden="true"
														>
															<path
																fill-rule="evenodd"
																d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																clip-rule="evenodd"
															/>
														</svg>
													</span>
												</li>

												<li
													class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9"
													id="listbox-option-0"
													role="option"
												>
													<span class="font-normal block truncate"> Wade Cooper </span>
												</li>
											</ul>
										{/if}
									</div>
								</div>
							</div>
						</div>
						<div />
					{/each} -->

					<!-- END Children -->
					<!-- BEGIN Infant -->
					<div class="sm:col-span-1 my-auto">
						<dt class="text-tiny font-medium text-gray-900">Infant</dt>
						<dd class="text-xs font-normal text-gray-500">Age under 2</dd>
					</div>
					<div class="sm:col-span-1">
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
					<!-- {#each Array(countInfant) as _, i}
						<div id={countInfant}>
							<span class="text-sm font-bold flex">Infant {countInfant}:</span>
							<div class="space-y-4 mt-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6" id="">
								<div class="flex items-center">
									<input
										id=""
										name="notification-method"
										type="radio"
										checked
										class="focus:ring-white h-3 w-3 text-pblue-600 border-gray-300"
									/>
									<label for="infant-1" class="ml-2 block text-xz font-medium text-gray-700">
										1 +
									</label>
								</div>

								<div class="flex items-center">
									<input
										id=""
										name="notification-method"
										type="radio"
										class="focus:ring-white h-3 w-3 text-pblue-600 border-gray-300"
									/>
									<label for="infant-2" class="ml-2 block text-xz font-medium text-gray-700">
										Under 1
									</label>
								</div>
							</div>
						</div>
					{/each} -->
				</dl>
				<div class="flex items-center justify-center mt-4 mb-2">
					<button
						type="button"
						class="w-full items-center content-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-pblue-900 hover:bg-pblue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
						>Done</button
					>
				</div>
			</div>
		</div>
	</div>
{/if}
