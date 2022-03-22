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
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-slate-900">
	<div class="max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8">
		<div class="text-center">
			<h2 class="sm:text-tiny text-xs font-semibold text-gray-300 tracking-wide uppercase">
				support when you need it
			</h2>
			<p class="mt-1 text-xl font-extrabold text-white sm:text-5xl sm:trackin lg:text-6xl">
				Hello. How can we help you today?
			</p>
			<p class="max-w-xl mt-5 mx-auto sm:text-lg text-tiny text-gray-300">
				FAQs, Helpful guide videos and so much more ...
			</p>
		</div>
		<!-- Search -->
		<div class="max-w-xs mx-auto w-full lg:max-w-2xl mt-4">
			<label for="search" class="sr-only">Search</label>
			<div class="relative text-white focus-within:text-gray-600">
				<div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
					<!-- Heroicon name: solid/search -->
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<input
					id="search"
					class="block w-full text-white bg-white bg-opacity-20 py-3 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
					placeholder="Search"
					type="search"
					name="search"
				/>
			</div>
		</div>
	</div>
</div>

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
							<div class="w-full">
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
									<p class="text-base text-body-color leading-relaxed py-3">
										You can find your Trip Support reference or Airline confirmation number at the
										top of your <a class="font-bold text-rose-600 hover:text-rose-500" href="#"
											>"My Booking Page"</a
										> or in your confirmation email.
									</p>
									<p class="text-base text-body-color leading-relaxed py-3">
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
									<p class="text-base text-body-color leading-relaxed py-3">
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
									<p class="text-tiny text-body-color leading-relaxed py-3">
										Unfortunately, there can be several reasons for a cancellation. You will find a
										detailed message regarding the status of your itinerary at your <b
											>‘My Booking Page’</b
										> . A cancellation email was also sent to you verifying the status of your booking.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
				</div>
				<div class="w-full lg:w-1/2 px-4">
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq4} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									What is Trip Support’s cancellation policy?
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
									<p class="text-base text-body-color leading-relaxed py-3">
										Most discounted airline tickets are non-refundable. Although non-refundable
										tickets are the most economical, they are also the most restrictive and do not
										allow refunds. These restrictions make it possible for Trip Support to continue
										to offer better fare prices in addition to our existing deeply discounted
										airfares.
									</p>
									<p class="text-base text-body-color leading-relaxed py-3">
										If your booking is eligible for a cancellation, it may be subject to an airline
										cancellation fee of up to $250 per passenger, as well as any fees or differences
										in price charged by suppliers. For more information please contact us at
										1-855-606-0606
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq5} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									How do I know my booking is confirmed?
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
									<p class="text-base text-body-color leading-relaxed py-3">
										Once we finalize your reservation, you will receive a confirmation email with
										your itinerary, airline confirmation number and all other details about your
										trip. You can also view the status of your reservation through your “My Booking
										Page“ available to you at all times.
									</p>
								</div>
							{/if}
						</OutClick>
					</div>
					<div class="w-full bg-white border border-gray-100 rounded-lg p-4 lg:px-6 xl:px-8 mb-8">
						<button on:click={toggleq6} class="faq-btn flex w-full justify-between items-center">
							<div class="w-full">
								<h4 class="text-base text-left font-semibold text-black">
									Can I print my e-ticket?
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
									<p class="text-base text-body-color leading-relaxed py-3">
										You can print a copy of your e-ticket through your “My booking Page” or through
										your ticket confirmation email.
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

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<div class="bg-white">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 ">
		<div class="flex flex-wrap">
			<div class="w-full">
				<div class=" mb-6 lg:mb-12 max-w-[520px]">
					<span class="font-normal text-tiny block text-rose-600"> Need further assistance? </span>
					<h2
						class="
                  font-extrabold
                  text-2xl
                  sm:text-4xl
                  text-gray-900
                  sm:mb-4
                  mb-1
                  "
					>
						Request Customer Support
					</h2>
					<p class="sm:text-base text-tiny text-body-color">
						Fill in the form below and we will get back to you shortly.
					</p>
				</div>
			</div>
		</div>
		<div class="relative bg-white shadow-xl">
			<h2 class="sr-only">Request Customer Support</h2>

			<div class="grid grid-cols-1 lg:grid-cols-3">
				<!-- Contact information -->
				<div class="relative overflow-hidden py-10 px-6 bg-pblue-700 sm:px-10 xl:p-12">
					<div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
						<svg
							class="absolute inset-0 w-full h-full"
							width="343"
							height="388"
							viewBox="0 0 343 388"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
								fill="url(#linear1)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear1"
									x1="254.553"
									y1="107.554"
									x2="961.66"
									y2="814.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div
						class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
						aria-hidden="true"
					>
						<svg
							class="absolute inset-0 w-full h-full"
							width="359"
							height="339"
							viewBox="0 0 359 339"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
								fill="url(#linear2)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear2"
									x1="192.553"
									y1="28.553"
									x2="899.66"
									y2="735.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div
						class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
						aria-hidden="true"
					>
						<svg
							class="absolute inset-0 w-full h-full"
							width="160"
							height="678"
							viewBox="0 0 160 678"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
								fill="url(#linear3)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear3"
									x1="192.553"
									y1="325.553"
									x2="899.66"
									y2="1032.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-white">We're here to help!</h3>
					<p class="mt-6 text-base text-white max-w-3xl">
						Can't find what you're looking for? Send us a message, we will get back to you soon.
					</p>
					<!-- This example requires Tailwind CSS v2.0+ -->
					<div class="relative mt-8">
						<div class="absolute inset-0 flex items-center" aria-hidden="true">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center">
							<span class="px-3 bg-pblue-700 text-lg font-medium text-white"> OR </span>
						</div>
					</div>
					<p class="mt-6 text-base text-white max-w-3xl">
						You can reach out to us by calling us or sending us an email
					</p>

					<dl class="mt-8 space-y-6">
						<dt><span class="sr-only">Phone number</span></dt>
						<dd class="flex text-base text-white items-center">
							<!-- Heroicon name: outline/phone -->
							<svg
								class="flex-shrink-0 w-5 h-5 text-gray-200"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							<span class="ml-3">+1 (555) 123-4567</span>
						</dd>
						<dt><span class="sr-only">Email</span></dt>
						<dd class="flex text-base text-gray-200 items-center">
							<!-- Heroicon name: outline/mail -->
							<svg
								class="flex-shrink-0 w-5 h-5 text-gray-200"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<span class="ml-3">support@workcation.com</span>
						</dd>
					</dl>
				</div>

				<!-- Contact form -->
				<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
					<form
						action="#"
						method="POST"
						class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
					>
						<div>
							<label for="first-name" class="block text-sm font-medium text-gray-900"
								>First name</label
							>
							<div class="mt-1">
								<input
									type="text"
									name="first-name"
									id="first-name"
									autocomplete="given-name"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div>
							<label for="last-name" class="block text-sm font-medium text-gray-900"
								>Last name</label
							>
							<div class="mt-1">
								<input
									type="text"
									name="last-name"
									id="last-name"
									autocomplete="family-name"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-900">Email</label>
							<div class="mt-1">
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div>
							<div class="flex justify-between">
								<label for="phone" class="block text-sm font-medium text-gray-900">Phone</label>
								<span id="phone-optional" class="text-sm text-gray-500">Optional</span>
							</div>
							<div class="mt-1">
								<input
									type="text"
									name="phone"
									id="phone"
									autocomplete="tel"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border-gray-300 rounded-md"
									aria-describedby="phone-optional"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
							<div class="mt-1">
								<input
									type="text"
									name="subject"
									id="subject"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<div class="flex justify-between">
								<label for="message" class="block text-sm font-medium text-gray-900">Message</label>
								<span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>
							</div>
							<div class="mt-1">
								<textarea
									id="message"
									name="message"
									rows="4"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-pblue-500 focus:border-pblue-500 border border-gray-300 rounded-md"
									aria-describedby="message-max"
								/>
							</div>
						</div>
						<div class="sm:col-span-2 sm:flex sm:justify-end">
							<button
								type="submit"
								class="mt-2 w-full inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-tiny font-medium text-white bg-pblue-700 hover:bg-pblue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500 sm:w-auto"
								>Submit</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Videos -->

<div class="relative bg-gray-50">
	<div class="absolute top-0 right-0 left-0 h-96 " />
	<div class="relative space-y-12 container xl:max-w-7xl mx-auto px-4 py-16">
		<div class="flex flex-wrap">
			<div class="w-full">
				<div class="max-w-[520px]">
					<span class="font-normal text-tiny block text-rose-600"> Media Support </span>
					<h2
						class="
                  font-extrabold
                  text-2xl
                  sm:text-4xl
                  text-gray-900
                  mb-4
                  "
					>
						Video Guides
					</h2>
					<p class="sm:text-base text-tiny text-body-color">
						A range of helpful video guides to get you started with TripSupport.
					</p>
				</div>
			</div>
		</div>
		<!-- END Heading -->

		<!-- Videos -->
		<div class="rounded-lg bg-white shadow-lg ">
			<div
				class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 p-2 sm:p-5 md:p-6 rounded-lg ring-1 ring-black ring-opacity-5 lg:gap-y-16"
			>
				<div class="relative">
					<iframe
						class="w-full h-[246px] rounded-lg"
						src="https://www.youtube.com/embed/tGGq0oaUcwU"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
					<div class="flex items-center mt-4 justify-between">
						<p class="text-center text-gray-500 text-tiny font-semibold">
							Trip Support Book Now Pay Later Plan
						</p>
						<p class="text-center text-rose-600 text-tiny font-semibold">2:02</p>
					</div>
				</div>

				<div class="relative">
					<iframe
						class="w-full h-[246px] rounded-lg"
						src="https://www.youtube.com/embed/AOzxPVXVy0g"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
					<div class="flex items-center mt-4 justify-between">
						<p class="text-center text-gray-500 text-tiny font-semibold">
							Trip Support Book Now Pay Later Plan
						</p>
						<p class="text-center text-rose-600 text-tiny font-semibold">1:11</p>
					</div>
				</div>

				<div class="relative">
					<iframe
						class="w-full h-[246px] rounded-lg"
						src="https://www.youtube.com/embed/yo0Gag7HyG8"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
					<div class="flex items-center mt-4 justify-between">
						<p class="text-center text-gray-500 text-tiny font-semibold">
							Trip Support Book Now Pay Later Plan
						</p>
						<p class="text-center text-rose-600 text-tiny font-semibold">1:04</p>
					</div>
				</div>
				<div class="relative">
					<iframe
						class="w-full h-[246px] rounded-lg"
						src="https://www.youtube.com/embed/mCVxqwa2bdE"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
					<div class="flex items-center mt-4 justify-between">
						<p class="text-center text-gray-500 text-tiny font-semibold">
							Trip Support Book Now Pay Later Plan
						</p>
						<p class="text-center text-rose-600 text-tiny font-semibold">2:25</p>
					</div>
				</div>

				<div class="relative">
					<iframe
						class="w-full h-[246px] rounded-lg"
						src="https://www.youtube.com/embed/yZlLN5fq_-I"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
					<div class="flex items-center mt-4 justify-between">
						<p class="text-center text-gray-500 text-tiny font-semibold">
							Trip Support Book Now Pay Later Plan
						</p>
						<p class="text-center text-rose-600 text-tiny font-semibold">2:32</p>
					</div>
				</div>

				<div class="relative">
					<iframe
						class="w-full h-[246px] rounded-lg"
						src="https://www.youtube.com/embed/c0MSR7-gpRc"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					/>
					<div class="flex items-center mt-4 justify-between">
						<p class="text-center text-gray-500 text-tiny font-semibold">
							Trip Support Book Now Pay Later Plan
						</p>
						<p class="text-center text-rose-600 text-tiny font-semibold">2:47</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
