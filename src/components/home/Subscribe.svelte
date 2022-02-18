<!-- <div class="bg-white">
	<div class="max-w-7xl mx-auto pt-4 pb-12 px-4 sm:pt-8 sm:py-12 sm:px-6 lg:px-2">
		<div class="bg-white shadow-lg sm:rounded-lg">
			<div
				class="lg:mx-auto mt-8 grid max-w-md gap-4 sm:max-w-full sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
			>
				<div class="col-span-2 overflow-hidden ">
					<div class="px-4 py-5 sm:p-6">
						<h3 class="text-lg leading-6 font-medium text-gray-900">
							Sign up today, we’ve got deals to share!
						</h3>
						<div class="flex">
							<div class="mt-2 max-w-xl text-sm text-gray-500">
								<p>
									Members access great rates and savings. Sign up to get email updates when
									restrictions change. And discover the best deals to get you there.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="col-span-1 overflow-hidden ">
					<div class="px-4 py-5 sm:p-6">
						<form class="mt-5 sm:flex sm:items-center">
							<div class="w-full sm:max-w-xs">
								<label for="email" class="sr-only">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									class="shadow-sm focus:ring-ppblue-700 focus:border-ppblue-700 block w-full sm:text-sm border-gray-300 rounded-md"
									placeholder="you@example.com"
								/>
							</div>
							<button
								type="submit"
								class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-ppblue-800 hover:bg-ppblue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ppblue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
								>Subscribe</button
							>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> -->

<!-- Subscribe -->
<div class="relative overflow-hidden">
	<!-- Decorative background image and gradient -->
	<div aria-hidden="true" class="absolute inset-0">
		<div class="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-0 rounded-lg">
			<img
				src="images/home/spring-break2.jpg"
				alt=""
				class="w-full h-full object-center object-cover"
			/>
		</div>
		<div class="absolute inset-0 bg-white bg-opacity-75" />
		<div class="absolute inset-0 bg-gradient-to-t from-white via-white" />
	</div>

	<!-- Sale -->
	<section
		aria-labelledby="sale-heading"
		class="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
	>
		<div class="max-w-xl mx-auto lg:max-w-3xl">
			<aside
				id="revue-embed"
				class="p-4 my-8 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
			>
				<h3 class="mb-3 text-xl font-medium text-gray-900 dark:text-white">
					Sign up today, we’ve got deals to share!
				</h3>
				<p class="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">
					Members access great rates and savings. Sign up to get email updates when restrictions
					change. And discover the best deals to get you there.
				</p>
				<form
					action="https://www.getrevue.co/profile/flowbite/add_subscriber"
					method="post"
					id="revue-form"
					name="revue-form"
					target="_blank"
				>
					<div class="flex items-end mb-3">
						<div class="relative mr-3 w-full revue-form-group">
							<label
								for="member_email"
								class="block hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>Email address</label
							>
							<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<svg
									class="w-5 h-5 text-gray-500 dark:text-gray-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
									><path
										d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
									/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg
								>
							</div>
							<input
								class="revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pblue-500 focus:border-pblue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pblue-500 dark:focus:border-pblue-500"
								placeholder="Your email address..."
								type="email"
								name="member[email]"
								id="member_email"
								required=""
							/>
						</div>
						<div class="revue-form-actions">
							<input
								type="submit"
								value="Subscribe"
								class="cursor-pointer text-white bg-pblue-700 hover:bg-pblue-800 focus:ring-4 focus:ring-pblue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pblue-600 dark:hover:bg-pblue-700 dark:focus:ring-pblue-800"
								name="member[subscribe]"
								id="member_submit"
							/>
						</div>
					</div>
					<div class="text-sm font-medium text-gray-500 revue-form-footer dark:text-gray-300">
						By subscribing, you agree with Revue’s <a
							target="_blank"
							rel="nofollow"
							href="https://www.getrevue.co/terms"
							class="text-pblue-600 hover:underline dark:text-pblue-500">Terms of Service</a
						>
						and
						<a
							target="_blank"
							rel="nofollow"
							class="text-pblue-600 hover:underline dark:text-pblue-500"
							href="https://www.getrevue.co/privacy">Privacy Policy</a
						>.
					</div>
				</form>
			</aside>
		</div>
	</section>
</div>
