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

	let q8 = false;
	const toggleq8 = () => {
		q8 = !q8;
	};
	function hideq8() {
		q8 = false;
	}

	let q9 = false;
	const toggleq9 = () => {
		q9 = !q9;
	};
	function hideq9() {
		q9 = false;
	}

	let q10 = false;
	const toggleq10 = () => {
		q10 = !q10;
	};
	function hideq10() {
		q10 = false;
	}

	let q11 = false;
	const toggleq11 = () => {
		q11 = !q11;
	};
	function hideq11() {
		q11 = false;
	}

	let q12 = false;
	const toggleq12 = () => {
		q12 = !q12;
	};
	function hideq12() {
		q12 = false;
	}

	let q13 = false;
	const toggleq13 = () => {
		q13 = !q13;
	};
	function hideq13() {
		q13 = false;
	}

	let q14 = false;
	const toggleq14 = () => {
		q14 = !q14;
	};
	function hideq14() {
		q14 = false;
	}

	let q15 = false;
	const toggleq15 = () => {
		q15 = !q15;
	};
	function hideq15() {
		q15 = false;
	}

	let q16 = false;
	const toggleq16 = () => {
		q16 = !q16;
	};
	function hideq16() {
		q16 = false;
	}

	let q17 = false;
	const toggleq17 = () => {
		q17 = !q17;
	};
	function hideq17() {
		q17 = false;
	}

	let q18 = false;
	const toggleq18 = () => {
		q18 = !q18;
	};
	function hideq18() {
		q18 = false;
	}
</script>

<div class="mx-auto max-w-7xl bg-white">
	<!-- ====== About Section Start -->
	<section
		class="
    pb-6 pt-12
   sm:pt-24
   sm:pb-12
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
						<p class="sm:text-base text-tiny text-body-color">
							See below for specific answers to frequently asked questions.
						</p>
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
									How can I get a copy of my itinerary or booking details?
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
										You can find your Trip Support reference or Airline confirmation number at the
										top of your <a class="font-bold text-rose-600 hover:text-rose-500" href="#"
											>"My Booking Page"</a
										> or in your confirmation email.
									</p>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										Your Trip Support confirmation number consists of Four alphabet and 9-digits
										(TSFP 123-456-789) and your airline confirmation number is a 6-digit
										alphanumeric code (ex: LW5QAI).
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
									How can I get a copy of my itinerary or booking details?
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
										Your itinerary and booking details are available to you at all times through
										your ‘My Booking Page in your account’ and through your email confirmation. You
										can also print and share your itinerary by email through your ‘My Booking Page’.
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
									Why was my booking canceled?
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
										Unfortunately, there can be several reasons for a cancellation. You will find a
										detailed message regarding the status of your itinerary at your <b
											>‘My Booking Page’</b
										> . A cancellation email was also sent to you verifying the status of your booking.
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
									Why was my booking canceled?
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
										Unfortunately, there can be several reasons for a cancellation. You will find a
										detailed message regarding the status of your itinerary at your <b
											>‘My Booking Page’</b
										> . A cancellation email was also sent to you verifying the status of your booking.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- Question 5 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq5} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">How do I check-in?</h4>
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
										In person at the airport or you can also check in directly on your airline’s
										website available only 24 hours before your departure. You need to know your
										airline confirmation number which can be found on your <b
											class="text-tb text-gray-800 leading-relaxed">‘My Booking Page’</b
										>.
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
									How do I get my boarding pass?
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
										After you check-in (either online or in person), the airline will issue your
										boarding pass. Please note that you can only check-in 24 hours before your
										departure.
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
									Where can I find my e-ticket number?
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
										You can find your e-ticket number directly on your <b
											class="text-tb text-gray-800 leading-relaxed">‘My Booking Page’</b
										> on the top right side of the page. You can also find it in your ticket conformation
										email mentioned’’E-Ticket’’
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- Question 8 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq8} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">What is Basic Economy?</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q8}
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
						<OutClick on:outclick={hideq8}>
							{#if q8}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										Basic economy refers to the class of your booking. Seats are also located in the
										economy cabin but have additional restrictions that normal economy fare does
										not. Restrictions may vary from one airline to another, but the main difference
										between these two classes of tickets is the ability to make changes to your
										flights, free carry-ons/checked baggage, and pre-assigned seating.
									</p>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										Here are more details about basic economy restrictions by airline:
									</p>
									<p class="text-base text-body-color font-bold leading-relaxed py-3">Delta</p>
									<ul class="list-disc p-2">
										<li>
											Seat assignment at check-in, with no option to choose online in advance.
										</li>
										<li>
											Passengers traveling together, including families, might not be seated
											together.
										</li>
										<li>
											No eligibility for same-day changes or ticket refunds after the standard
											24-hour cancellation period.
										</li>
										<li>Last boarding group.</li>
										<li>
											No eligibility for paid or complimentary upgrades or preferred seats, despite
											loyalty program status.
										</li>
									</ul>

									<p class="text-base text-body-color font-bold leading-relaxed py-3">
										American Airlines
									</p>
									<ul class="list-disc p-2">
										<li>Seat assigned by the airline at check-in.</li>
										<li>
											No overhead bin use; you may bring only a personal item that can fit under a
											seat.
										</li>
										<li>
											No eligibility for same-day changes or ticket refunds after the standard
											24-hour cancellation period.
										</li>
										<li>Reduced qualification toward elite status, based on pricing.</li>
									</ul>
									<p class="text-base text-body-color font-bold leading-relaxed py-3">United</p>
									<ul class="list-disc p-2">
										<li>Seat assigned at check-in.</li>
										<li>No family or group seating.</li>
										<li>No overhead bin use.</li>
										<li>No upgrade eligibility.</li>
										<li>Redeemable award miles granted, but with significant restrictions.</li>
									</ul>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- Question 9 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq9} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									Do I need a visa for my trip?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q9}
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
						<OutClick on:outclick={hideq9}>
							{#if q9}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										Depending on your destination, you may need to obtain a visa before your travels
										as many countries will deny you entry if you don’t have the proper documents.
										You can check your status about the visa in <a
											class=" text-rose-600 hover:text-rose-500"
											href="#">https://visacentral.com/</a
										>
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
				</div>
				<div class="w-full lg:w-1/2 px-4">
					<!-- question 10 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq10} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									How can I request a wheelchair?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q10}
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
						<OutClick on:outclick={hideq10}>
							{#if q10}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										You can email us your request for wheelchair or other request at <a
											class=" text-rose-600 hover:text-rose-500"
											href="#">info@tripsupport.com</a
										>. Please mention your name and confirmation number. You can also contact us at
										<b class="text-tb text-gray-800 leading-relaxed">1-855-606-0606</b>
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- question 11 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq11} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									How can I select a meal?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q11}
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
						<OutClick on:outclick={hideq11}>
							{#if q11}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										Please email us your request at info@tripsupport.com. with your name and your
										confirmation number. You can also contact us 1-855-606-0606
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- question 12 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq12} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									I missed my flight, what should I do?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q12}
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
						<OutClick on:outclick={hideq12}>
							{#if q12}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										If you missed your flight, contact your airline [Please connect this page to the
										Airline list] for further assistance. If something within your control caused
										you to miss your departing flight, the airline will automatically cancel your
										entire flight itinerary and the value of your tickets will be lost. If you were
										issued a multi-ticket booking, which is a roundtrip flight with 2 one-way fares,
										the airline might only cancel the initial segment of your flight which was
										missed. Cancellation policies are entirely governed by airlines; any comments,
										questions or concerns should be directed to them.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- Question 13 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq13} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									What is Trip Support’s cancellation policy?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q13}
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
						<OutClick on:outclick={hideq13}>
							{#if q13}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										Most discounted airline tickets are non-refundable. Although non-refundable
										tickets are the most economical, they are also the most restrictive and do not
										allow refunds. These restrictions make it possible for Trip Support to continue
										to offer better fare prices in addition to our existing deeply discounted
										airfares.
									</p>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										If your booking is eligible for a cancellation, it may be subject to an airline
										cancellation fee of up to $250 per passenger, as well as any fees or differences
										in price charged by suppliers. For more information please contact us at
										1-855-606-0606
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- Question 14 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq14} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									How do I know my booking is confirmed?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q14}
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
						<OutClick on:outclick={hideq14}>
							{#if q14}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										Once we finalize your reservation, you will receive a confirmation email with
										your itinerary, airline confirmation number and all other details about your
										trip. You can also view the status of your reservation through your <b
											class="text-tb text-gray-800 leading-relaxed">“My Booking Page“</b
										>
										available to you at all times.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- Question 15 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq15} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									Can I print my e-ticket?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q15}
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
						<OutClick on:outclick={hideq15}>
							{#if q15}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										You can print a copy of your e-ticket through your “My booking Page” or through
										your ticket confirmation email.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>

					<!-- Question 17 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq16} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									Why should I book with Trip Support?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q16}
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
						<OutClick on:outclick={hideq16}>
							{#if q16}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										Aside from being the first online travel agent based on “Book Now Pay Later”
										model in North America, Trip Support is a one-stop shop for all your travel
										plans. We combine the cheapest prices and the best travel options by directly
										negotiating the lowest fares with airlines to give you the most value for your
										trip.
									</p>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										We also have the relationship with the financial institutes as well as angel
										investors to support you to buy your Air ticket or your packages on time and pay
										at the convenience time. You can save hundred dollars when you buy your package
										or air ticket earlier. We help you to find the fares without any financing
										problems.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- Question 18 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq17} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									How can I contact Trip Support customer support?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q17}
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
						<OutClick on:outclick={hideq17}>
							{#if q17}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										We’re here to help! If you would like to speak to a Trip Support agent, you can
										contact us at
									</p>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										Canada: 1-855-606-0606 or 416 444 3750
									</p>
									<p class="text-tb text-gray-800 leading-relaxed">
										USA: 1-833-606-0606 or 949 490 5665
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<!-- Question 19 -->
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq18} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									Where is Trip Support located?
								</h4>
							</div>
							<div
								class="w-full max-w-[40px] h-10 flex items-center justify-end pt-1 rounded-lg bg-opacity-5"
							>
								{#if q18}
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
						<OutClick on:outclick={hideq18}>
							{#if q18}
								<div class="faq-content" transition:slide={{ duration: 500 }}>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										We’re here to help! If you would like to speak to a Trip Support agent, you can
										contact us at
									</p>
									<p class="text-tb text-gray-800 leading-relaxed py-3">
										<b class="text-tb text-gray-800 leading-relaxed">Canada office:</b> 7163 Yonge St.
										Unit 134 Thornhill ON. L3T 0C6
									</p>
									<p class="text-tb text-gray-800 leading-relaxed">
										<b class="text-tb text-gray-800 leading-relaxed">USA office:</b> 4667 MacArthur Blvd
										Suite 340 Newport Beach CA 92660
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
				</div>
			</div>
			<div class="flex justify-end px-4">
				<a
					sveltekit:prefetch
					href="/faqs"
					class="text-tiny font-medium text-pblue-600 hover:text-pblue-500">View all FAQs</a
				>
			</div>
		</div>
		<div class="absolute bottom-0 right-0 z-[-1]">
			<svg
				width="1440"
				height="886"
				viewBox="0 0 1440 886"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.5"
					d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
					fill="url(#paint0_linear)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="1308.65"
						y1="1142.58"
						x2="602.827"
						y2="-418.681"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="#3056D3" stop-opacity="0.36" />
						<stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
						<stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	</section>
	<!-- ====== FAQ Section End -->
</div>
