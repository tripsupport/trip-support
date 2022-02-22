<script>
	let count = 1;

	function incTraveller() {
		++count;
	}

	function decTraveller() {
		--count;
	}
</script>

<div class="grid sm:grid-cols-6 grid-cols-12 gap-4 mt-4 md:mt-1">
	<div class="col-start-1 sm:col-end-3 col-end-12 my-auto">
		<ul class="flex flex-wrap">
			<li class="mr-2">
				<a
					href="javascript:void(0)"
					class="inline-block py-2 px-4 text-tabBody font-medium text-center text-white bg-pblue-700 rounded-full active"
					aria-current="page">Roundtrip</a
				>
			</li>
			<li class="mr-2">
				<a
					href="javascript:void(0)"
					class="inline-block py-2 px-4 text-tabBody font-medium text-center text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
					>One-way</a
				>
			</li>
			<li class="mr-2">
				<a
					href="javascript:void(0)"
					class="inline-block py-2 px-4 text-tabBody font-medium text-center text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
					>Multi-city</a
				>
			</li>
		</ul>
	</div>
	<div class="col-start-5 col-end-5 col-span-1 my-auto">
		<div class="hidden w-full md:block md:w-auto" id="mobile-menu">
			<ul
				class="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md text-tabBody md:font-medium"
			>
				<li>
					<button
						id="dropdownTravellersLink"
						data-dropdown-toggle="dropdownTravellers"
						class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
						>{count} Traveller(s)
						<svg
							class="ml-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						></button
					>
					<!-- Dropdown menu -->
					<div
						id="dropdownTravellers"
						class="hidden z-10 w-72 list-none bg-white rounded divide-y shadow "
					>
						<div
							href="javascript:void(0)"
							class="block py-2 px-4 text-base text-gray-700 hover:bg-gray-100 "
						>
							Travellers
						</div>

						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 text-center">
							<div>
								<!-- Simple Button Group (mixed) -->
								<div class="inline-flex">
									<button
										type="button"
										class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-l active:z-1 focus:z-1 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
										on:click={incTraveller}
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
									<button
										type="button"
										class="inline-flex justify-center items-center space-x-2 font-semibold focus:outline-none px-3 py-2 leading-6 active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
									>
										<span>{count}</span>
									</button>
									<button
										type="button"
										class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-r active:z-1 focus:z-1 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
										on:click={decTraveller}
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
								<!-- Simple Button Group (mixed) -->
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="my-4">
		<div class="hidden w-full md:block md:w-auto" id="mobile-menu">
			<ul
				class="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md text-tabBody md:font-medium"
			>
				<li>
					<button
						id="dropdownEconomyLink"
						data-dropdown-toggle="dropdownEconomy"
						class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
						>Economy <svg
							class="ml-1 w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						></button
					>
					<!-- Dropdown menu -->
					<div
						id="dropdownEconomy"
						class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
					>
						<ul class="py-1" aria-labelledby="dropdownLargeButton">
							<li>
								<a
									href="javascript:void(0)"
									class="block py-2 px-4 text-tabBody text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
									>Premium Economy</a
								>
							</li>
							<li>
								<a
									href="javascript:void(0)"
									class="block py-2 px-4 text-tabBody text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
									>Business Class</a
								>
							</li>
							<li>
								<a
									href="javascript:void(0)"
									class="block py-2 px-4 text-tabBody text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
									>First Class</a
								>
							</li>
						</ul>
						<!-- <div class="py-1">
							<a
								href="javascript:void(0)"
								class="block py-2 px-4 text-tabBody text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
								>Sign out</a
							>
						</div> -->
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
