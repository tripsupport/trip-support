<script>
	import HorizontalTab from './tabs/HorizontalTab.svelte';
</script>

<section
	class="relative z-10 mx-auto -mt-24 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8"
	aria-labelledby="contact-heading"
>
	<div class="grid grid-cols-1 gap-y-20 lg:grid-cols-1 lg:gap-y-0 lg:gap-x-8">
		<div class="flex flex-col rounded-xl bg-white shadow-xl">
			<div class="relative flex-1 px-8 py-4 md:px-10">
				<HorizontalTab />
				<div class="my-8">
					<!-- Forms -->
					<div class="mt-6 grid grid-cols-6 gap-y-6 gap-x-4 sm:grid-cols-3">
						<div class="sm:col-span-2">
							<div class="flex -space-x-px">
								<div class="relative rounded-md shadow-sm">
									<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<!-- Heroicon name: solid/mail -->
										<svg
											class="h-5 w-5 text-slate-600"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
											/>
											<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
										</svg>
									</div>
									<input
										type="email"
										name="email"
										id="email"
										class="focus:ring-rose-600 focus:border-rose-600 block w-full pl-10 sm:text-sm border-slate-600 rounded-md"
										placeholder="Leaving from?"
									/>
								</div>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 my-2"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
									/>
								</svg>
								<div class="relative rounded-md shadow-sm">
									<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
										<!-- Heroicon name: solid/mail -->
										<svg
											class="h-5 w-5 text-slate-600"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
											/>
											<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
										</svg>
									</div>
									<input
										type="email"
										name="email"
										id="email"
										class="focus:ring-rose-600 focus:border-rose-600 block w-full pl-10 sm:text-sm border-slate-600 rounded-md"
										placeholder="Going to?"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
