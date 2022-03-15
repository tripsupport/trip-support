<script>
	import WeeklyExample from '../pages/WeeklyExample.svelte';
	import BiWeeklyExample from '../pages/BiWeeklyExample.svelte';
	import MonthlyExample from '../pages/MonthlyExample.svelte';

	let activeTab = 'weekly';
</script>

<div class="bg-white">
	<section
		aria-labelledby="features-heading"
		class="max-w-7xl mx-auto py-4 sm:py-12 sm:px-2 lg:px-8"
	>
		<div class="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
			<div class="max-w-7xl ">
				<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					How Does This Work?
				</h2>
				<p class="mt-4 text-gray-700 max-w-4xl prose">
					At Trip Support, we believe in offering you simple solutions for your travel needs. That’s
					why our Book Now Pay Later system is as easy as can be. Simply choose your travel
					destination, and we will do the rest. We will buy your tickets and your vacation packages.
					Once that happens, you’d be asked to pay us in installments. Our Book Now Pay Later option
					allows you to enjoy the benefits of early bookings savings. Instead of paying the full
					amount of your trip in advance, you only have to place a deposit to secure your tickets.
				</p>
			</div>

			<div class="mt-4">
				<div class="-mx-4 flex overflow-x-auto sm:mx-0">
					<div class="flex-auto px-4 border-b border-gray-200 sm:px-0">
						<div class="-mb-px flex space-x-10" aria-orientation="horizontal" role="tablist">
							<!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
							<button
								class="border-transparent whitespace-nowrap py-6 border-b-2 font-medium text-sm
                {activeTab === 'weekly'
									? 'border-rose-600 text-rose-600", text-rose-600 font-bold'
									: 'text-gray-500  hover:text-rose-600 hover:border-rose-600 font-semibold'}
                "
								role="tab"
								type="button"
								on:click={() => (activeTab = 'weekly')}
							>
								Weekly Payment Plan
							</button>

							<button
								class="border-transparent whitespace-nowrap py-6 border-b-2 font-medium text-sm
                {activeTab === 'bi-weekly'
									? 'border-rose-600 text-rose-600", text-rose-600 font-bold'
									: 'text-gray-500  hover:text-rose-600 hover:border-rose-600 font-semibold'}"
								role="tab"
								type="button"
								on:click={() => (activeTab = 'bi-weekly')}
							>
								Bi-Weekly Payment Plan
							</button>
							<button
								class="border-transparent whitespace-nowrap py-6 border-b-2 font-medium text-sm
                {activeTab === 'monthly'
									? 'border-rose-600 text-rose-600", text-rose-600 font-bold'
									: 'text-gray-500  hover:text-rose-600 hover:border-rose-600 font-semibold'}"
								role="tab"
								type="button"
								on:click={() => (activeTab = 'monthly')}
							>
								Monthly Payment Plan
							</button>
						</div>
					</div>
				</div>

				{#if activeTab === 'weekly'}
					<WeeklyExample />
				{/if}

				{#if activeTab === 'bi-weekly'}
					<BiWeeklyExample />
				{/if}

				{#if activeTab === 'monthly'}
					<MonthlyExample />
				{/if}
			</div>
		</div>
	</section>
</div>
