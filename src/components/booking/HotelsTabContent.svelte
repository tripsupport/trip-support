<!-- Hotels tab content -->
<!-- you can add bg-gray-50 below class -->
<div class="bg-white" id="flights" role="tabpanel" aria-labelledby="flights-tab">
	<!-- HOtels CONTENT -->
	<div>
		<div class="mt-8 sm:mt-0 pb-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-12">
			<div class="sm:col-span-6">
				<div
					class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 flex"
				>
					<label
						for="name"
						class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
						>Destination to?</label
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

			<div class="sm:col-span-4">
				<div
					class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 flex"
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

			<div class="sm:col-span-2 sm:my-auto">
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
	</div>
	<!-- End of CONTENT -->
</div>
