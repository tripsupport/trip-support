<script>
	import { Icon, SwitchHorizontal } from 'svelte-hero-icons';
	$: title = leaving;

	let leaving = 'Leaving from?';
	let going = 'Going to?';

	$: showRoundTrip = false;
	let leavingFrom = '';
	let goingTo = '';
</script>

<div class="my-6">
	<div class="grid grid-cols-12 lg:gird-cols-12 gap-4 items-center">
		<div class="col-span-12 lg:col-span-8">
			<div class="grid grid-cols-12 items-center gap-6 py-2 md:py-1 relative">
				<div class="col-span-12 md:col-span-6">
					<div
						class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"
					>
						<label
							for="name"
							class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"
							>Leaving from?</label
						>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 text-pblue-800 mt-[5px]"
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
							type="button"
							name="departure"
							class="block sm:hidden w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"
							aria-expanded={showRoundTrip ? 'true' : 'false'}
							on:click={() => (showRoundTrip = !showRoundTrip)}
						/>
					</div>
				</div>

				<div class="z-30 absolute top-[47.3%] left-[94%] transform -translate-x-1/2 -translate-y-3">
					<Icon
						src={SwitchHorizontal}
						class="bg-white h-8 text-pblue-900 w-8 rotate-90 border rounded-full p-[5px] border-pblue-500"
					/>
				</div>

				<div class="col-span-12 md:col-span-6">
					<div
						class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"
					>
						<label
							for="name"
							class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"
							>Going to?</label
						>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 text-pblue-800 mt-[5px]"
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
							type="button"
							name="departure"
							class="block sm:hidden w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"
							placeholder=""
							aria-expanded={showRoundTrip ? 'true' : 'false'}
							on:click={() => (showRoundTrip = !showRoundTrip)}
						/>
					</div>
				</div>

				{#if showRoundTrip}
					<div class="absolute">
						<div class="bg-white z-50 shadow sm:rounded-lg fixed w-full h-[100vh] top-0 right-0">
							<div class="flex p-4 sm:px-6 justify-between border-b">
								<div class="text-tiny leading-6 font-semibold text-gray-900">{title}</div>
								<button
									type="button"
									aria-expanded={showRoundTrip ? 'true' : 'false'}
									on:click={() => (showRoundTrip = !showRoundTrip)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
							<!-- Form -->
							<div>
								<!-- Leaving from  -->
								<div class="mt-4 py-3 px-4">
									<div
										class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"
									>
										<label
											for="name"
											class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"
											>Leaving from?</label
										>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="w-5 h-5 text-pblue-800 mt-[5px]"
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
											name="departure"
											class="block sm:hidden w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"
											placeholder=""
											bind:value={leavingFrom}
											on:click={() => {
												title = leaving;
											}}
										/>
									</div>
								</div>
								<div class="py-3 px-4">
									<div
										class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"
									>
										<label
											for="name"
											class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"
											>Going to?</label
										>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="w-5 h-5 text-pblue-800 mt-[5px]"
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
											name="departure"
											class="block sm:hidden w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"
											placeholder=""
											bind:value={goingTo}
											on:click={() => {
												title = going;
											}}
										/>
									</div>
								</div>
								<!-- Two arrow icon -->
								<div
									class="z-30 md:hidden absolute top-[136px] left-[90%] transform -translate-x-1/2 -translate-y-3"
								>
									<Icon
										src={SwitchHorizontal}
										class="bg-white h-8 text-pblue-900 w-8 rotate-90 border rounded-full p-[5px] border-pblue-500"
									/>
								</div>
								<div class="pt-3 px-5 font-semibold text-sm">
									Matching with <span class="font-bold text-sm">{leavingFrom}</span> to
									<span class="font-bold text-sm">{goingTo}</span>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
		<!-- Departure and return -->
		<div class="col-span-12 lg:col-span-4">
			<div
				class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 flex items-center"
			>
				<label
					for="name"
					class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"
					>Departure</label
				>
				<div class="flex items-center">
					<div class="grid grid-cols-1 content-between place-items-center">
						<div class="col-span-1">
							<div class="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-12 h-5 text-pblue-800"
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
									class="block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm"
									placeholder=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
