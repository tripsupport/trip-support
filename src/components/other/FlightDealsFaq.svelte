<script>
	import OutClick from 'svelte-outclick';
	import { slide } from 'svelte/transition';

	let q1 = false;
	const toggleq1 = () => {
		q1 = !q1;
	};
	function hideq1() {
		q1 = false;
	}

	let q2 = false;
	const toggleq2 = () => {
		q2 = !q2;
	};
	function hideq2() {
		q2 = false;
	}

	$: q3 = false;
	const toggleq3 = () => {
		q3 = !q3;
	};
	function hideq3() {
		q3 = false;
	}

	let q4 = false;
	const toggleq4 = () => {
		q4 = !q4;
	};
	function hideq4() {
		q4 = false;
	}

	let q5 = false;
	const toggleq5 = () => {
		q5 = !q5;
	};
	function hideq5() {
		q5 = false;
	}

	let q6 = false;
	const toggleq6 = () => {
		q6 = !q6;
	};
	function hideq6() {
		q6 = false;
	}

	let q7 = false;
	const toggleq7 = () => {
		q7 = !q7;
	};
	function hideq7() {
		q7 = false;
	}
</script>

<div class="mx-auto max-w-7xl bg-white">
	<!-- ====== About Section Start -->
	<section
		class="


   relative
   z-20
   overflow-hidden
   "
	>
		<!-- ====== FAQ Section Start -->
		<div class="container">
			<div class="flex flex-wrap">
				<div class="w-full px-4">
					<div class=" mb-6 lg:mb-10 max-w-[520px]">
						<span class="font-normal text-tiny block text-rose-600"> FAQs </span>
						<h2
							class="
                  font-extrabold
                  text-2xl
                  sm:text-4xl
                  text-gray-900
                  mb-4
                  "
						>
							Frequently Asked Questions
						</h2>
					</div>
				</div>
			</div>
			<div class="flex flex-wrap -mx-4">
				<div class="w-full lg:w-1/2 px-4">
					<!-- Question 1 -->

					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq1} class="faq-btn flex w-full justify-between items-center">
							<div class="text-left">
								<h4 class="text-base text-left font-semibold text-black">
									Which airlines have a flexible cancellation policy for flights from Edmonton?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q1}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{/if}
							</div>
						</button>
						<OutClick on:outclick={hideq1}>
							{#if q1}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										Air Canada, WestJet, Swoop, Flair, Air North and Sunwing all advertise flexible
										cancellation policies for travel plans that are disrupted due to Covid. If you
										cancel your flight for other reasons policies vary depending on fare conditions
										and airlines. Check on the airline websites for latest terms and conditions.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>

					<!-- Question 2 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq2} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									What airport do you fly from for flights from Edmonton?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q2}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{/if}
							</div>
						</button>
						<OutClick on:outclick={hideq2}>
							{#if q2}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										Some of the airports you fly from for flights from Edmonton International
										Airport in Alberta include Hamilton, Abbotsford, Vancouver, Calgary, Toronto,
										Kelowna, Prince George, Montreal, Watson Lake and Yellow Knife.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>

					<!-- Question 3 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq3} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									What are the cheapest airlines flying from Edmonton to anywhere?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q3}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{/if}
							</div>
						</button>
						<OutClick on:outclick={hideq3}>
							{#if q3}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tiny text-gray-700 leading-relaxed py-3">
										Some of the airports you fly from for flights from Edmonton International
										Airport in Alberta include Hamilton, Abbotsford, Vancouver, Calgary, Toronto,
										Kelowna, Prince George, Montreal, Watson Lake and Yellow Knife.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- Question 4 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq4} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									What is the shortest direct flight from Edmonton?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q4}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{/if}
							</div>
						</button>
						<OutClick on:outclick={hideq4}>
							{#if q4}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tiny text-gray-700 leading-relaxed py-3">
										The shortest flight from Edmonton is to Red Deer and it only takes about 40
										minutes from take-off to landing. You will barely have time to read the
										in-flight magazine before the pilot announces you are arriving in Red Deer which
										is in the same time zone as Edmonton.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
				</div>
				<div class="w-full lg:w-1/2 px-4">
					<!-- Question 5 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq5} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									Where are the cheapest places to fly to from Edmonton?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q5}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{/if}
							</div>
						</button>
						<OutClick on:outclick={hideq5}>
							{#if q5}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tiny text-gray-700 leading-relaxed py-3">
										Generally flights to Red Deer, Whitecourt and Lac La Biche are the cheapest from
										Edmonton before the distance to all three destinations is under 200 km. After
										that Bonnyville, Lloydminster, Slave Lake and Calgary are next, all being in the
										200 km range.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- Question 6 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq6} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									Which airlines fly from Edmonton?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q6}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{/if}
							</div>
						</button>
						<OutClick on:outclick={hideq6}>
							{#if q6}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tiny text-gray-700 leading-relaxed py-3">
										WestJet, Swoop, Air Canada, CanWest Air, Northwestern Air, Canadian North,
										Central Mountain Air and Flair fly from Edmonton International Airport. What are
										the most popular destinations to fly from Edmonton? You can reach many popular
										travel destinations from Edmonton International Airport. Some popular domestic
										destinations are Toronto, Calgary, Hamilton, Vancouver and Winnipeg.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- Question 7 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq7} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									Can I book my flight from Edmonton and pay later?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q7}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{:else}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								{/if}
							</div>
						</button>
						<OutClick on:outclick={hideq7}>
							{#if q7}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tiny text-gray-700 leading-relaxed py-3">
										Yes! Using our flexible Book Now, Pay Later option, you can book your flight
										from Edmonton and pay later. You can buy the air ticket by putting down a small
										deposit to secure the services and pay the balance in instalments. Flexibility
										and savings are just some of the benefits of flying with Trip Support.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- ====== FAQ Section End -->
</div>
