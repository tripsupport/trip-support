<script>
	import Plane from '../icons/Plane.svelte';
	import PlaneSearch from '../icons/PlaneSearch.svelte';
</script>

<div class=" pb-2 bg-white w-full">
	<ul class="space-y-0 py-2 z-40">
		<!-- <li class="px-4 pt-4">
									<div
										class="text-sm text-pblue font-bold overflow-hidden overflow-ellipsis whitespace-nowrap"
									>
										Popular Destinations
									</div>
								</li> -->
		<li class="parent hover:bg-gray-50 p-2 ">
			<button
				class="mx-3 flex items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left  "
			>
				<Plane />
				<div class="text-pblue-900 flex-wrap ml-[0.5rem] justify-start">
					<div class="truncate">
						<span>Toronto Pearson Intl. Airport (YYZ)</span>
					</div>
					<div
						class="truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"
					>
						Canada
					</div>
				</div>
			</button>
		</li>
		<!-- Child element  -->
		<li class="child hover:bg-gray-50 py-1 pl-10">
			<button
				class="flex items-center text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left  "
			>
				<Plane />
				<div class="text-pblue-900 flex-wrap ml-[0.5rem] justify-start">
					<div class="truncate">
						<span>Billy Bishop Toronto City Airport (YTZ)</span>
					</div>
					<div
						class="truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"
					>
						11 Miles Away
					</div>
				</div>
			</button>
		</li>
		<!-- Child element  -->
		<li class="child hover:bg-gray-50 py-1 pl-10">
			<button
				class="flex items-center text-sm text-pblue font-bold bg-white  bg-transparent flex-nowrap justify-start text-left  "
			>
				<Plane />
				<div class="text-pblue-900 flex-wrap ml-[0.5rem] justify-start">
					<div class="truncate">
						<span>John C. Munro Hamilton Intl. Airport (YHM)</span>
					</div>
					<div
						class="truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"
					>
						11 Miles Away
					</div>
				</div>
			</button>
		</li>
		<!-- Child element  -->
		<li class="child hover:bg-gray-50 py-1 pl-10">
			<button
				class="flex items-center text-sm text-pblue font-bold bg-white  bg-transparent flex-nowrap justify-start text-left  "
			>
				<Plane />
				<div class="text-pblue-900 flex-wrap ml-[0.5rem] justify-start">
					<div class="truncate">
						<span>Kitchener (YKF - Region of Waterloo Intl.)</span>
					</div>
					<div
						class="truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"
					>
						42 Miles Away
					</div>
				</div>
			</button>
		</li>
		<li class="parent hover:bg-gray-50 p-2">
			<button
				class="flex mx-3 items-center mt-1 text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left  "
			>
				<Plane />
				<div class="text-pblue-900 flex-wrap ml-[0.5rem] justify-start">
					<div class="truncate">
						<span>Boston (BOS - All Airports)</span>
					</div>
					<div
						class="truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"
					>
						Near West Yarmouth, Massachusetts, United States
					</div>
				</div>
			</button>
		</li>
		<li class="parent hover:bg-gray-50 p-2">
			<button
				class="flex mx-3 items-center  text-sm text-pblue font-bold bg-white bg-transparent flex-nowrap justify-start text-left  "
			>
				<Plane />
				<div class="text-pblue-900 flex-wrap ml-[0.5rem] justify-start">
					<div class="truncate">
						<span>Motu Mute Airport (BOB)</span>
					</div>
					<div
						class="truncate text-pblue-600 font-light text-sm overflow-hidden text-ellipsis whitespace-nowrap"
					>
						Near Bora Bora, Leeward Islands, French Polynesia
					</div>
				</div>
			</button>
		</li>
		<li class="parent hover:bg-gray-50 p-2">
			<button
				class="flex mx-3 items-center  text-sm text-pblue font-bold bg-white py-1 bg-transparent flex-nowrap justify-start text-left  "
			>
				<PlaneSearch />
				<div class="text-pblue-900 flex-wrap ml-[0.5rem] justify-start">
					<div class="truncate">
						<span>Search for “yyz”</span>
					</div>
				</div>
			</button>
		</li>
	</ul>
</div>
