<script>
	$: countRoom = 1;

	function incRoom() {
		if (countRoom > 4) {
			return;
		}
		countRoom += 1;
	}

	function decRoom() {
		if (countRoom == 0) {
			return;
		} else {
			countRoom -= 1;
		}
	}

	let travellerShow = false;

	// outclick
	import OutClick from 'svelte-outclick';

	const toggleDropdown = () => {
		travellerShow = !travellerShow;
	};

	const hideDropdown = () => {
		if (travellerShow) {
			travellerShow = false;
		}
	};
</script>

<!-- This example requires Tailwind CSS v2.0+ -->

<OutClick on:outclick={hideDropdown}>
	<div class="flex flex-wrap">
		<div class="relative inline-flex items-center w-full">
			<button
				class="flex text-pblue-900 font-semibold capitalize text-sm px-2 py-0  outline-none focus:outline-none  ease-linear transition-all duration-150"
				type="button"
				aria-expanded={travellerShow ? 'true' : 'false'}
				on:click={() => (travellerShow = !travellerShow)}
			>
				{countRoom} Rooms
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
		</div>
	</div>
	{#if travellerShow}
		<div class="absolute">
			<div class="bg-white z-50 shadow sm:rounded-lg fixed w-full h-[100vh] top-0 right-0">
				<!-- <div class="p-4 sm:px-6 gird grid-cols-4 justify-between flex">
					<div class="justify-start col-span-3">
						<h3 class="text-lg leading-6 font-medium text-gray-900">Rooms</h3>
						<p class="mt-1 max-w-2xl text-xs text-gray-500 font-light">
							Select the number of rooms
						</p>
					</div>
					<div class="col-span-1 p-3">
						<button
							type="button"
							aria-expanded={travellerShow ? 'true' : 'false'}
							on:click={toggleDropdown}
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
				</div> -->

				<div class="border-t text-left border-gray-200 px-4 py-4 sm:px-6">
					<dl class="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2 items-center">
						<div class="sm:col-span-1">
							<dt class="text-tiny font-medium text-gray-900">Rooms</dt>
							<dd class="text-xs font-normal text-gray-500">Select the number of rooms</dd>
						</div>
						<div class="sm:col-span-1 place-self-end">
							<div class="inline-flex my-2">
								<button
									type="button"
									class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-l active:z-1 focus:z-1 -mr-px border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300   active:bg-white active:border-white active:shadow-none"
									on:click={decRoom}
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
									<span>{countRoom}</span>
								</button>
								<button
									type="button"
									class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded-r active:z-1 focus:z-1 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300   active:bg-white active:border-white active:shadow-none"
									on:click={incRoom}
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
						<!-- END Room selection -->
					</dl>
				</div>
				<div class="flex bottom-10 absolute justify-center w-full">
					<button
						type="button"
						class="w-full mx-4 items-center content-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-pblue-900 hover:bg-pblue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
						aria-expanded={travellerShow ? 'true' : 'false'}
						on:click={() => (travellerShow = !travellerShow)}>Done</button
					>
				</div>
			</div>
		</div>
	{/if}
</OutClick>
