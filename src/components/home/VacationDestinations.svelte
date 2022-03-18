<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
	<div class="max-w-7xl mx-auto py-4 px-4 sm:py-12 sm:px-6 lg:px-8 mt-6 sm:mt-2">
		<div class="sm:flex sm:items-baseline sm:justify-between">
			<h1 class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
				<span class="block xl:inline">Vacation Destinations</span>
				<!-- <span class="block text-indigo-600 xl:inline">Book Now</span> -->
			</h1>

			<a
				href="/vacations#popular_vacations"
				class="hidden text-sm font-semibold text-rose-600 hover:text-pblue-900 sm:block"
				>Browse all Vacation Deals<span aria-hidden="true"> &rarr;</span></a
			>
		</div>
		<div class="max-w-5xl">
			<p class="mt-2 text-base text-gray-700 sm:mt-3  md:mt-3 md:text-md lg:mx-0">
				The world is filled with many wonderful and exciting places great for spending a long
				overdue vacation. Our goal is to make vacationing in these wonderful and exciting places
				more affordable and accessible to every Canadian through our book now, pay later payment
				plan.
			</p>
		</div>

		<div class="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
			<div
				class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
			>
				<img
					src="images/home/destination-sun.jpg"
					alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
					class="object-center object-cover group-hover:opacity-75"
				/>
				<div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
				<div class="p-6 flex items-end">
					<div>
						<h3 class="font-semibold text-white">
							<a href="javascript:void(0)">
								<span class="absolute inset-0" />
								Sun Destinations
							</a>
						</h3>
						<p aria-hidden="true" class="mt-1 text-sm text-white">
							Escape the cold with a sun destination vacation package
						</p>
					</div>
				</div>
			</div>
			<div
				class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full"
			>
				<img
					src="images/home/destination-europe.jpg"
					alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
					class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
				/>
				<div
					aria-hidden="true"
					class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
				/>
				<div class="p-6 flex items-end sm:absolute sm:inset-0">
					<div>
						<h3 class="font-semibold text-white">
							<a href="javascript:void(0)">
								<span class="absolute inset-0" />
								Euro Pakcages
							</a>
						</h3>
						<p aria-hidden="true" class="mt-1 text-sm text-white">
							Be adventureous and visit multiple neighbouring euorpean countries
						</p>
					</div>
				</div>
			</div>
			<div
				class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full"
			>
				<img
					src="images/home/destination-dubai.jpg"
					alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
					class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
				/>
				<div
					aria-hidden="true"
					class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
				/>
				<div class="p-6 flex items-end sm:absolute sm:inset-0">
					<div>
						<h3 class="font-semibold text-white">
							<a href="javascript:void(0)">
								<span class="absolute inset-0" />
								Dubai - the city of wonders
							</a>
						</h3>
						<p aria-hidden="true" class="mt-1 text-sm text-white">
							If you haven't, you must visit Dubai
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-6 sm:hidden">
			<a
				href="javascript:void(0)"
				class="block text-sm font-semibold text-rose-600 hover:text-rose-400"
				>Browse all vacation destinations<span aria-hidden="true"> &rarr;</span></a
			>
		</div>
	</div>
</div>
