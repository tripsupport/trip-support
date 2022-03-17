<script>
	import AboutSvg from '../components/svgs/AboutSvg.svelte';
</script>

<div class="mx-auto max-w-7xl p-4">
	<!-- ====== About Section Start -->
	<section class="pt-10 lg:pt-20 pb-6 lg:pb-16 overflow-hidden">
		<div class="container">
			<div class="flex flex-wrap justify-between items-center">
				<div class="w-full lg:w-7/12 xl:w-7/12 px-4">
					<div class="lg:mt-0 prose">
						<h2 class="text-sm font-semibold tracking-wide uppercase">
							<span
								class="bg-gradient-to-r from-slate-900 to-rose-600 bg-clip-text text-transparent"
								>Trip Support</span
							>
						</h2>
						<h2 class="text-3xl md:text-4xl font-extrabold mb-4 mt-0">About Us</h2>
						<p class="text-base font-semibold text-gray-700">
							We’re a North American travel company established in Canada and the USA, that
							specializes in flight, tours, and vacation packages.
						</p>
						<p class="text-base text-gray-700">
							Here at Trip Support, we believe that travel should be affordable for all.
						</p>
						<p class="text-base text-gray-700">
							By establishing positive and lasting relationships with clients, utilizing
							state-of-the-art technology, and providing service beyond reproach, we make that
							belief a reality.
						</p>
					</div>
				</div>
				<div class="w-full lg:w-5/12 px-4">
					<div class="flex items-center -mx-3 sm:-mx-4">
						<div class="w-full xl:w-1/2 px-3 sm:px-4">
							<div class="py-3 sm:py-4">
								<img src="/images/about/flight.jpg" alt="" class="rounded-2xl w-full" />
							</div>
							<div class="py-3 sm:py-4">
								<img src="/images/about/hotel.jpg" alt="" class="rounded-2xl w-full" />
							</div>
						</div>
						<div class="w-full xl:w-1/2 px-3 sm:px-4">
							<div class="my-4 relative z-10">
								<img src="/images/about/vacation.jpg" alt="" class="rounded-2xl w-full" />
								<span class="absolute -right-7 -bottom-7 z-[-1]">
									<AboutSvg />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- ====== About Section End -->
</div>

<!-- Features Section: Featured Image Side -->
<div class="bg-white overflow-hidden">
	<div class="container xl:max-w-7xl mx-auto px-4 py-12 lg:px-8 ">
		<div class="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20">
			<div class="lg:w-1/3 flex-none relative">
				<div
					class="pattern-dots-xl opacity-10 absolute top-0 left-0 w-48 h-96 transform -translate-x-10 -translate-y-10"
				/>
				<div
					class="pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-96 transform translate-x-10 translate-y-10"
				/>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="/images/about/office.jpg"
					alt="Preview Feature Image"
					class="relative rounded-lg shadow-xl mx-auto"
				/>
			</div>
			<div class="lg:w-2/3 md:py-12 space-y-10">
				<!-- Heading -->
				<div class="prose">
					<h2 class="text-3xl md:text-4xl font-extrabold mb-4 mt-0">Our Mission</h2>
					<p class="text-gray-700">
						Our mission at Trip Support is to provide its clients with the best convenient and
						economical solutions for their travel and vacation requirements.
					</p>
					<p class="text-gray-700">
						Trip Support uses up-to-date technology and financing tools that provide clients with
						the best possible travel solutions. We offer high-quality, personalized, and tailor-made
						services and packages at the best possible prices. Trip Support prides itself on its
						outstanding client care, best available rates, deals, and easy payment methods. With
						these tools and skills, we establish positive and lasting relationships with clients. We
						are committed to providing our guests with the best possible travel and vacations
						experiences.
					</p>
					<p class="text-gray-700">
						Trip Support offers a unique travel financing service program that makes payments easy
						for everyone. We use a “Book Now, Pay Later” approach, where payments can be made in
						easy installments. Uniquely, we offer this approach without the need for credit checks
						and extra boring, time-consuming documentation. <span class="font-bold">
							We believe that people should be able to travel regardless of their credit score.
						</span>
					</p>
				</div>
				<!-- END Heading -->
			</div>
		</div>
	</div>
</div>
<!-- END Features Section: Featured Image Side -->

<div class="bg-white overflow-hidden">
	<div class="container xl:max-w-7xl mx-auto px-4 py-12 lg:px-8 ">
		<div class="flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-20">
			<div class="lg:w-9/12 md:py-12 space-y-10">
				<!-- Heading -->
				<div class="prose">
					<h2 class="text-3xl md:text-4xl font-extrabold mb-4 mt-0">Our Brand</h2>
					<p class="text-gray-700">
						Trip Support is an incorporation (INC) that was established in 2014 in Toronto, Canada.
						In 2019, we expanded our service to American travelers by establishing a branch in
						Newport Beach, California.
					</p>
					<p class="text-gray-700">
						Trip Support is one of the fastest-growing travel agencies in North America. At the core
						of our brand, we believe in making travel simple and easy for all our clients. Today,
						our multinational business structure is a testament to its CEO’s long-standing vision of
						making “travel affordable for all.”
					</p>
					<p class="text-gray-700">
						Trip Support offers a unique travel financing service program that makes payments easy
						for everyone. We use a “Book Now, Pay Later” approach, where payments can be made in
						easy installments. Uniquely, we offer this approach without the need for credit checks
						and extra boring, time-consuming documentation. <span class="font-bold">
							We believe that people should be able to travel regardless of their credit score.
						</span>
					</p>
				</div>
				<!-- END Heading -->
			</div>
			<div class="lg:w-1/3 flex-none relative">
				<div
					class="pattern-dots-xl opacity-10 absolute top-0 left-0 w-48 h-96 transform -translate-x-10 -translate-y-10"
				/>
				<div
					class="pattern-dots-xl opacity-10 absolute bottom-0 right-0 w-48 h-96 transform translate-x-10 translate-y-10"
				/>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="logo.svg"
					alt="Preview Feature Image"
					class="relative rounded-lg shadow-xl mx-auto"
				/>
			</div>
		</div>
	</div>
</div>

<!-- Stats section -->
<div class="relative bg-gray-900">
	<div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
		<div class="h-full w-full xl:grid xl:grid-cols-2">
			<div class="h-full xl:relative xl:col-start-2">
				<img
					class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
					src="/images/about/tripsupport-team.jpg"
					alt="People working on laptops"
				/>
				<div
					aria-hidden="true"
					class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-92 xl:bg-gradient-to-r"
				/>
			</div>
		</div>
	</div>
	<div
		class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-3 xl:grid-flow-col-dense xl:gap-x-8"
	>
		<div
			class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 col-span-2 xl:pb-24 prose max-w-prose"
		>
			<h3 class="mt-3 text-3xl leading-normal tracking-wide font-bold text-white">Our Entity</h3>
			<p class=" border-gray-50 text-slate-100 font-light">
				We have grown substantially since our opening in 2014. Thanks to our state-of-the-art
				services, we went from about $165,000 in revenue in 2014 to about $22.5M CAD in 2019, which
				shows an average growth rate of over 2000%.
			</p>
			<p class=" border-gray-50 text-slate-100 font-light">
				One of our early insights was to formulate a novel travel financing service. We started our
				“Book Now, Pay Later” service in 2015, which made us extremely competitive in the travel
				sector. We offer this service without the need for credit checks, which allows our customers
				to travel even if they have poor credit scores. We have also continued to develop our
				expertise in all aspects of travel by focusing on specific fields such as corporate
				services, leisure, special & tailor-made packages, and luxury travel services to ensure
				rapid and substantial growth.
			</p>
			<p class=" border-gray-50 text-slate-100 font-light">
				Trip Support has become a well-known entity in Canada. We have expanded our business to
				include not only corporate businesses but also immigrant communities. Our services to
				European and Asian visitors have provided us with an international presence.
			</p>
			<p class=" border-gray-50 text-slate-100 font-light">
				In addition to our base services, we have added an airline ticketing facility and individual
				customized travel planning. These were done with a personalized service approach,
				consistently a key element in Trip Support's delivery of travel arrangements. Trip Support
				is also focused on adding new products and services such as "Things to Do," which will give
				our customers an option to book day tours, entry tickets, and much more.
			</p>
			<p class=" border-gray-50 text-slate-100 font-light">
				At Trip Support, we believe that you should be able to go on the vacation of your dreams, no
				matter who you are.
			</p>
		</div>
	</div>
</div>
