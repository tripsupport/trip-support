<script>
	import Stars from '../../components/Stars.svelte';
</script>

<!-- Toronto Luxury hotels -->
<div
	class="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-6 lg:gap-x-6 lg:gap-y-4"
>
	<!-- Card -->
	<div class="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden sm:row-span-3">
		<!-- Card Cover -->
		<div class=" aspect-w-2 aspect-h-1">
			<img src="images/hotels/toronto-downtown.jpg" alt="Downtown Toronto" />
		</div>
		<!-- END Card Cover -->

		<!-- Card Body -->
		<div class="p-4 w-full mb-4">
			<p class="font-semibold text-tiny mb-1 text-rose-600">Toronto ON</p>
			<h3 class="font-bold text-pblue-900 text-xl mb-2">Luxury Hotels in Downtown Toronto</h3>
			<p class="prose">
				Inventore molestiae aliquam hic, adipisci blanditiis provident iusto rerum. Asperiores
				deserunt quae qui repellat assumenda.
			</p>
		</div>
		<!-- END Card Body -->

		<!-- Card Footer -->
		<div class="py-4 px-5 lg:px-6 w-full flex items-center bg-gray-50">
			<div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
				<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
					<img class="h-12" src="logos/radisson.svg" alt="Tuple" />
				</div>
				<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
					<img class="h-12" src="logos/hilton.svg" alt="Mirage" />
				</div>
				<div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
					<img class="h-12" src="logos/ritz-carlton.svg" alt="StaticKit" />
				</div>
				<div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
					<img class="h-12" src="logos/shangri-la.svg" alt="Transistor" />
				</div>
				<div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
					<img class="h-12" src="logos/westin.svg" alt="Workcation" />
				</div>
			</div>
		</div>

		<!-- END Card -->
	</div>
	<!-- END Card -->
	<!-- Toronto Luxury hotels -->
	<div
		class="flex flex-col rounded-lg shadow-sm border bg-white overflow-hidden sm:flex-row sm:row-span-1"
	>
		<div
			class="h-60 sm:h-auto sm:w-[40%] bg-cover bg-center"
			style="background-image: url('images/hotels/blue-mountain.jpg');"
		/>
		<div class="p-4 grow w-full sm:w-[60%]">
			<p class="font-semibold text-xz mb-1 text-rose-600">Collingwood, ON</p>
			<h3 class="font-bold text-pblue-900 text-lg mb-2">Blue Mountain Ski Resort</h3>
			<p class="text-slate-700 text-sz ">
				Inventore molestiae aliquam hic, adipisci blanditiis provident iusto rerum. Asperiores
			</p>
			<!-- <p class="text-sm text-gray-500 mt-2 leading-none">Approximately 150 km from Toronto</p> -->
			<div class="truncate">
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Ski Resort
				</span>
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Family Friendly
				</span>
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Outdoors
				</span>
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Equipment Rental
				</span>
			</div>
		</div>
	</div>

	<!-- Toronto Luxury hotels -->
	<div
		class="flex flex-col rounded-lg shadow-sm border bg-white overflow-hidden sm:flex-row sm:row-span-1"
	>
		<div
			class="h-60 sm:h-auto sm:w-[40%] bg-cover bg-center"
			style="background-image: url('images/hotels/niagara-falls.jpg');"
		/>
		<div class="p-4 grow w-full sm:w-[60%]">
			<p class="font-semibold text-xz mb-1 text-rose-600">Niagara Falls, ON</p>
			<h3 class="font-bold text-pblue-900 text-lg mb-2">Niagara Falls Hotels</h3>
			<p class="text-slate-700 text-sz">
				Inventore molestiae aliquam hic, adipisci blanditiis provident iusto rerum. Asperiores
			</p>
			<!-- <p class="text-sm text-gray-500 mt-2 leading-none">blanditiis provident iusto rerum</p> -->
			<div class="truncate">
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Tourism
				</span>
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Niagara Falls
				</span>
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Family Friendly
				</span>
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Attractions
				</span>
			</div>
		</div>
	</div>
	<!-- Toronto Luxury hotels -->
	<div
		class="flex flex-col rounded-lg shadow-sm border bg-white overflow-hidden sm:flex-row sm:row-span-1"
	>
		<div
			class="h-60 sm:h-auto sm:w-[40%] bg-cover bg-center"
			style="background-image: url('images/hotels/muskoka.jpg');"
		/>
		<div class="p-4 grow w-full sm:w-[60%]">
			<p class="font-semibold text-xz mb-1 text-rose-600">Minett, ON</p>
			<h3 class="font-bold text-pblue-900 text-lg mb-2">JW Marriott The Rosseau</h3>
			<p class="text-slate-700 text-sz">
				Let luxury surround you at JW Marriott The Rosseau Muskoka Resort & Spa.
			</p>
			<!-- <p class="text-sm text-gray-500 mt-2 leading-none">Approximately 200 km from Toronto</p> -->
			<div class="truncate">
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Luxury Hotel
				</span>
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Hotel
				</span>
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Family & Pet Friendly
				</span>
				<span
					class="mt-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
				>
					Family & Pet Friendly
				</span>
			</div>
		</div>
	</div>
</div>
