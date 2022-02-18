<div class="grid grid-cols-6 gap-4 mt-5">
	<div class="col-start-1 col-end-3 my-auto">
		<ul class="flex flex-wrap">
			<li class="mr-2">
				<a
					href="#"
					class="inline-block py-2 px-4 text-sm font-medium text-center text-white bg-pblue-700 rounded-full active"
					aria-current="page">Roundtrip</a
				>
			</li>
			<li class="mr-2">
				<a
					href="#"
					class="inline-block py-2 px-4 text-sm font-medium text-center text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
					>One-way</a
				>
			</li>
			<li class="mr-2">
				<a
					href="#"
					class="inline-block py-2 px-4 text-sm font-medium text-center text-gray-500 rounded-full hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
					>Multi-city</a
				>
			</li>
		</ul>
	</div>
	<div class="col-start-5 col-end-5 col-span-1 my-auto">
		<div class="hidden w-full md:block md:w-auto" id="mobile-menu">
			<ul class="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
				<li>
					<button
						id="dropdownTravellersLink"
						data-dropdown-toggle="dropdownTravellers"
						class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
						>Traveller(s) <svg
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
						class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
					>
						<ul class="py-1" aria-labelledby="dropdownLargeButton">
							<li>
								<a
									href="#"
									class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
									>Adults</a
								>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
									>Child</a
								>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
									>Infant</a
								>
							</li>
						</ul>
						<!-- <div class="py-1">
							<a
								href="#"
								class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
								>Sign out</a
							>
						</div> -->
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class=" my-6">
		<div class="hidden w-full md:block md:w-auto" id="mobile-menu">
			<ul class="flex flex-col mt-4 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium">
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
									href="#"
									class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
									>Premium Economy</a
								>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
									>Business Class</a
								>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
									>First Class</a
								>
							</li>
						</ul>
						<!-- <div class="py-1">
							<a
								href="#"
								class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
								>Sign out</a
							>
						</div> -->
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
