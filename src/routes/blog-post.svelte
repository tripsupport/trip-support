<script>
	import FlightCTA from '../components/blog/FlightCTA.svelte';
	import HotelCTA from '../components/blog/HotelCTA.svelte';
	import VacationCTA from '../components/blog/VacationCTA.svelte';
</script>

<!-- Blog Post Section: Modern -->
<div class="bg-white">
	<div class="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8">
		<!-- This example requires Tailwind CSS v2.0+ -->
		<nav class="flex" aria-label="Breadcrumb">
			<ol role="list" class="flex items-center space-x-4">
				<li>
					<div>
						<a href="/" class="text-gray-400 hover:text-gray-500">
							<!-- Heroicon name: solid/home -->
							<svg
								class="flex-shrink-0 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
								/>
							</svg>
							<span class="sr-only">Home</span>
						</a>
					</div>
				</li>

				<li>
					<div class="flex items-center">
						<svg
							class="flex-shrink-0 h-5 w-5 text-gray-300"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
							aria-hidden="true"
						>
							<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
						</svg>
						<a href="/blog" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
							>Blog</a
						>
					</div>
				</li>

				<li>
					<div class="flex items-center">
						<svg
							class="flex-shrink-0 h-5 w-5 text-gray-300"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
							aria-hidden="true"
						>
							<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
						</svg>
						<a
							href="#"
							class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
							aria-current="page">8 Unique Winter Getaways Near Toronto</a
						>
					</div>
				</li>
			</ol>
		</nav>

		<div class="prose prose-slate prose-lg mx-auto">
			<!-- Heading -->
			<div class="text-left">
				<div class="text-sm uppercase font-bold tracking-wider mb-1 text-rose-600">Canada</div>
				<div class="text-3xl md:text-4xl font-extrabold">8 Unique Winter Getaways Near Toronto</div>
				<div class="text-base md:text-md md:leading-relaxed font-medium text-gray-600 lg:w-2/3">
					<a href="javascript:void(0)" class="text-pblue-700 hover:text-pblue-400">Shefali</a> on
					<span class="font-semibold">March 15, 2021</span> · 8 min read
				</div>
			</div>
			<!-- END Heading -->
		</div>

		<!-- Blog Post -->
		<article class="prose prose-slate prose-lg mx-auto">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<div class="object-cover w-full">
				<img
					src="images/blog-post/blog-post-1.jpg"
					alt="Featured Image of blog post"
					class="rounded w-full object-cover aspect-[5/2]"
				/>
			</div>
			<p>
				Sometimes it’s nice to escape the city of Toronto to explore some of the nearby areas. In
				your backyard, there are many fabulous places to visit without having to catch a long flight
				or take a week off work. So for a mini getaway to keep you going between more extended
				vacations, here are some destinations to note. We hope this list of eight unique winter
				getaways near Toronto inspires you to take a break.
			</p>
			<!-- Mississauga -->
			<h3>1. Mississauga</h3>
			<div class="object-cover w-full">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="images/blog-post/mississauga.jpg"
					alt="Featured Image of blog post"
					class="rounded w-full object-cover aspect-[5/2]"
				/>
			</div>
			<p>
				Not far from Toronto, Mississauga is a vibrant city on Lake Ontario. The lakefront is one of
				the most scenic parts of the city, with a red and white lighthouse as the prettiest
				landmark. There are also shops and restaurants along a boardwalk so you can explore at a
				leisurely pace, even sitting on benches outside if it’s warm enough.
			</p>
			<p>
				The only indoor ski and snowboard training centers are in Mississauga. Beginners can learn
				and get a sample of the sports before committing to buying a lot of gear or hitting the real
				slopes. It’s also great for medium-level or advanced skiers and snowboarders who want to
				ride the snow but don’t have time to get to the ski fields.
			</p>
			<HotelCTA />
			<p>
				A waterfront trail is a nice place for a stroll, and it’s usually quite apart from the
				resident ducks, geese, and seagulls hanging around.
			</p>
			<p>
				Mississauga Celebration Square has an ice skating rink in winter. You can skate around in
				the urban setting then head indoors for some retail therapy or hot food and drink. Being the
				6th biggest city in Canada, Mississauga has plenty of shopping and dining, from bargains to
				luxury to cheap eats to fine dining. There are also plenty of art galleries, museums and
				tourist attractions to discover. When it comes to winter getaways near Toronto, Mississauga
				is a winner.
			</p>
			<!-- Niagara Falls -->
			<h3>2. Niagara Falls</h3>
			<div class="object-cover w-full">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="images/blog-post/niagara-falls.jpg"
					alt="Featured Image of blog post"
					class="rounded w-full object-cover aspect-[5/2]"
				/>
			</div>
			<p>
				The city of Niagara Falls is a favourite place for visitors who have seen Toronto and want
				to explore the greater area. The falls, linked with America by the Rainbow Bridge, is the
				main attraction for many visitors. Seeing the massive waterfalls is an awe-inspiring sight,
				and there are many viewing points to see the stunning wonder of nature.
			</p>
			<p>
				Riding the glass tower to the Skylon Tower that looks over the falls is one of the best
				places to see the waterfalls. You can also ride the gondola, book a helicopter tour to see
				the falls from the air, or go zip lining over the water if you are a thrill-seeker.
			</p>
			<p>
				Beyond the falls you can find casinos, historic sites, spas, theme parks, shopping, dining,
				golf courses, nightlife, wineries, theatre and many more entertaining places to visit. Or
				you might like to relax in your luxury hotel with room service and movies. Whatever you
				desire, it can be found in this modern city, well set up for hospitality and tourism. If you
				are on a budget, there are many free things to do in Niagara Falls, including hiking Niagara
				Glen and visiting the Niagara Falls Botanical Gardens. This is one of our top picks for
				winter getaways near Toronto.
			</p>
			<!-- inline cta -->
			<FlightCTA />

			<!-- Niagara Falls -->
			<h3>3. Barrie</h3>
			<div class="object-cover w-full">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="images/blog-post/barrie.jpg"
					alt="Featured Image of blog post"
					class="rounded w-full object-cover aspect-[5/2]"
				/>
			</div>
			<p>
				Let’s go to Barrie, a lovely city on the shores of Kempenfelt Bay with beautiful winter
				landscapes. It’s a winter wonderland all season long with plenty of outdoor activities for
				the whole family. Snowboarding, ice skating, skiing and winter hiking can be enjoyed in the
				most scenic surroundings and when it’s time to get warm, there is lots of dining, shopping,
				entertainment and tourist attractions to see.
			</p>
			<p>
				Buy a winter fun pass for great deals, promotions and discounts on winter experiences in
				Barrie. It is free and easy to use on your phone. Sneak some spa time, relax in a cafe or
				roam some art galleries to keep warm between outdoor excursions. Don’t miss the 420-foot
				suspension bridge at the Scenic Caves Nature Adventures Nordic Centre. With amazing views of
				Georgian Bay and beyond, the long bridge hangs 82 feet above the ground, so it looks like it
				is floating on the forest top. It’s a bit challenging if you are scared of heights, but
				worth it for the epic views.
			</p>
			<p>
				Take in the lights with a night ice skate session at the rink at City Hall in downtown
				Barrie. After some fun laps on the ice, you can go shopping and enjoy a meal. If you are
				there on a Saturday morning, you can catch the Barrie Farmer’s Market to try some of the
				local’s freshest produce.
			</p>
			<p>
				Many events are happening in winter, with the highlight being the Hello Winter Festival in
				February and March. The city lights up and buzzes with entertainment with a winter theme,
				drawing crowds from near and far.
			</p>

			<!-- Niagara Falls -->
			<h3>4. Hamilton</h3>
			<div class="object-cover w-full">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="images/blog-post/hamilton.jpg"
					alt="Featured Image of blog post"
					class="rounded w-full object-cover aspect-[5/2]"
				/>
			</div>
			<p>
				The port city of Hamilton is an interesting winter getaway, including some interesting
				attractions for history buffs.
			</p>
			<p>
				Learn about Canada’s military history when you visit the HMCS Haida, a naval warship on
				Hamilton’s lakefront and the Canadian Warplane Heritage Museum, which has an impressive
				collection of old planes and paraphernalia. The Dundurn National Historic Site in a regal
				castle overlooking the bay and the Art Gallery of Hamilton compliment the history trail that
				can fill a few days.
			</p>
			<p>
				For a more modern look at the city the street art that adorns the walls of building around
				the city are eye-catching and thought-provoking. Grab your camera and take a walking tour to
				see the vibrant murals. Keep walking into nature and see frozen waterfalls or rent some gear
				to go snowshoeing at Christie Lake or Dundas Valley.
			</p>
			<p>
				The city has several ice skating rinks as well as attractive walking trails to explore.
				There is a zip lining adventure park open during winter and the experience is dramatically
				different from swinging through the treetops in summer.
			</p>
			<p>
				The city often hosts events, and Winterfest is the biggest annual one to catch with shows,
				music, performances, and installations.
			</p>
			<p>
				The food scene is alive and well in Hamilton, with cozy cafes, restaurants and bars with
				heated patios to welcome patrons in from the cold. To sample artisan cider head to West
				Avenue Cider at Somerset Orchards.
			</p>
			<p>
				The countryside setting is a charming place to have lunch and their food is as outstanding
				as their beverages. Dine outside in front of your private fire pit or stay cozy indoors,
				then stock up on cheese, baked goods and other treats at the bakery on your way out. For
				winter getaways near Toronto, Hamilton is calling.
			</p>

			<!-- London -->
			<h3>5. London</h3>
			<div class="object-cover w-full">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="images/blog-post/london.jpg"
					alt="Featured Image of blog post"
					class="rounded w-full object-cover aspect-[5/2]"
				/>
			</div>
			<VacationCTA />
			<p>
				In London, Ontario, you might run into out-of-town visitors from Toronto or other parts of
				Canada, overseas tourists or locals enjoying their backyard. There are heaps to see and do
				in the winter months, so for a unique winter getaway, you can’t go wrong.
			</p>
			<p>
				There is a charming ice skating venue called Storybook Gardens. The 250-meter skate trail
				circles a play village with lots of appearances from storybook characters along the way.
				Victoria Park and Convent Garden Market are also wonderful for ice skating, with coffee and
				hot chocolate for sale on the sidelines. If you are more into skiing, tubing or
				snowboarding, Boler Mountain is the place to be.
			</p>
			<p>
				If you want to play inside, there are exciting options like rock climbing, axe throwing and
				escape rooms. Of course, as you would expect from a city setting, there are shopping
				entertainment and dining options to suit every budget. If you are vegan, London has a lively
				foodie scene catering for vegans and all kinds of healthy eats. Plant Matter Kitchen and
				Plant Matter Cafe serve up delicious offerings and The Tea Lounge is hot with tea lovers.
			</p>

			<!-- Whitby -->
			<h3>6. Whitby</h3>
			<div class="object-cover w-full">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="images/blog-post/whitby.jpg"
					alt="Featured Image of blog post"
					class="rounded w-full object-cover aspect-[5/2]"
				/>
			</div>
			<p>
				Welcome to Whitby, a town with warm hospitality and charming character. You should know
				there are two downtown areas so be careful not to miss one. Downtown Whitby and Downtown
				Brooklin are both vibrant areas for dining, shopping and soaking in the arty atmosphere.
				Downtown Whitby has historical buildings and boutique stores, while Downtown Brooklin has
				spas and the Whitby Courthouse Theatre.
			</p>
			<p>
				The prettiest ice skating rinks are outdoors at Peel Park and Brooklin Memorial Park.
				Breathing in the fresh, crisp air while twirling on the ice is such an iconic wintertime
				activity, along with winter walks and hikes.
			</p>
			<p>
				The accommodation in Whitby is appealing, with many top-notch hotels, suites and lodges to
				call home for a short or long stay. Nothing beats a hotel with a hot tub or jacuzzi in
				winter and if you are looking for luxury, we recommend booking a few nights at the Residence
				Inn by Marriott Whitby.
			</p>
			<p>
				From there, it’s not far to the Thermea Spa Village, where you can soak in therapeutic hot
				water and blissfully unwind and relax. With an underground floatation pool, rituals and
				treatments, and healthy food and drink options, you could easily pamper your soul for a
				whole day there. It’s one of the many reasons people visit Whitby several times a year.
			</p>

			<!-- Kawartha Lakes -->
			<h3>7. Kawartha Lakes</h3>
			<div class="object-cover w-full">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="images/blog-post/kawartha-lakes.jpg"
					alt="Featured Image of blog post"
					class="rounded w-full object-cover aspect-[5/2]"
				/>
			</div>
			<p>
				The City of Kawartha Lakes is a place for nature lovers and adventurers. The great outdoors
				includes hiking trails, rivers and, of course, the lakes. You can get there in less than 2
				hours from Toronto, so why not plan a trip there soon? Snowshoeing, ice skating,
				snowmobiling, cross-country skiing and winter walks are some of the wintery activities that
				await you at Kawartha Lakes.
			</p>
			<p>
				Maple syrup is a major industry in the area, so there are plenty of farm tours and other
				sweet activities to sample and you will see it for sale all over the place. For sure, it
				will be on your pancakes served at the quaint bed and breakfast you stay at or the charming
				country cottage you book right on the lake.
			</p>
			<p>
				There are plenty of options with 250 lakes in the area if waking up with lake views sounds
				exciting. You can even stay on a houseboat which is a unique experience and rocking good
				time.
			</p>
			<!-- Brampton -->
			<h3>8. Brampton</h3>
			<div class="object-cover w-full">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="images/blog-post/brampton.jpg"
					alt="Featured Image of blog post"
					class="rounded w-full object-cover aspect-[5/2]"
				/>
			</div>
			<p>
				We call it beautiful Brampton and in winter, it’s a wonderland. Walk around Gage Park, then
				visit the nearby Historic Bovaird House before going ice skating at indoor or outdoor rinks,
				including Gage Park and Gore Meadows. Brampton has many scenic places for winter hiking like
				Clairville and Heart Lake conservation areas and the Etobicoke Creek Trail.
			</p>
			<p>
				Go Canadian goose spotting during a walk around Professors Lake or sledding down Major Oaks
				Park hills for more fun outdoors.
			</p>
			<p>
				When it’s time to warm up indoors, you have the Peel Art Gallery, Museum and Archives to
				explore and they are inside a gorgeous mix of 19th-century and modern buildings. Downtown
				you might catch a show at the Rose Theatre, a popular performing arts venue that always has
				something exciting going on, including big-screen movies and live events. When it’s time for
				dinner, you are spoiled for choice with so many excellent restaurants all over the city.
			</p>
			<p>
				The Winter Lights Festival, usually in November, is always a great event if you are in town.
				Book your accommodation early for this one because it draws crowds from near and far. If you
				miss that, the whole downtown is decorated with lights for most of the winter. It’s free and
				makes a lovely evening walk.
			</p>
			<p>
				In Canada, every season is quite dramatically different from the next. So anywhere you visit
				in winter will offer a different experience in the summer. That means if you have fun
				somewhere, you can start planning your next trip to see and do other things but maybe return
				to some of your favourite shops and restaurants.
			</p>
			<!-- This example requires Tailwind CSS v2.0+ -->
			<div class="bg-blue-50 border-l-4 border-pblue-400 p-3">
				<div class="flex">
					<div class="ml-3">
						<p class="prose text-pblue-800">
							Visit the Trip Support website or call our travel experts on <a
								href="#"
								class="font-medium underline text-pblue-700 hover:text-pblue-400"
							>
								#1-855-606-0606
							</a> for more information on winter getaways near Toronto. They are always ready to help
							our clients plan their next epic vacation.
						</p>
					</div>
				</div>
			</div>
			<div class="object-cover w-full">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="images/blog-post/blog-post-1.jpg"
					alt="Featured Image of blog post"
					class="rounded w-full object-cover aspect-[5/2]"
				/>
			</div>
			<p>
				The face of travel is changing rapidly. We are proudly leading the industry with an
				innovative and flexible Book Now, Pay Later option. You can buy the air ticket and vacation
				packages by putting down a small deposit to secure the services and pay the balance in
				installments. Flexibility and savings are just some of the benefits of flying with Trip
				Support.
			</p>

			<!-- This example requires Tailwind CSS v2.0+ -->
			<div class="bg-rose-50 border-l-4 border-rose-400 p-3">
				<div class="flex">
					<div class="ml-3">
						<p class="prose text-rose-700">
							We don't check credit scores so this payment <a
								href="#"
								class="font-medium underline text-rose-700 hover:text-rose-400"
							>
								Book Now, Pay Later
							</a> method is available to everyone. You can book now and pay later in installments. There
							is no credit check with this fantastic pay later option.
						</p>
					</div>
				</div>
			</div>
		</article>
		<!-- END Blog Post -->
	</div>
</div>
<!-- END Blog Post Section: Modern -->

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<!-- <div class="relative py-16 bg-white">
	<div class="max-w-7xl mx-auto bg-indigo-600 lg:bg-transparent lg:px-8">
		<div class="lg:grid lg:grid-cols-12">
			<div
				class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent"
			>
				<div class="absolute inset-x-0 h-1/23 bg-gray-50 lg:hidden" aria-hidden="true" />
				<div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
					<div
						class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-2"
					>
						<img
							class="object-cover object-center rounded-3xl shadow-2xl"
							src="images/blog-post/blog-post-1.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>

			<div
				class="relative bg-indigo-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center"
			>
				<div
					class="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
					aria-hidden="true"
				>
					<svg
						class="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
						width="404"
						height="384"
						fill="none"
						viewBox="0 0 404 384"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									class="text-indigo-500"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
					</svg>
					<svg
						class="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
						width="404"
						height="384"
						fill="none"
						viewBox="0 0 404 384"
						aria-hidden="true"
					>
						<defs>
							<pattern
								id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									class="text-indigo-500"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
					</svg>
				</div>
				<div
					class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6"
				>
					<h2 class="text-3xl font-extrabold text-white" id="join-heading">
						Book your flight to Toronto
					</h2>
					<p class="text-lg text-white">
						Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non.
						Cras aliquet purus dui laoreet diam sed lacus, fames.
					</p>
					<a
						class="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-tiny font-bold text-indigo-700 hover:bg-gray-50 sm:inline-block sm:w-auto"
						href="#">Book Now, Pay Later</a
					>
				</div>
			</div>
		</div>
	</div>
</div> -->

<!-- CTA Section: Featured Image Alternate -->
<div class="bg-white overflow-hidden">
	<div class="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
		<div class="flex flex-col md:flex-row md:items-center space-y-16 md:space-y-0 md:space-x-28">
			<!-- Image -->
			<div class="relative">
				<div
					class="absolute pattern-dots-lg text-gray-200 top-0 left-0 w-32 h-48 md:h-72 transform -translate-y-12 -translate-x-16 -rotate-3"
				/>
				<div
					class="absolute pattern-dots-lg text-gray-200 bottom-0 right-0 w-32 h-48 md:h-72 transform translate-y-12 translate-x-16 rotate-3"
				/>
				<div
					class="absolute rounded-3xl top-0 right-0 w-32 h-32 bg-rose-200 bg-opacity-50 -mt-10 -mr-10 transform -rotate-6"
				/>
				<div
					class="absolute rounded-3xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-6"
				/>
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="images/blog-post/blog-post-1.jpg"
					alt="Hero Image"
					class="relative rounded-lg mx-auto shadow-lg w-full object-cover aspect-[5/2]"
				/>
			</div>
			<!-- END Image -->

			<div class="space-y-10 w-full">
				<!-- Heading -->
				<div>
					<div class="text-sm  font-semibold  mb-1 text-pblue-700">
						Trip Support Flights, Hotels & Vacation Deals
					</div>
					<h2 class="text-3xl md:text-4xl font-extrabold mb-4">Book with us and save</h2>
					<h3 class="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
						Secure your flight ticket, hotel reservation, or your vacation trip with a small
						deposit. No Credit Check Needed.
					</h3>
				</div>
				<!-- END Heading -->

				<!-- Action -->
				<div class="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-2">
					<a
						href="javascript:void(0)"
						class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded-full border-rose-600 bg-rose-600 text-white hover:text-white hover:bg-rose-700 hover:border-rose-700 focus:ring focus:ring-rose-500 focus:ring-opacity-50 active:bg-rose-600 active:border-rose-600"
					>
						<svg
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							class="opacity-50 hi-solid hi-check inline-block w-5 h-5"
							><path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/></svg
						>
						<span>Book Now, Pay Later</span>
					</a>
				</div>
				<!-- END Action -->
			</div>
		</div>
	</div>
</div>
<!-- END CTA Section: Featured Image Alternate -->
