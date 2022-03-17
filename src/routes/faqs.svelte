<script>
	import { slide } from 'svelte/transition';

	let q1 = false;
	const toggleq1 = () => {
		q1 = !q1;
	};
	let q2 = false;
	const toggleq2 = () => {
		q2 = !q2;
	};
	let q3 = false;
	const toggleq3 = () => {
		q3 = !q3;
	};
	let q4 = false;
	const toggleq4 = () => {
		q4 = !q4;
	};
	let q5 = false;
	const toggleq5 = () => {
		q5 = !q5;
	};
	let q6 = false;
	const toggleq6 = () => {
		q6 = !q6;
	};
	let q7 = false;
	const toggleq7 = () => {
		q7 = !q7;
	};
	let q8 = false;
	const toggleq8 = () => {
		q8 = !q8;
	};
	let q9 = false;
	const toggleq9 = () => {
		q9 = !q9;
	};
	let q10 = false;
	const toggleq10 = () => {
		q10 = !q10;
	};
	let q11 = false;
	const toggleq11 = () => {
		q11 = !q11;
	};
	let q12 = false;
	const toggleq12 = () => {
		q12 = !q12;
	};
	let q13 = false;
	const toggleq13 = () => {
		q13 = !q13;
	};
	let q14 = false;
	const toggleq14 = () => {
		q14 = !q14;
	};
	let q15 = false;
	const toggleq15 = () => {
		q15 = !q15;
	};
	let q16 = false;
	const toggleq16 = () => {
		q16 = !q16;
	};
	let q17 = false;
	const toggleq17 = () => {
		q17 = !q17;
	};
	let q18 = false;
	const toggleq18 = () => {
		q18 = !q18;
	};
</script>

<div class="mx-auto max-w-7xl bg-white">
	<!-- ====== About Section Start -->
	<section
		class="
   pt-20
   pb-12
   lg:pb-[90px]
   relative
   z-20
   overflow-hidden
   "
	>
		<!-- ====== FAQ Section Start -->
		<div class="container">
			<div class="flex flex-wrap -mx-4">
				<div class="w-full px-4">
					<div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[520px]">
						<span class="font-bold text-md mb-2 block"> FAQ </span>
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
						<p class="text-base text-body-color">
							There are many variations of passages of Lorem Ipsum available but the majority have
							suffered alteration in some form.
						</p>
					</div>
				</div>
			</div>
			<div class="flex flex-wrap -mx-4">
				<div class="w-full lg:w-1/2 px-4">
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq1} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">
									How can I get a copy of my itinerary or booking details?
								</h4>
							</div>
						</button>
						{#if q1}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									You can find your Trip Support reference or Airline confirmation number at the top
									of your <a class="font-bold text-rose-600 hover:text-rose-500" href="#"
										>"My Booking Page"</a
									> or in your confirmation email.
								</p>
								<p class="text-base text-body-color leading-relaxed py-3">
									Your Trip Support confirmation number consists of Four alphabet and 9-digits (TSFP
									123-456-789) and your airline confirmation number is a 6-digit alphanumeric code
									(ex: LW5QAI).
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq2} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">
									How can I get a copy of my itinerary or booking details?
								</h4>
							</div>
						</button>
						{#if q2}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									Your itinerary and booking details are available to you at all times through your
									‘My Booking Page in your account’ and through your email confirmation. You can
									also print and share your itinerary by email through your ‘My Booking Page’.
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq3} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">Why was my booking canceled?</h4>
							</div>
						</button>
						{#if q3}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									Yes, your airline contact information can be found below your, alternatively you
									can also search for your airline here.
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq4} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">
									What is Trip Support’s cancellation policy?
								</h4>
							</div>
						</button>
						{#if q4}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									Most discounted airline tickets are non-refundable. Although non-refundable
									tickets are the most economical, they are also the most restrictive and do not
									allow refunds. These restrictions make it possible for Trip Support to continue to
									offer better fare prices in addition to our existing deeply discounted airfares.
								</p>
								<p class="text-base text-body-color leading-relaxed py-3">
									If your booking is eligible for a cancellation, it may be subject to an airline
									cancellation fee of up to $250 per passenger, as well as any fees or differences
									in price charged by suppliers. For more information please contact us at
									1-855-606-0606
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq5} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">
									How do I know my booking is confirmed?
								</h4>
							</div>
						</button>
						{#if q5}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									Once we finalize your reservation, you will receive a confirmation email with your
									itinerary, airline confirmation number and all other details about your trip. You
									can also view the status of your reservation through your “My Booking Page“
									available to you at all times.
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq6} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">Can I print my e-ticket?</h4>
							</div>
						</button>
						{#if q6}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									You can print a copy of your e-ticket through your “My booking Page” or through
									your ticket confirmation email.
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq7} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">
									Why should I book with Trip Support?
								</h4>
							</div>
						</button>
						{#if q7}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									Aside from being the first online travel agent based on “Book Now Pay Later” model
									in North America, Trip Support is a one-stop shop for all your travel plans. We
									combine the cheapest prices and the best travel options by directly negotiating
									the lowest fares with airlines to give you the most value for your trip.
								</p>
								<p class="text-base text-body-color leading-relaxed py-3">
									We also have the relationship with the financial institutes as well as angel
									investors to support you to buy your Air ticket or your packages on time and pay
									at the convenience time. You can save hundred dollars when you buy your package or
									air ticket earlier. We help you to find the fares without any financing problems.
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq8} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">
									How can I contact Trip Support customer support?
								</h4>
							</div>
						</button>
						{#if q8}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									We’re here to help! If you would like to speak to a Trip Support agent, you can
									contact us at
								</p>
								<p class="text-base text-body-color leading-relaxed py-3">
									Canada: 1-855-606-0606 or 416 444 3750
								</p>
								<p class="text-base text-body-color leading-relaxed py-3">
									USA: 1-833-606-0606 or 949 490 5665
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq9} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">Where is Trip Support located?</h4>
							</div>
						</button>
						{#if q9}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									Canada office: 7163 Yonge St. Unit 134 Thornhill ON. L3T 0C6
								</p>
								<p class="text-base text-body-color leading-relaxed py-3">
									USA office: 4667 MacArthur Blvd Suite 340 Newport Beach CA 92660
								</p>
							</div>
						{/if}
					</div>
				</div>
				<div class="w-full lg:w-1/2 px-4">
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq10} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">Why was my booking canceled?</h4>
							</div>
						</button>
						{#if q10}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									Unfortunately, there can be several reasons for a cancellation. You will find a
									detailed message regarding the status of your itinerary at your ‘My Booking Page’
									. A cancellation email was also sent to you verifying the status of your booking.
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq11} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">How do I check-in?</h4>
							</div>
						</button>
						{#if q11}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									In person at the airport or you can also check in directly on your airline’s
									website available only 24 hours before your departure. You need to know your
									airline confirmation number which can be found on your ‘My Booking Page’.
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq12} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">How do I get my boarding pass?</h4>
							</div>
						</button>
						{#if q12}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									After you check-in (either online or in person), the airline will issue your
									boarding pass. Please note that you can only check-in 24 hours before your
									departure.
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq13} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">
									Where can I find my e-ticket number?
								</h4>
							</div>
						</button>
						{#if q13}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									You can find your e-ticket number directly on your ‘My Booking Page’ on the top
									right side of the page. You can also find it in your ticket conformation email
									mentioned’’E-Ticket’’
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq14} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">What is Basic Economy?</h4>
							</div>
						</button>
						{#if q14}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									Basic economy refers to the class of your booking. Seats are also located in the
									economy cabin but have additional restrictions that normal economy fare does not.
									Restrictions may vary from one airline to another, but the main difference between
									these two classes of tickets is the ability to make changes to your flights, free
									carry-ons/checked baggage, and pre-assigned seating.
								</p>
								<p class="text-base text-body-color leading-relaxed py-3">
									Here are more details about basic economy restrictions by airline:
								</p>
								<p class="text-base text-body-color font-bold leading-relaxed py-3">Delta</p>
								<ul class="list-disc p-2">
									<li>Seat assignment at check-in, with no option to choose online in advance.</li>
									<li>
										Passengers traveling together, including families, might not be seated together.
									</li>
									<li>
										No eligibility for same-day changes or ticket refunds after the standard 24-hour
										cancellation period.
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
										No eligibility for same-day changes or ticket refunds after the standard 24-hour
										cancellation period.
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
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq15} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">Do I need a visa for my trip?</h4>
							</div>
						</button>
						{#if q15}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									Depending on your destination, you may need to obtain a visa before your travels
									as many countries will deny you entry if you don’t have the proper documents. You
									can check your status about the visa in <a
										class=" text-rose-600 hover:text-rose-500"
										href="#">https://visacentral.com/</a
									>
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq16} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">How can I request a wheelchair?</h4>
							</div>
						</button>
						{#if q16}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									You can email us your request for wheelchair or other request at <a
										class=" text-rose-600 hover:text-rose-500"
										href="#">info@tripsupport.com</a
									>. Please mention your name and confirmation number. You can also contact us at
									<b>1-855-606-0606</b>
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq17} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">How can I select a meal?</h4>
							</div>
						</button>
						{#if q17}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									Please email us your request at info@tripsupport.com. with your name and your
									confirmation number. You can also contact us 1-855-606-0606
								</p>
							</div>
						{/if}
					</div>
					<div
						class="
               single-faq
               w-full
               bg-white
               border border-gray-100
               rounded-lg
               p-4
               sm:p-8
               lg:px-6
               xl:px-8
               mb-8
               "
					>
						<button on:click={toggleq18} class="faq-btn flex w-full text-left">
							<div
								class="
                     w-full
                     max-w-[40px]
                     h-10
                     flex
                     items-center
                     justify-center
                     rounded-lg
                     bg-primary
                     text-primary
                     bg-opacity-5
                     mr-5
                     "
							>
								<svg width="17" height="10" viewBox="0 0 17 10" class="fill-current icon">
									<path
										d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
										fill="#3056D3"
										stroke="#3056D3"
									/>
								</svg>
							</div>
							<div class="w-full">
								<h4 class="text-lg font-semibold text-black">
									I missed my flight, what should I do?
								</h4>
							</div>
						</button>
						{#if q18}
							<div class="faq-content pl-[62px]" transition:slide={{ duration: 500 }}>
								<p class="text-base text-body-color leading-relaxed py-3">
									If you missed your flight, contact your airline [Please connect this page to the
									Airline list] for further assistance. If something within your control caused you
									to miss your departing flight, the airline will automatically cancel your entire
									flight itinerary and the value of your tickets will be lost. If you were issued a
									multi-ticket booking, which is a roundtrip flight with 2 one-way fares, the
									airline might only cancel the initial segment of your flight which was missed.
									Cancellation policies are entirely governed by airlines; any comments, questions
									or concerns should be directed to them.
								</p>
							</div>
						{/if}
					</div>
				</div>
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
<!-- 
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
<button class="text-tiny text-rose-600" on:click={toggleOffer}>read more</button> -->
