<!-- Flights CONTENT -->
<div class="pt-0">
	<div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
		<div class="sm:col-span-4">
			<div
				class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 flex"
			>
				<label
					for="name"
					class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
					>Leaving from?</label
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5 text-slate-500 mt-[5px]"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
						clip-rule="evenodd"
					/>
				</svg>

				<input
					type="text"
					name="name"
					id="name"
					class="block w-full border-0 p-1 text-gray-900 placeholder-slate-400 focus:ring-0 sm:text-sm"
					placeholder="YYZ-Toronto Lester B. Pearson Intl, Canada"
				/>
			</div>
		</div>
		<!-- <div
					aria-hidden="true"
					class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full z-20"
				>
					<div
						class="absolute transform -translate-y-1/2 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-[240px]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 text-slate-500 mt-[5px] rotate-90"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div> -->

		<div class="sm:col-span-4">
			<div
				class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 flex"
			>
				<label
					for="name"
					class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
					>Going to?</label
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5 text-slate-500 mt-[5px]"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
						clip-rule="evenodd"
					/>
				</svg>
				<input
					type="text"
					name="name"
					id="name"
					class="block w-full border-0 p-1 text-gray-900 placeholder-slate-400 focus:ring-0 sm:text-sm"
					placeholder="AMS-Amsterdam Airport Schiphol, Netherlands"
				/>
			</div>
		</div>

		<div class="sm:col-span-4">
			<div
				class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 flex"
			>
				<label
					for="name"
					class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
					>Departure / Return</label
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-5 h-5 text-slate-500 mt-[5px]"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
						clip-rule="evenodd"
					/>
				</svg>
				<div class="flex">
					<input
						type="text"
						name="name"
						id="name"
						class="block w-full border-0 p-1 text-gray-900 placeholder-slate-400 focus:ring-0 sm:text-sm"
						placeholder="AMS-Amsterdam Airport Schiphol, Netherlands"
					/>
					<span class="h-5 mx-4 h-6 w-px bg-gray-400 lg:mx-6" aria-hidden="true" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-11 h-5 text-slate-500 mt-[5px]"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
							clip-rule="evenodd"
						/>
					</svg>

					<input
						type="text"
						name="name"
						id="name"
						class="block w-full border-0 p-1 text-gray-900 placeholder-slate-400 focus:ring-0 sm:text-sm"
						placeholder="AMS-Amsterdam Airport Schiphol, Netherlands"
					/>
				</div>
			</div>
		</div>
		<div class="sm:col-span-8">
			<div class="flex">
				<div>
					<fieldset class="my-2">
						<legend class="sr-only">Notification method</legend>
						<div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
							<div class="flex items-center">
								<input
									id="email"
									name="notification-method"
									type="radio"
									checked
									class="focus:ring-pblue-500 h-4 w-4 text-pblue-600 border-gray-300"
								/>
								<label for="email" class="ml-3 block text-sm font-medium text-gray-700">
									Flexible Search (+/- 3days)
								</label>
							</div>

							<div class="flex items-center">
								<input
									id="sms"
									name="notification-method"
									type="radio"
									class="focus:ring-pblue-500 h-4 w-4 text-pblue-600 border-gray-300"
								/>
								<label for="sms" class="ml-3 block text-sm font-medium text-gray-700">
									Non-stop flights only
								</label>
							</div>
							<div class="flex items-center">
								<input
									id="sms"
									name="notification-method"
									type="radio"
									class="focus:ring-pblue-500 h-4 w-4 text-pblue-600 border-gray-300"
								/>
								<label for="sms" class="ml-3 block text-sm font-medium text-gray-700">
									Airline Specific
								</label>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
		</div>
		<div class="sm:col-span-4">
			<div class="flex flex-row-reverse">
				<button
					type="button"
					class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
				>
					<!-- Heroicon name: solid/mail -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5 mr-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					Search flights
				</button>
			</div>
		</div>
	</div>
	<div
		id="accordion-flush"
		data-accordion="collapse"
		data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
		data-inactive-classes="text-gray-500 dark:text-gray-400"
	>
		<h2 id="accordion-flush-heading-3">
			<button
				type="button"
				class="flex items-center justify-between pt-5 font-medium text-left text-gray-500 dark:text-gray-400"
				data-accordion-target="#more-options"
				aria-expanded="false"
				aria-controls="more-options"
			>
				<span class="text-sm">More options</span>
				<svg
					data-accordion-icon
					class="w-6 h-6"
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
		</h2>
		<div id="more-options" class="hidden" aria-labelledby="more-options-heading-3">
			<div class="py-3 ">
				<p class=" text-slate-700 text-sm">
					This is where we will input advanced options, users can select by flight name etc.
				</p>
			</div>
		</div>
	</div>
</div>
<!-- End of CONTENT -->
