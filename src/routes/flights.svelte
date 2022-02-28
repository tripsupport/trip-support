<script>
	import BookingWidget from '../components/booking/BookingWidget.svelte';
</script>

<!-- Featured section -->
<section aria-labelledby="cause-heading">
	<div class="relative bg-gray-800 pt-28 pb-44 px-6 sm:px-12 lg:px-16">
		<div class="absolute inset-0 overflow-hidden ">
			<img
				src="images/hero/flights-hero2.jpg"
				alt=""
				class="w-full h-full object-center object-cover"
			/>
		</div>
		<div aria-hidden="true" class="absolute inset-0 bg-gray-900 bg-opacity-50" />
		<div class="relative max-w-6xl mx-auto flex flex-col ">
			<h2 id="cause-heading" class="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
				Amazing Flight Deals
			</h2>
			<p class="mt-3 text-xl text-white">
				Secure your ticket with a small deposit. No Credit Check Needed.
			</p>
		</div>
	</div>
</section>
<BookingWidget />
