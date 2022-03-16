<script>
	import { slide } from 'svelte/transition';

	let offer = false;
	const toggleOffer = () => {
		offer = !offer;
	};

	let credit = false;
	const toggleCredit = () => {
		credit = !credit;
	};

	let flexible = false;
	const toggleFlexible = () => {
		flexible = !flexible;
	};

	let fees = false;
	const toggleFees = () => {
		fees = !fees;
	};

	let fast = true;
	const toggleFast = () => {
		fast = !fast;
	};

	let post = false;
	const togglePost = () => {
		post = !post;
	};

	const data = [
		{
			title: 'Great offers',
			content:
				'When airlines have crazy discounts to a destination you plan on visiting, you can easily be frustrated if you can’t come up with the money right away. Likewise, if you see a dream destination on offer, you can use Book Now Pay Later flights and hotel deals to pay for the trip while discount prices still prevail. Book Now Pay Later flights allow you to make savings on reduced airfares and offers, and the best part is that most international and local airlines are cool with this arrangement. For example, if you were to check our site for Book Now Pay Later no credit check Canada flights, you can find flights to most holiday and business destinations in the world.'
		},
		{
			title: 'No credit check',
			content:
				'Book Now Pay Later with no credit check, you can pursue your wanderlust and explore the world easier than ever before. Trip Support’s Book Now Pay Later plan can help you cover all your travel expenses such as transportation costs, accommodation, food, activities, tours, and others. To qualify for a book now pay later flight, some agencies ask that you raise an amount/percentage of the airfare, but the guarantee is that your financing will be approved. In fact, you can get no credit check airline ticket financing, and unlike credit loans, you don’t have to provide a whole file of paperwork to get it approved. You also don’t have to get a guarantor or collateral, and sometimes you can get a waiver for the initial deposit and just pay for the flight when you are able to. This means that even with a limited credit card, your travel is sorted out.'
		},
		{
			title: 'Flexible payment plans',
			content:
				'Book Now Pay Later flights plan offer flexible repayment options, as you can choose between weekly, bi-monthly or monthly payments, whatever works for you best. The finance term for book or travel and pay later flights is determined by you. Depending on the amount you want to pay per month, you can complete paying for the financing within three months, six months, or even a year with little to no interest. This means that even unemployed people can book a flight on a book now payment plan from book now pay later agencies as long as they give assurance of payment.'
		},
		{
			title: 'No hidden fees',
			content:
				'Once you reimburse the amount agreed on in the payment plan, your debt is done. Everything is laid out at the start and included in the package, and since it is not a revolving credit facility, you can plan your finances down to the last cent. That said, in case you want to change your payment plan in the future, you will have to make a new application to buy the flight ticket.'
		},
		{
			title: 'Fast & convenient',
			content:
				'To make sure you don’t miss the best travel deals, we will process and approve your travel loan right away. '
		},
		{
			title: 'No post-vacation payments',
			content:
				'With credit card payments, you have to think about your remaining instalments after you come back home. However, with this travel loan, you pay your trip in advance (you have up to 180 days before the departure date to repay). This means that you can relax and enjoy your vacation without being worried about the payments once you come back from your trip.'
		}
	];
</script>

<!-- Features Section: Modern Alternate With Icons -->
<div class="bg-white">
	<div class="space-y-16 container xl:max-w-7xl mx-auto px-2 py-16">
		<!-- Heading -->
		<div class="text-center">
			<div class="text-sm uppercase font-bold tracking-wider mb-1 text-rose-600">
				Trip Support Feature
			</div>
			<h2 class="text-3xl md:text-4xl font-extrabold mb-4">
				What is the Book Now Pay Later Feature?
			</h2>
			<h3
				class="text-md md:text-base md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto"
			>
				Ready to pursue your wanderlust and explore the world easier than ever before? Trip
				Support’s Book Now Pay Later Travel plan can help cover your travel expenses in a
				cost-effective manner. These expenses can include transportation costs, accommodations,
				food, activities, tours, and more. Uniquely, we offer this approach without the need for
				credit checks and extra boring, time-consuming documentation.
				<span class="font-bold"
					>We believe that people should be able to travel regardless of their credit score</span
				>.
			</h3>
		</div>
		<!-- END Heading -->

		<!-- Features -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
			<div
				class="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200"
			>
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
						<div
							class="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-orange-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg"
						/>
						<div
							class="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-orange-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"
						/>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-adjustments inline-block w-8 h-8"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
							/>
						</svg>
					</div>
				</div>
				<h4 class="text-lg font-bold mb-2 text-center">{data[0].title}</h4>
				{#if offer}
					<p class="leading-relaxed text-gray-600" transition:slide={{ duration: 500 }}>
						{data[0].content}
					</p>
				{:else}
					<p class="leading-relaxed text-gray-600 line-clamp-3">
						{data[0].content}
					</p>
				{/if}
				<button class="text-tiny text-rose-600" on:click={toggleOffer}>read more</button>
			</div>
			<div
				class="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200"
			>
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
						<div
							class="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-red-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg"
						/>
						<div
							class="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-red-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"
						/>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-chart-pie inline-block w-8 h-8"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
							<path
								fill-rule="evenodd"
								d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
				<h4 class="text-lg font-bold mb-2 text-center">{data[1].title}</h4>
				{#if credit}
					<p class="leading-relaxed text-gray-600" transition:slide={{ duration: 500 }}>
						{data[1].content}
					</p>
				{:else}
					<p class="leading-relaxed text-gray-600 line-clamp-3">
						{data[1].content}
					</p>
				{/if}
				<button class="text-tiny text-rose-600" on:click={toggleCredit}>read more</button>
			</div>
			<div
				class="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200"
			>
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
						<div
							class="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-emerald-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg"
						/>
						<div
							class="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-emerald-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"
						/>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-globe inline-block w-8 h-8"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
				<h4 class="text-lg font-bold mb-2 text-center">{data[2].title}</h4>
				{#if flexible}
					<p class="leading-relaxed text-gray-600" transition:slide={{ duration: 500 }}>
						{data[2].content}
					</p>
				{:else}
					<p class="leading-relaxed text-gray-600 line-clamp-3">
						{data[2].content}
					</p>
				{/if}
				<button class="text-tiny text-rose-600" on:click={toggleFlexible}>read more</button>
			</div>
			<div
				class="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200"
			>
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
						<div
							class="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-purple-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg"
						/>
						<div
							class="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-purple-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"
						/>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-lightning-bolt inline-block w-8 h-8"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
								clip-rule="evenodd"
							/>
							<path
								d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
							/>
						</svg>
					</div>
				</div>
				<h4 class="text-lg font-bold mb-2 text-center">{data[3].title}</h4>
				{#if fees}
					<p class="leading-relaxed text-gray-600" transition:slide={{ duration: 500 }}>
						{data[3].content}
					</p>
				{:else}
					<p class="leading-relaxed text-gray-600 line-clamp-3">
						{data[3].content}
					</p>
				{/if}
				<button class="text-tiny text-rose-600" on:click={toggleFees}>read more</button>
			</div>
			<div
				class="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200"
			>
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
						<div
							class="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-blue-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg"
						/>
						<div
							class="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-blue-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"
						/>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-puzzle inline-block w-8 h-8"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
				<h4 class="text-lg font-bold mb-2 text-center">{data[4].title}</h4>
				{#if fast}
					<p class="leading-relaxed text-gray-600" transition:slide={{ duration: 500 }}>
						{data[4].content}
					</p>
				{:else}
					<p class="leading-relaxed text-gray-600 line-clamp-3">
						{data[4].content}
					</p>
				{/if}
				<!-- <button class="text-tiny text-rose-600" on:click={toggleFast}>read more</button> -->
			</div>
			<div
				class="group p-5 transition ease-out duration-200 border border-transparent rounded-2xl hover:border-gray-200"
			>
				<div class="text-center">
					<div class="inline-flex items-center justify-center w-12 h-12 m-5 mb-12 relative">
						<div
							class="absolute inset-0 rounded-3xl -m-5 transform rotate-3 bg-pink-300 transition ease-out duration-200 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-lg"
						/>
						<div
							class="absolute inset-0 rounded-2xl -m-2 transform -rotate-3 bg-pink-700 bg-opacity-75 shadow-inner transition ease-out duration-200 group-hover:rotate-2 group-hover:scale-105"
						/>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-white relative transform transition ease-out duration-200 group-hover:scale-110 hi-outline hi-users inline-block w-8 h-8"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
							<path
								fill-rule="evenodd"
								d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
				<h4 class="text-lg font-bold mb-2 text-center">{data[5].title}</h4>
				{#if post}
					<p class="leading-relaxed text-gray-600" transition:slide={{ duration: 500 }}>
						{data[5].content}
					</p>
				{:else}
					<p class="leading-relaxed text-gray-600 line-clamp-3">
						{data[5].content}
					</p>
				{/if}
				<button class="text-tiny text-rose-600" on:click={togglePost}>read more</button>
			</div>
		</div>
		<!-- END Features -->
	</div>
</div>
<!-- END Features Section: Modern Alternate With Icons -->
