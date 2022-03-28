<script>
	import Subscribe from '../components/home/Subscribe.svelte';
</script>

<div class="bg-gradient-to-r from-slate-900 to-pink-900 -mt-1 ">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:flex lg:justify-between">
		<div class="max-w-3xl">
			<h1 class="text-sm font-semibold tracking-wide uppercase">
				<span class="bg-gradient-to-r from-white to-rose-300 bg-clip-text text-transparent"
					>Trip Support</span
				>
			</h1>
			<h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
				Baggage Policy
			</h2>
		</div>
	</div>
</div>

<!-- Blog Post Section: Left Aligned With Extras -->
<div class="bg-white">
	<div class="container xl:max-w-7xl mx-auto px-4 py-8 md:py-20 lg:px-8 space-y-8 ">
		<!-- Input with button append (small) -->

		<div class="flex gap-4 items-baseline">
			<div class="relative z-0 mb-4 md:mb-8 lg:mb-12 w-full">
				<input
					type="email"
					name="floating_email"
					class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-500 focus:outline-none focus:ring-0 focus:border-slate-600 peer"
					placeholder=" "
					required=""
				/>
				<label
					for="floating_email"
					class="absolute text-tiny text-gray-500 font-medium duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-600 peer-focus:dark:text-slate-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>Search by airline</label
				>
			</div>
			<!-- <div>
				<button
					type="submit"
					class="text-white bg-slate-700 hover:bg-slate-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center"
					>Search</button
				>
			</div> -->
		</div>
		<div class="pb-12">
			<ul role="list" class="grid grid-cols-1 gap-6 md:gap-8  sm:grid-cols-2 lg:grid-cols-3 ">
				<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
					<div class="w-full flex items-center justify-between p-6 space-x-6">
						<img
							class="w-16 h-16  rounded-full flex-shrink-0"
							src="/icons/baggage/air-canada-icon.svg"
							alt=""
						/>
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="text-gray-900 text-lg font-bold truncate">Air Canada</h3>
							</div>
							<p class="mt-1 text-gray-500 text-sm truncate">Anywhere to Anywhere</p>
						</div>
					</div>
					<div>
						<div class="-mt-px flex divide-x divide-gray-200 ">
							<div class="w-0 flex-1 flex">
								<a
									href="mailto:janecooper@example.com"
									class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"
								>
									<span class="ml-3">Baggage Policy</span>
								</a>
							</div>
							<div class="-ml-px w-0 flex-1 flex">
								<a
									href="tel:+1-888-247-2262"
									class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"
								>
									<span class="ml-3">1 (888) 247-2262</span>
								</a>
							</div>
						</div>
					</div>
				</li>
				<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
					<div class="w-full flex items-center justify-between p-6 space-x-6">
						<img
							class="w-16 h-16  rounded-full flex-shrink-0"
							src="/icons/baggage/air-canada-icon.svg"
							alt=""
						/>
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="text-gray-900 text-lg font-bold truncate">Air Canada</h3>
							</div>
							<p class="mt-1 text-gray-500 text-sm truncate">Anywhere to Anywhere</p>
						</div>
					</div>
					<div>
						<div class="-mt-px flex divide-x divide-gray-200 ">
							<div class="w-0 flex-1 flex">
								<a
									href="mailto:janecooper@example.com"
									class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"
								>
									<span class="ml-3">Baggage Policy</span>
								</a>
							</div>
							<div class="-ml-px w-0 flex-1 flex">
								<a
									href="tel:+1-888-247-2262"
									class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"
								>
									<span class="ml-3">1 (888) 247-2262</span>
								</a>
							</div>
						</div>
					</div>
				</li>
				<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
					<div class="w-full flex items-center justify-between p-6 space-x-6">
						<img
							class="w-16 h-16  rounded-full flex-shrink-0"
							src="/icons/baggage/air-canada-icon.svg"
							alt=""
						/>
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="text-gray-900 text-lg font-bold truncate">Air Canada</h3>
							</div>
							<p class="mt-1 text-gray-500 text-sm truncate">Anywhere to Anywhere</p>
						</div>
					</div>
					<div>
						<div class="-mt-px flex divide-x divide-gray-200 ">
							<div class="w-0 flex-1 flex">
								<a
									href="mailto:janecooper@example.com"
									class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"
								>
									<span class="ml-3">Baggage Policy</span>
								</a>
							</div>
							<div class="-ml-px w-0 flex-1 flex">
								<a
									href="tel:+1-888-247-2262"
									class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"
								>
									<span class="ml-3">1 (888) 247-2262</span>
								</a>
							</div>
						</div>
					</div>
				</li>
				<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
					<div class="w-full flex items-center justify-between p-6 space-x-6">
						<img
							class="w-16 h-16  rounded-full flex-shrink-0"
							src="/icons/baggage/air-canada-icon.svg"
							alt=""
						/>
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="text-gray-900 text-lg font-bold truncate">Air Canada</h3>
							</div>
							<p class="mt-1 text-gray-500 text-sm truncate">Anywhere to Anywhere</p>
						</div>
					</div>
					<div>
						<div class="-mt-px flex divide-x divide-gray-200 ">
							<div class="w-0 flex-1 flex">
								<a
									href="mailto:janecooper@example.com"
									class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"
								>
									<span class="ml-3">Baggage Policy</span>
								</a>
							</div>
							<div class="-ml-px w-0 flex-1 flex">
								<a
									href="tel:+1-888-247-2262"
									class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"
								>
									<span class="ml-3">1 (888) 247-2262</span>
								</a>
							</div>
						</div>
					</div>
				</li>
				<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
					<div class="w-full flex items-center justify-between p-6 space-x-6">
						<img
							class="w-16 h-16  rounded-full flex-shrink-0"
							src="/icons/baggage/air-canada-icon.svg"
							alt=""
						/>
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="text-gray-900 text-lg font-bold truncate">Air Canada</h3>
							</div>
							<p class="mt-1 text-gray-500 text-sm truncate">Anywhere to Anywhere</p>
						</div>
					</div>
					<div>
						<div class="-mt-px flex divide-x divide-gray-200 ">
							<div class="w-0 flex-1 flex">
								<a
									href="mailto:janecooper@example.com"
									class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"
								>
									<span class="ml-3">Baggage Policy</span>
								</a>
							</div>
							<div class="-ml-px w-0 flex-1 flex">
								<a
									href="tel:+1-888-247-2262"
									class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"
								>
									<span class="ml-3">1 (888) 247-2262</span>
								</a>
							</div>
						</div>
					</div>
				</li>
				<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
					<div class="w-full flex items-center justify-between p-6 space-x-6">
						<img
							class="w-16 h-16  rounded-full flex-shrink-0"
							src="/icons/baggage/air-canada-icon.svg"
							alt=""
						/>
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="text-gray-900 text-lg font-bold truncate">Air Canada</h3>
							</div>
							<p class="mt-1 text-gray-500 text-sm truncate">Anywhere to Anywhere</p>
						</div>
					</div>
					<div>
						<div class="-mt-px flex divide-x divide-gray-200 ">
							<div class="w-0 flex-1 flex">
								<a
									href="mailto:janecooper@example.com"
									class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"
								>
									<span class="ml-3">Baggage Policy</span>
								</a>
							</div>
							<div class="-ml-px w-0 flex-1 flex">
								<a
									href="tel:+1-888-247-2262"
									class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"
								>
									<span class="ml-3">1 (888) 247-2262</span>
								</a>
							</div>
						</div>
					</div>
				</li>
				<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
					<div class="w-full flex items-center justify-between p-6 space-x-6">
						<img
							class="w-16 h-16  rounded-full flex-shrink-0"
							src="/icons/baggage/air-canada-icon.svg"
							alt=""
						/>
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="text-gray-900 text-lg font-bold truncate">Air Canada</h3>
							</div>
							<p class="mt-1 text-gray-500 text-sm truncate">Anywhere to Anywhere</p>
						</div>
					</div>
					<div>
						<div class="-mt-px flex divide-x divide-gray-200 ">
							<div class="w-0 flex-1 flex">
								<a
									href="mailto:janecooper@example.com"
									class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"
								>
									<span class="ml-3">Baggage Policy</span>
								</a>
							</div>
							<div class="-ml-px w-0 flex-1 flex">
								<a
									href="tel:+1-888-247-2262"
									class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"
								>
									<span class="ml-3">1 (888) 247-2262</span>
								</a>
							</div>
						</div>
					</div>
				</li>
				<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
					<div class="w-full flex items-center justify-between p-6 space-x-6">
						<img
							class="w-16 h-16  rounded-full flex-shrink-0"
							src="/icons/baggage/air-canada-icon.svg"
							alt=""
						/>
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="text-gray-900 text-lg font-bold truncate">Air Canada</h3>
							</div>
							<p class="mt-1 text-gray-500 text-sm truncate">Anywhere to Anywhere</p>
						</div>
					</div>
					<div>
						<div class="-mt-px flex divide-x divide-gray-200 ">
							<div class="w-0 flex-1 flex">
								<a
									href="mailto:janecooper@example.com"
									class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"
								>
									<span class="ml-3">Baggage Policy</span>
								</a>
							</div>
							<div class="-ml-px w-0 flex-1 flex">
								<a
									href="tel:+1-888-247-2262"
									class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"
								>
									<span class="ml-3">1 (888) 247-2262</span>
								</a>
							</div>
						</div>
					</div>
				</li>
				<li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
					<div class="w-full flex items-center justify-between p-6 space-x-6">
						<img
							class="w-16 h-16  rounded-full flex-shrink-0"
							src="/icons/baggage/air-canada-icon.svg"
							alt=""
						/>
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="text-gray-900 text-lg font-bold truncate">Air Canada</h3>
							</div>
							<p class="mt-1 text-gray-500 text-sm truncate">Anywhere to Anywhere</p>
						</div>
					</div>
					<div>
						<div class="-mt-px flex divide-x divide-gray-200 ">
							<div class="w-0 flex-1 flex">
								<a
									href="mailto:janecooper@example.com"
									class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-rose-600 font-medium border border-transparent rounded-bl-lg hover:text-rose-500"
								>
									<span class="ml-3">Baggage Policy</span>
								</a>
							</div>
							<div class="-ml-px w-0 flex-1 flex">
								<a
									href="tel:+1-888-247-2262"
									class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sz text-pblue-600 font-medium border border-transparent rounded-br-lg hover:text-pblue-500"
								>
									<span class="ml-3">1 (888) 247-2262</span>
								</a>
							</div>
						</div>
					</div>
				</li>

				<!-- More people... -->
			</ul>
		</div>
		<Subscribe />
	</div>
</div>
