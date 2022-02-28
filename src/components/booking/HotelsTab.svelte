<script>
	import { Icon, SwitchHorizontal } from 'svelte-hero-icons';
	import Rooms from '../../components/hotels/Rooms.svelte';
	import TravellersMenu from './TravellersMenu.svelte';
	import TravellerCount from './TravellerCount.svelte';
	import HotelSearchButton from '../../components/hotels/HotelSearchButton.svelte';
</script>

<!-- OneWay Tab -->

<div class="flex md:justify-end justify-start ">
	<div class="col-span-12 md:col-span-4 flex">
		<div class="col-span-2 lg:col-span-1">
			<TravellerCount />
		</div>

		<div class="col-span-2 lg:col-span-1 ">
			<Rooms />
		</div>
	</div>
</div>

<div class="my-6">
	<div class="grid grid-cols-12 lg:gird-cols-12 gap-4 items-center">
		<div class="col-span-12 lg:col-span-8">
			<div class="grid grid-cols-12 items-center gap-6 py-2 md:py-0 relative">
				<div class="col-span-12 ">
					<div
						class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 active:border-transparent flex"
					>
						<label
							for="name"
							class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"
							>Duration</label
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
							name="name"
							id="name"
							class="block w-full border-0 p-1 text-pblue-900 placeholder-gray-400 focus:ring-0 text-sm "
							placeholder="YYZ-Toronto Lester B. Pearson Intl, Canada"
						/>
					</div>
				</div>
			</div>
		</div>
		<!-- Departure and return -->
		<div class="col-span-12 lg:col-span-4">
			<div
				class="relative border border-pblue-500 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-pblue-600 focus-within:border-pblue-600 "
			>
				<label
					for="name"
					class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-pblue-900"
					>Departure / Return</label
				>
				<div class="items-center">
					<div class="grid grid-cols-12  justify-between place-items-center">
						<div class="col-span-5 place-self-start">
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
									placeholder="AMS-Amsterdam Airport Schiphol, Netherlands"
								/>
							</div>
						</div>
						<div class="col-span-2">
							<div class="flex items-center">
								<span class="mx-4 h-6 w-px bg-pblue-400 mt-1 lg:mx-6" aria-hidden="true" />
							</div>
						</div>
						<div class="col-span-5 place-self-end">
							<div class="flex items-center justify-self-center">
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
									placeholder="AMS-Amsterdam Airport Schiphol, Netherlands"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="grid grid-cols-6 justify-self-start place-content-between md:gap-4 items-center">
	<div class="col-span-6 md:col-span-4" />
	<div class="col-span-6 md:col-span-2 w-full md:justify-self-end mt-4 md:mt-0">
		<HotelSearchButton />
	</div>
</div>
