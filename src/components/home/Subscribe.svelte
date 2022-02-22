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
<div class="relative py-12 bg-white">
	<div class="hidden absolute top-0 inset-x-0 h-1/2 bg-white lg:block" aria-hidden="true" />
	<div class="max-w-7xl mx-auto bg-pblue-600 lg:bg-transparent lg:px-8">
		<div class="lg:grid lg:grid-cols-12">
			<div
				class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-3 lg:py-0 lg:bg-transparent"
			>
				<div class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
				<div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
					<div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
						<img
							class="object-cover object-center rounded-l-xl shadow-2xl"
							src="images/home/subscribe.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>

			<div
				class="relative bg-white lg:col-start-1 lg:row-start-1 lg:col-span-12 lg:rounded-xl lg:grid lg:grid-cols-10 lg:items-center border shadow-xl"
			>
				<div
					class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6"
				>
					<h2 class="text-3xl font-extrabold text-slate-900" id="join-heading">
						Sign up today, we’ve got deals to share!
					</h2>

					<p class="mb-5 text-sm font-medium text-slate-900 ">
						Members access great rates and savings. Sign up to get email updates when restrictions
						change. And discover the best deals to get you there.
					</p>
					<form action="#" method="post" id="revue-form" name="revue-form" target="_blank">
						<div class="flex items-end mb-3">
							<div class="relative mr-3 w-full revue-form-group">
								<label for="member_email" class="hidden  mb-2 text-sm font-medium text-gray-900 "
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
									class="revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pblue-500 focus:border-pblue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-pblue-500 dark:focus:border-pblue-500"
									placeholder="Your email address..."
									type="email"
									name="member[email]"
									id="member_email"
									required=""
								/>
							</div>
							<div class="revue-form-actions my-auto">
								<input
									type="submit"
									value="Subscribe"
									class="cursor-pointer text-slate-900 bg-gray-200 hover:bg-pblue-900 hover:text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
									name="member[subscribe]"
									id="member_submit"
								/>
							</div>
						</div>
						<div class="text-sm text-slate-900 revue-form-footer ">
							By subscribing, you agree with Revue’s <a
								target="_blank"
								rel="nofollow"
								href="https://www.getrevue.co/terms"
								class="text-slate-900 font-bold hover:underline">Terms of Service</a
							>
							and
							<a
								target="_blank"
								rel="nofollow"
								class="text-slate-900 font-bold hover:underline"
								href="https://www.getrevue.co/privacy">Privacy Policy</a
							>.
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

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
								class="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-slate-900 bg-ppblue-800 hover:bg-ppblue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ppblue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
								>Subscribe</button
							>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> -->
