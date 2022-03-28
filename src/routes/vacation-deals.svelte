<script>
	import BookingWidget from '../components/booking/BookingWidget.svelte';
	import MoreDestinations from '../components/other/MoreDestinations.svelte';
	import SpecialOfferCards from '../components/other/SpecialOfferCards.svelte';
	import VacDealsAcc from '../components/other/VacDealsAcc.svelte';
	import Subscribe from '../components/home/Subscribe.svelte';
</script>

<!-- CTA Section -->
<div class="relative bg-gray-900 -mt-1">
	<div
		class="sm:hidden relative h-32 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-2/5"
	>
		<img
			class="w-full h-full object-cover"
			src="/images/vacation-deals/spring-break.jpg"
			alt="vacation deals"
		/>
		<div
			aria-hidden="true"
			class="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 mix-blend-multiply"
		/>
	</div>
	<div class="md:hidden relative mx-auto max-w-md px-4 pt-6 pb-10 ">
		<div class="md:mr-auto md:w-1/2 md:pr-10">
			<p class="mt-2 text-white text-2xl font-bold">Spring Vacation Packages</p>
		</div>
	</div>

	<div
		class="hidden md:block relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:pb-44 lg:pt-24"
	>
		<div class="md:mr-auto md:w-1/2 md:pr-10">
			<p class="mt-2 text-white text-3xl font-extrabold sm:text-4xl">Spring Vacation Packages</p>
			<p class="mt-3 text-base text-gray-300">
				We're focused on making your dream vacation. Find the right vacation and book with
				confidence.
			</p>
		</div>
	</div>
	<div
		class="hidden sm:block relative h-56 bg-indigo-600 sm:h-72 md:absolute md:right-0 md:top-0 md:h-full md:w-2/5"
	>
		<img
			class="w-full h-full object-cover"
			src="/images/vacation-deals/spring-break.jpg"
			alt="vacation deals"
		/>
		<div
			aria-hidden="true"
			class="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-200 mix-blend-multiply"
		/>
	</div>
</div>

<BookingWidget />

<div class="relative bg-white">
	<div class="relative max-w-7xl mx-auto mt-4 mb-12 lg:mb-16 lg:mt-8">
		<!-- Heading -->
		<section class="relative">
			<div class="text-left px-4">
				<div class="sm:flex sm:items-baseline sm:justify-between">
					<h1 class="text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-3xl">
						<span class="block xl:inline"
							>Special offers from resorts and hotels across the Americas</span
						>
						<!-- <span class="block text-indigo-600 xl:inline">Book Now</span> -->
					</h1>
				</div>
				<p class="mt-2 text-md text-gray-600 sm:mt-3 sm:text-md md:mt-3 md:text-md lg:mx-0">
					Plan your vacation at one of our beautiful resorts across the United States, Canada,
					Caribbean and Latin America
				</p>
			</div>
		</section>
		<SpecialOfferCards />
		<section class="relative px-4">
			<div class="text-left prose max-w-4xl sm:px-0 px-4 mt-12">
				<p class="text-md text-gray-600 sm:text-md  md:text-md lg:mx-0">
					Spring is the perfect time to visit some of the most popular destinations around the
					world. Nice weather, less crowded tourist areas, and more affordable vacations await you
					in the months of March, April, and May. The temperatures are rising from the cold winters
					and the flowers are blooming in joy. Take a spring vacation to avoid the heavy travel
					times during the summer. We’ve done the research and listed some fun and budget-friendly
					vacation packages below.
				</p>
			</div>
		</section>
		<section>
			<VacDealsAcc />
		</section>
		<!-- Heading -->
		<section class="relative px-4">
			<div class="text-left prose max-w-4xl sm:px-0 px-4 mt-12">
				<h1 class="text-lg tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-2xl">
					<span class="block xl:inline">Book Now Pay Later</span>
					<!-- <span class="block text-indigo-600 xl:inline">Book Now</span> -->
				</h1>
				<p class="text-md text-gray-600 sm:text-md md:text-md lg:mx-0 mt-0">
					Book your Spring vacation without the stress on your wallet. Trip Support’s Book Now Pay
					Later helps you save money and plan ahead. Plan for the whole family to have a wonderful
					time. If you have children in school, spring break is a great time to take time off. Trip
					Support never checks a customer’s credit score. With a small installment upfront, you can
					begin making monthly payments to pay off your vacation before you even board the plane.
				</p>
				<p class="text-md text-gray-600 sm:text-md md:text-md lg:mx-0 mt-0">
					April showers bring May vacations! Enjoy!
				</p>
			</div>
		</section>
	</div>
</div>

<Subscribe />
<MoreDestinations />
