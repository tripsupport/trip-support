<script>
	// Only import what you need!
	import { Icon, PhoneOutgoing, ChevronDown, UserCircle } from 'svelte-hero-icons';
</script>

<nav aria-label="Top" class="relative z-20 bg-white shadow">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
		<div class="h-16 flex items-center">
			<div class="navbar">
				<div class="flex-none">
					<a href="/">
						<span class="sr-only">Trip Support</span>
						<img class=" h-10 w-auto" src="./logos/logo-main.svg" alt="Trip Support" />
					</a>
				</div>
				<div class="flex-1 sm:ml-8">
					<ul class="menu menu-horizontal p-0 flex lg:items-center">
						<li>
							<a href="#" class="flex items-center text-tiny font-semibold text-pred-900 ">Flight</a
							>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center text-tiny font-medium text-slate-900 hover:text-pred-900"
								>Vacations</a
							>
						</li>
						<li>
							<a
								href="#"
								class="flex items-center text-tiny font-medium text-slate-900 hover:text-pred-900"
								>Hotels</a
							>
						</li>
						<li tabindex="0">
							<a
								href="/"
								class="text-slate-900 group bg-white rounded-md inline-flex items-center text-tiny font-medium hover:text-pred-900 focus:outline-none"
							>
								More
								<Icon src={ChevronDown} class="h-4 w-4 text-slate-900" />
							</a>
							<ul class="p-4 bg-white z-50 list-none rounded ">
								<li>
									<a
										href="#"
										class="text-sm font-medium hover:text-pred-900 text-slate-900  px-4 py-2"
										><span>Flight + Hotel</span></a
									>
								</li>
								<li>
									<a
										href="#"
										class="text-sm font-medium hover:text-pred-900 text-slate-900  px-4 py-2"
										>Explore</a
									>
								</li>
								<li>
									<a href="#" class="text-sm font-medium text-slate-400  px-4 py-2">Explore</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="flex-none">
					<ul class="menu menu-horizontal p-0 flex lg:items-center">
						<li>
							<a href="#" class="text-slate-900 hover:text-pred-900 flex items-center">
								<img
									src="https://tailwindui.com/img/flags/flag-canada.svg"
									alt=""
									class="w-5 h-auto block flex-shrink-0"
								/>
								<span class="text-tiny font-medium"> Francais </span>
								<span class="sr-only">, change language</span>
							</a>
						</li>
						<li>
							<a href="#" class="text-tiny font-medium text-slate-900 hover:text-pred-900">
								Support
							</a>
						</li>
						<li>
							<a href="#" class="text-slate-900 hover:text-pred-900 flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-4"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
									/>
								</svg>
								<span class="text-tiny font-medium"> Contact us </span>
								<span class="sr-only">Trip Support phone number</span>
							</a>
						</li>
						<span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

						<!-- User Logged in hidden -->
						<li tabindex="0" class="hidden">
							<a
								href="/"
								class="text-slate-900 group bg-white rounded-md inline-flex items-center text-tiny font-medium hover:text-pred-900 focus:outline-none"
							>
								<Icon src={UserCircle} class="h-7 w-7" />
							</a>

							<ul class="menu bg-white text-slate-900 w-56 p-2 rounded-box drowndown-left">
								<li>
									<a href="/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
											/></svg
										>
										Item 2
									</a>
								</li>
								<li>
									<a href="/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
											/></svg
										>
										<div class="card-body">
											<h3 class="card-title">Card title!</h3>
											<p>you can use any element as a dropdown.</p>
										</div>
									</a>
								</li>
								<li>
									<a href="/">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-5 w-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
											/></svg
										>
										Item 3
									</a>
								</li>
							</ul>
						</li>

						<div class="dropdown dropdown-end">
							<div class="flex">
								<a
									href="/"
									class="text-slate-900 group bg-white rounded-md inline-flex items-center text-tiny font-medium hover:text-pred-900 focus:outline-none"
								>
									<Icon src={UserCircle} class="h-7 w-7" />
								</a>
							</div>

							<ul
								tabindex="0"
								class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white text-slate-900 rounded-box w-96"
							>
								<li>
									<div class="flex pt-6">
										<p class="text-tiny">
											Members can access discounts, points and special features
										</p>
									</div>
								</li>
								<li>
									<div class="flex pt-0 min-w-full">
										<button class="btn btn-sm min-w-full">Sign In</button>
									</div>
								</li>
								<li>
									<div class="flex pt-4">
										<p class="text-tiny">Not a member?</p>
										<a href="/" class="text-sky-700 text-tiny font-semibold">
											Create a free account</a
										>
									</div>
								</li>
								<li class="hidden">
									<div class="flex pt-0 min-w-full">
										<button
											class="btn btn-sm bg-white border-slate-900 min-w-full hover:bg-white hover:text-slate-900 text-slate-900"
											>Register</button
										>
									</div>
								</li>
							</ul>
						</div>
						<!-- User logged in -->
						<div class="dropdown dropdown-end">
							<label tabindex="0" class="btn btn-ghost btn-circle avatar">
								<div class="w-10 rounded-full">
									<img src="https://api.lorem.space/image/face?hash=33791" alt="profile image" />
								</div>
							</label>
							<ul
								tabindex="0"
								class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white text-slate-900 rounded-box w-52"
							>
								<li>
									<a href="/" class="justify-between">
										Profile
										<!-- <span class="badge">New</span> -->
									</a>
								</li>
								<li><a href="/">Settings</a></li>
								<li><a href="/">Logout</a></li>
							</ul>
						</div>
					</ul>
				</div>
			</div>
		</div>
	</div>
</nav>
