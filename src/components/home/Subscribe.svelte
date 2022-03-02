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
<div class="relative my-3 py-12 lg:my-12 bg-white">
	<div class="max-w-7xl mx-auto bg-white lg:bg-transparent lg:px-8">
		<div class="lg:grid lg:grid-cols-12">
			<div
				class="relative z-[3] lg:col-start-1 lg:row-start-1 lg:col-span-3 lg:py-0 lg:bg-transparent"
			>
				<div class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
				<div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
					<div class="aspect-w-5 aspect-h-2 sm:aspect-w-3 sm:aspect-h-1 lg:aspect-w-1">
						<img
							class="object-cover object-center md:rounded-l-xl  lg:shadow-2xl"
							src="images/home/subscribe.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>

			<div
				class="relative z-[1] bg-white lg:col-start-1 lg:row-start-1 lg:col-span-12 lg:rounded-xl lg:grid lg:grid-cols-10 lg:items-center  shadow-xl"
			>
				<div
					class="relative max-w-md mx-auto py-8 px-4 space-y-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6"
				>
					<h2 class="text-2xl font-extrabold text-slate-900" id="join-heading">
						Sign up today, we’ve got deals to share!
					</h2>

					<p class="text-sm font-medium text-slate-900 ">
						Members access great rates and savings. Sign up to get email updates when restrictions
						change. And discover the best deals to get you there.
					</p>
					<form action="#" method="post" id="revue-form" name="revue-form" target="_blank">
						<div class="flex items-end mb-3">
							<div class="relative mr-3 w-full revue-form-group">
								<label for="member_email" class="hidden text-sm font-medium text-gray-900 "
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
									class="revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pblue-500 focus:border-pblue-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-pblue-500 dark:focus:border-pblue-500"
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
