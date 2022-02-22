<script>
	import BookingWidget from './BookingWidget.svelte';
</script>

<section
	class="relative z-10 mx-auto -mt-6 md:-mt-24 max-w-7xl px-0 pb-12 sm:px-6 lg:px-8 lg:mb-6"
	aria-labelledby="contact-heading"
>
	<div class="grid grid-cols-1 gap-y-20 lg:grid-cols-1 lg:gap-y-0 lg:gap-x-8">
		<div class="flex flex-col rounded-none sm:rounded-xl bg-white shadow-xl">
			<div class="relative flex-1 px-4 sm:px-8 py-4 md:px-10">
				<!-- <HorizontalTab /> -->
				<BookingWidget />
			</div>
		</div>
	</div>
</section>
