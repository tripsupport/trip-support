<script>
	// Icons
	import BookingIcon from '../icons/BookingIcon.svelte';
	import ApprovedIcon from '../icons/ApprovedIcon.svelte';
	import NoPostPayIcon from '../icons/NoPostPayIcon.svelte';
	import FlexPayIcon from '../icons/FlexPayIcon.svelte';
	import FastConvenientIcon from '../icons/FastConvenientIcon.svelte';
</script>

<div class="bg-white">
	<div class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-6 lg:px-8 lg:py-12">
		<div class="max-w-7xl ">
			<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				What is the Book Now Pay Later Feature?
			</h2>
			<p class="mt-4 text-gray-700 max-w-4xl prose">
				Ready to pursue your wanderlust and explore the world easier than ever before? Trip
				Support’s Book Now Pay Later Travel plan can help cover your travel expenses in a
				cost-effective manner. These expenses can include transportation costs, accommodations,
				food, activities, tours, and more. Uniquely, we offer this approach without the need for
				credit checks and extra boring, time-consuming documentation.<br />
				<span class="font-bold"
					>We believe that people should be able to travel regardless of their credit score</span
				>.
			</p>
		</div>
		<!-- END Heading -->

		<!-- Features -->
		<div class="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-12 text-center content-center">
			<div class="py-5">
				<div class="group inline-flex items-center justify-center w-12 h-12 mb-8 relative ">
					<div
						class="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-pblue-900 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-pblue-900 bg-opacity-50 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"
					/>
					<BookingIcon />
				</div>
				<h4 class="text-lg font-bold mb-2">Early Booking</h4>
			</div>
			<div class="py-5">
				<div class="group inline-flex items-center justify-center w-12 h-12 mb-8 relative">
					<div
						class="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-rose-600 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-rose-600 bg-opacity-50 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"
					/>
					<ApprovedIcon />
				</div>
				<h4 class="text-lg font-bold mb-2">No Credit Check</h4>
			</div>
			<div class="py-5">
				<div class="group inline-flex items-center justify-center w-12 h-12 mb-8 relative">
					<div
						class="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-blue-600 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-blue-600 bg-opacity-50 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"
					/>
					<NoPostPayIcon />
				</div>
				<h4 class="text-lg font-bold mb-2">No Post Payments</h4>
			</div>
			<div class="py-5">
				<div class="group inline-flex items-center justify-center w-12 h-12 mb-8 relative">
					<div
						class="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-emerald-700 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-emerald-700 bg-opacity-50 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"
					/>
					<FlexPayIcon />
				</div>
				<h4 class="text-lg font-bold mb-2">Flexible Payments</h4>
			</div>
			<div class="py-5">
				<div class="group inline-flex items-center justify-center w-12 h-12 mb-8 relative">
					<div
						class="absolute inset-0 rounded-xl -m-3 transform -rotate-6 bg-yellow-400 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 rounded-xl -m-3 transform rotate-2 bg-yellow-400 bg-opacity-50 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110"
					/>
					<FastConvenientIcon />
				</div>
				<h4 class="text-lg font-bold mb-2">Fast & Convenient</h4>
			</div>
		</div>
		<!-- END Features -->
	</div>
</div>
