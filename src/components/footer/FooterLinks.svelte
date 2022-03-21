<script>
	const vacationDeals = [
		{ name: 'Spring Vacations', href: '/spring-vacations' },
		{ name: 'Winter Vacations', href: '/winter-vacations' },
		{ name: 'Summer Vacations', href: '/summer-vacations' },
		{ name: 'Fall Vacations', href: '/fall-vacations' },
		{ name: 'Group Travel', href: '/group-travel' }
	];

	const destinations = [
		{ name: 'Westjet Vacations', href: '/westjet-vacations' },
		{ name: 'Porter Vacations', href: '/porter-vacations' },
		{ name: 'sunwing Vacations', href: '/sunwing-vacations' },
		{ name: 'sunquest Vacations', href: '/sunquest-vacations' },
		{ name: 'signature Vacations', href: '/signature-vacations' }
	];
</script>

<div class="mx-auto max-w-7xl py-2 px-4 sm:px-6 sm:py-8 lg:py-20 lg:px-8 lg:pb-8">
	<div class="mt-12 grid grid-cols-6 gap-8 xl:col-span-12 xl:mt-0">
		<div class="col-span-3 sm:col-span-2 lg:col-span-1">
			<h3 class="font-semibold uppercase text-slate-800 text-sm tracking-normal ">
				Vacation Deals
			</h3>
			<ul role={'list'} class="mt-4 space-y-2">
				{#each vacationDeals as deal}
					<li>
						<a
							sveltekit:prefetch
							href={deal.href}
							class=" capitalize text-slate-600 text-sm hover:text-gray-900"
						>
							{deal.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="col-span-3 sm:col-span-2 lg:col-span-1">
			<h3 class="font-semibold uppercase text-slate-800 text-sm tracking-normal ">Destinations</h3>
			<ul role={'list'} class="mt-4 space-y-2">
				{#each destinations as dest}
					<li>
						<a
							sveltekit:prefetch
							href={dest.href}
							class=" capitalize text-slate-600 text-sm hover:text-gray-900"
						>
							{dest.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="col-span-3 sm:col-span-2 lg:col-span-1">
			<h3 class="font-semibold uppercase text-slate-800 text-sm tracking-normal ">Flight Deals</h3>
			<ul role={'list'} class="mt-4 space-y-2">
				<li>
					<a
						sveltekit:prefetch
						href="javascript:void(0)"
						class="capitalize text-slate-600 text-sm hover:text-gray-900"
					>
						flights to edmonton</a
					>
				</li>

				<li>
					<a
						sveltekit:prefetch
						href="javascript:void(0)"
						class="capitalize text-slate-600 text-sm hover:text-gray-900"
					>
						Flight To San Francisco</a
					>
				</li>

				<li>
					<a
						sveltekit:prefetch
						href="javascript:void(0)"
						class="capitalize text-slate-600 text-sm hover:text-gray-900"
					>
						flight to toronto</a
					>
				</li>

				<li>
					<a
						sveltekit:prefetch
						href="javascript:void(0)"
						class="capitalize text-slate-600 text-sm hover:text-gray-900"
					>
						flight to vancouver</a
					>
				</li>
			</ul>
		</div>

		<div class="col-span-3 sm:col-span-2 lg:col-span-1">
			<h3 class="font-semibold uppercase text-slate-800 text-sm tracking-normal ">travel deals</h3>
			<ul role={'list'} class="mt-4 space-y-2">
				<li>
					<a
						sveltekit:prefetch
						href="javascript:void(0)"
						class="capitalize text-slate-600 text-sm hover:text-gray-900">all inclusive resorts</a
					>
				</li>

				<li>
					<a
						sveltekit:prefetch
						href="javascript:void(0)"
						class="capitalize text-slate-600 text-sm hover:text-gray-900">singles vacations</a
					>
				</li>

				<li>
					<a
						sveltekit:prefetch
						href="javascript:void(0)"
						class="capitalize text-slate-600 text-sm hover:text-gray-900">3 - 5 day vacations</a
					>
				</li>

				<li>
					<a
						sveltekit:prefetch
						href="javascript:void(0)"
						class="capitalize text-slate-600 text-sm hover:text-gray-900">2 weeks vacation</a
					>
				</li>
				<li>
					<a
						sveltekit:prefetch
						href="javascript:void(0)"
						class="capitalize text-slate-600 text-sm hover:text-gray-900">best family resorts</a
					>
				</li>
			</ul>
		</div>

		<div class="col-span-3 sm:col-span-2 lg:col-span-1">
			<h3 class="font-semibold uppercase text-slate-800 text-sm tracking-normal ">quick links</h3>
			<ul role={'list'} class="mt-4 space-y-2">
				<li>
					<a
						sveltekit:prefetch
						href="/blog"
						class="capitalize text-slate-600 text-sm hover:text-gray-900">blog</a
					>
				</li>

				<li>
					<a
						sveltekit:prefetch
						href="/faqs"
						class="capitalize text-slate-600 text-sm hover:text-gray-900">faqs</a
					>
				</li>
				<li>
					<a
						sveltekit:prefetch
						href="/about-us"
						class="capitalize text-slate-600 text-sm hover:text-gray-900">about us</a
					>
				</li>
				<li>
					<a
						sveltekit:prefetch
						href="/contact-us"
						class="capitalize text-slate-600 text-sm hover:text-gray-900">contact us</a
					>
				</li>
				<li>
					<a
						sveltekit:prefetch
						href="/customer-support"
						class="capitalize text-slate-600 text-sm hover:text-gray-900">customer support</a
					>
				</li>
				<li>
					<a
						href="/book-now-pay-later"
						class="capitalize text-slate-600 text-sm hover:text-gray-900">book now pay later</a
					>
				</li>
			</ul>
		</div>
		<div class="col-span-3 sm:col-span-2 lg:col-span-1">
			<h3 class="font-semibold uppercase text-slate-800 text-sm tracking-normal ">Social media</h3>

			<ul role={'list'} class="mt-4 space-y-2">
				<li>
					<a
						sveltekit:prefetch
						href="https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"
						target="_blank"
						rel="noopener nofollow noreferrer"
						class="flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-facebook mr-2 -ml-1 w-4 h-4"
							viewBox="0 0 16 16"
						>
							<path
								d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
							/>
						</svg>
						Facebook
					</a>
				</li>

				<li>
					<a
						sveltekit:prefetch
						href="https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"
						target="_blank"
						rel="noopener nofollow noreferrer"
						class="flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-2 focus:ring-orange-500 focus:text-orange-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-instagram mr-2 -ml-1 w-4 h-4"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
							/>
						</svg>
						Instagram
					</a>
				</li>

				<li>
					<a
						sveltekit:prefetch
						href="https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"
						target="_blank"
						rel="noopener nofollow noreferrer"
						class="flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-pred-700 focus:z-10 focus:ring-2 focus:ring-pred-700 focus:text-pred-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-youtube mr-2 -ml-1 w-4 h-4"
							viewBox="0 0 16 16"
						>
							<path
								d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
							/>
						</svg>
						Youtube
					</a>
				</li>

				<li>
					<a
						sveltekit:prefetch
						href="https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"
						target="_blank"
						rel="noopener nofollow noreferrer"
						class="flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-pred-700 focus:z-10 focus:ring-2 focus:ring-pred-700 focus:text-pred-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-pinterest mr-2 -ml-1 w-4 h-4"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"
							/>
						</svg>
						Pinterest
					</a>
				</li>
				<li>
					<a
						sveltekit:prefetch
						href="https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"
						target="_blank"
						rel="noopener nofollow noreferrer"
						class="flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:ring-2 focus:ring-slate-700 focus:text-slate-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi bi-at mr-2 -ml-1 w-4 h-4"
							viewBox="0 0 16 16"
						>
							<path
								d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"
							/>
						</svg>
						Email us
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
