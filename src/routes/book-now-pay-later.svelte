<script>
	import BookingWidget from '../components/booking/BookingWidget.svelte';
	import BookNowHero from '../components/pages/BookNowHero.svelte';
	import BookNowFeature from '../components/pages/BookNowFeature.svelte';
	import HowDoesItWork from '../components/pages/HowDoesItWork.svelte';
	import BnplFlights from '../components/pages/BnplFlights.svelte';
	import BnplVacations from '../components/pages/BnplVacations.svelte';
</script>

<BookNowHero />
<BookingWidget />
<BookNowFeature />
<HowDoesItWork />

<BnplFlights />
<BnplVacations />

<div class="bg-white">
	<div class="max-w-2xl mx-auto py-6 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="max-w-7xl ">
			<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				Pros of Book Now Pay Later
			</h2>
			<ul class="mt-4 ml-4 text-gray-700 max-w-4xl prose list-disc">
				<li>
					You can instantly take advantage of any and all time-sensitive discounts and deals
					Airlines may be offering
				</li>
				<li>No credit check means no headache when it comes to financing your trip</li>
				<li>No hidden charges or fees</li>
				<li>You can choose the best plan that works for you</li>
			</ul>
		</div>
	</div>
</div>

<div class="bg-white">
	<div class="max-w-2xl mx-auto py-6 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="max-w-7xl ">
			<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				Book Now Pay Later plan does not apply to:
			</h2>
			<ul class="mt-4 ml-4 text-gray-700 max-w-3xl prose list-disc">
				<li>People without a valid credit/debit card from a Canada or the US bank.</li>
				<li>
					Hotel bookings, however for more information and other payment options you may reach out
					to us by dialing for CA: <a href="tel:+1-855-606-0606">1-855-606-0606</a> and for US:
					<a href="tel:+1-833-606-0606">1-833-606-0606</a>
				</li>
				<li>No hidden charges or fees</li>
				<li>You can choose the best plan that works for you</li>
			</ul>
		</div>
	</div>
</div>
