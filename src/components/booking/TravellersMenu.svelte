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

<!-- This example requires Tailwind CSS v2.0+ -->

<div class="relative z-22 bg-white">
	<div class="max-w-7xl mx-auto flex pt-1 px-2 md:px-6 lg:px-8">
		<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
		<button
			class="inline-flex justify-center items-center space-x-2  font-semibold focus:outline-none  text-sm text-pblue-700 hover:text-pblue-900 "
			aria-expanded={dropdownOpen ? 'true' : 'false'}
			on:click={() => (dropdownOpen = !dropdownOpen)}
		>
			Travellers +
		</button>
	</div>
</div>

<!--
    Flyout menu, show/hide based on flyout menu state.

    Entering: "transition ease-out duration-200"
      From: "opacity-0 -translate-y-1"
      To: "opacity-100 translate-y-0"
    Leaving: "transition ease-in duration-150"
      From: "opacity-100 translate-y-0"
      To: "opacity-0 -translate-y-1"
  -->
{#if dropdownOpen}
	<div
		class="absolute z-10 inset-x-0 transform shadow-lg"
		transition:fly={{ y: -10, duration: 200 }}
		role="menu"
		aria-labelledby="tk-dropdown-simple"
	>
		<div class="absolute inset-0 flex" aria-hidden="true">
			<div class="bg-white w-1/2" />
			<div class="bg-gray-50 w-1/2" />
		</div>
		<div class="relative max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-2">
			<div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
				<div>
					<div class="px-4 py-3 sm:px-6">
						<h3 class="text-lg leading-6 font-medium text-gray-900">Travellers</h3>
						<p class="mt-1 max-w-2xl text-xs text-gray-500 font-light">
							Please choose the number of travellers
						</p>
					</div>
					<div class="border-t text-left border-gray-200 px-4 py-4 sm:px-6">
						<dl class="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2">
							<div class="sm:col-span-1 my-auto">
								<dt class="text-tiny font-medium text-gray-900">Adults</dt>
								<dd class="text-xs font-normal text-gray-500">18 +</dd>
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
						<!-- BEGIN Child -->
						<dl class="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2">
							<div class="sm:col-span-1 my-auto">
								<dt class="text-tiny font-medium text-gray-900">Children</dt>
								<dd class="text-xs font-normal text-gray-500">2 to 17</dd>
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

							<!-- <div class="col-span-1">
								{#each Array(countChild) as _, i}
									<div id={countChild}>
										<label for="location" class="block text-sm font-medium text-gray-700"
											>Child {countChild}</label
										>
										<select
											id="location"
											name="location"
											class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
										>
											<option>United States</option>
											<option selected>Canada</option>
											<option>Mexico</option>
										</select>
									</div>
								{/each}
							</div> -->

							<!-- END Children -->
						</dl>
						<!-- BEGIN Infant -->
						<dl class="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2">
							<div class="sm:col-span-1 my-auto">
								<dt class="text-tiny font-medium text-gray-900">Infant</dt>
								<dd class="text-xs font-normal text-gray-500">Younger than 2</dd>
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
									<div
										class="space-y-4 mt-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
										id=""
									>
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
					</div>
				</div>
				<!-- Error -->
				<!-- {#if countChild || countInfant > 0}
					<div class="mt-6 text-sm font-medium">
						<div class="p-4 md:p-5 rounded text-red-700 bg-red-100">
							<div class="flex items-center">
								<svg
									class="hi-solid hi-x-circle inline-block w-5 h-5 mr-3 flex-none text-red-500"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
										clip-rule="evenodd"
									/></svg
								>
								<h3 class="font-semibold">Please provide the ages of children</h3>
							</div>
						</div>
					</div>
				{/if} -->
			</div>
		</div>
	</div>
{/if}
