<script>
	import BnplFaq1 from '../../components/pages/BnplFaq1.svelte';
	import BnplFaq2 from '../../components/pages/BnplFaq2.svelte';
</script>

<div class="bg-gray-50">
	<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
		<div class="max-w-4xl ">
			<h2 class=" text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>

			<div class="bg-white mt-8">
				<div id="accordion-arrow-icon" data-accordion="open">
					<!-- 1st Accordion -->
					<h2 id="accordion-arrow-icon-heading-1">
						<button
							type="button"
							class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200  hover:bg-gray-100 dark:hover:bg-gray-800"
							data-accordion-target="#accordion-arrow-icon-body-1"
							aria-expanded="true"
							aria-controls="accordion-arrow-icon-body-1"
						>
							<span>Why should I use Book Now, Pay Later?</span>
							<svg
								data-accordion-icon=""
								class="w-6 h-6 shrink-0"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
								/></svg
							>
						</button>
					</h2>
					<div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
						<div
							class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
						>
							<BnplFaq1 />
						</div>
					</div>

					<!-- 2nd Accordion -->
					<h2 id="accordion-arrow-icon-heading-2">
						<button
							type="button"
							class="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200  hover:bg-gray-100 dark:hover:bg-gray-800"
							data-accordion-target="#accordion-arrow-icon-body-2"
							aria-expanded="false"
							aria-controls="accordion-arrow-icon-body-2"
						>
							<span>What does Book Now, Pay Later not apply to?</span>
							<svg
								data-accordion-icon=""
								class="w-6 h-6 shrink-0"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
								/></svg
							>
						</button>
					</h2>
					<div
						id="accordion-arrow-icon-body-2"
						class="hidden"
						aria-labelledby="accordion-arrow-icon-heading-2"
					>
						<div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
							<BnplFaq2 />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
