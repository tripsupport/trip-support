<script>
	// popper dropdown
	// library for creating dropdown menu appear on click

	// outclick
	import OutClick from 'svelte-outclick';

	import { writable } from 'svelte/store';

	function useToggle(initialState) {
		const { subscribe, update } = writable(initialState);
		return {
			subscribe,
			toggle: () => update((x) => !x)
		};
	}

	const showSignin = useToggle(false);
	const showForgotPass = useToggle(false);
	const showCreateAccount = useToggle(false);
	const signedIn = useToggle(false);
	const signedInMenu = useToggle(false);
</script>

<!-- Language selection -->
<div class="flex-shrink-0 flex">
	<a href="javascript:void(0)" class="text-slate-900 hover:text-rose-600 flex items-center">
		<img
			src="https://tailwindui.com/img/flags/flag-canada.svg"
			alt=""
			class="w-5 h-auto block flex-shrink-0"
		/>
		<span class="ml-3 block text-tiny font-medium"> Francais </span>
		<span class="sr-only">, change language</span>
	</a>
</div>

<!-- Language selection -->
<div class="flex-shrink-0 ">
	<a href="javascript:void(0)" class="text-slate-900 hover:text-rose-600 flex items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-auto mr-0"
			fill="currentColor"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="none"
				d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
			/>
		</svg>

		<span class="ml-3 block text-tiny font-medium"> Contact Us </span>
		<span class="sr-only">contact us</span>
	</a>
</div>
<span class="h-6 w-px bg-gray-200" aria-hidden="true" />
<div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
	<!-- Dropdown for Uer login -->
	<!-- currently hidden -->
	<button
		type="button"
		class=" bg-white p-1 rounded-full text-gray-700 hover:text-gray-600 focus:outline-none "
		data-collapse-toggle="user-profile"
		on:click={showSignin.toggle}
	>
		<span class="sr-only">User login</span>
		<!-- Heroicon name: user-circle -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-7 w-7"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	</button>
	{#if signedIn}
		<OutClick on:outclick={signedIn}>
			<div class="mx-2 relative">
				<div>
					<button
						type="button"
						class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500 ease-linear transition-all duration-150"
						on:click={signedInMenu.toggle}
					>
						<span class="sr-only">Open user menu</span>
						<img
							class="h-8 w-8 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
					</button>
				</div>
				{#if $signedInMenu}
					<div
						class="bg-white text-base list-none text-left rounded shadow-lg w-96 absolute top-[44px] -translate-x-[348px]"
					>
						<div class="pt-2 pb-3 space-y-1">
							<!-- Current: "bg-pblue-50 border-pblue-500 text-pblue-700", Default: "border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
							<a
								href="flights"
								class="bg-pblue-50 border-rose-600 text-pblue-900 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"
								>Profile</a
							>
							<a
								href="vacations"
								class="border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"
								>Settings</a
							>
							<a
								href="vacations"
								class="border-transparent text-slate-900 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-tiny font-medium sm:pl-5 sm:pr-6"
								>Sign out</a
							>
						</div>
					</div>
				{/if}
			</div>
		</OutClick>
	{/if}
	{#if $showSignin}
		<OutClick on:outclick={showSignin.toggle}>
			<div
				class="bg-white text-base list-none text-left rounded shadow-lg w-96 absolute top-[58px] -translate-x-[348px]"
			>
				<form class="space-y-4 p-6" action="#" method="POST">
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700">
							Email address
						</label>
						<div class="mt-1">
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="off"
								required
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"
							/>
						</div>
					</div>

					<div>
						<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
						<div class="mt-1">
							<input
								id="password"
								name="password"
								type="password"
								autocomplete="off"
								required
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"
							/>
						</div>
					</div>

					<div class="flex items-center justify-between">
						<div class="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								class="h-4 w-4 text-pblue-600 focus:ring-pblue-500 border-gray-300 rounded"
							/>
							<label for="remember-me" class="ml-2 block text-sm text-gray-900">
								Remember me
							</label>
						</div>

						<button class="text-sm" on:click={showForgotPass.toggle}>
							<a href="#" class="font-medium text-pblue-600 hover:text-pblue-500">
								Forgot your password?
							</a>
						</button>
					</div>

					<div>
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-pblue-800 hover:bg-pblue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
							>Sign in</button
						>
					</div>
					<!-- This example requires Tailwind CSS v2.0+ -->
					<div class="relative ">
						<div class="absolute inset-0 flex items-center" aria-hidden="true">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center">
							<span class="px-2 bg-white text-sm text-gray-500"> Don't have an account? </span>
						</div>
					</div>
					<div>
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
							on:click={showCreateAccount.toggle}>Create Account</button
						>
					</div>
				</form>
			</div>
		</OutClick>
	{/if}
	{#if $showForgotPass}
		<OutClick on:outclick={showForgotPass.toggle}>
			<div
				class="bg-white text-base list-none text-left rounded shadow-lg w-96 absolute top-[58px] -translate-x-[348px] pt-3 pb-6"
			>
				<div class="px-6 py-2">
					<h2 class="font-bold ">Forgot your password?</h2>
					<p class="text-sz">Please enter your email below</p>
				</div>
				<form class="space-y-4 px-6" action="#" method="POST">
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700">
							Email address
						</label>
						<div class="mt-1">
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="off"
								required
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-pblue-800 hover:bg-pblue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
							>Reset Password</button
						>
					</div>
				</form>
			</div>
		</OutClick>
	{/if}
	{#if $showCreateAccount}
		<OutClick on:outclick={showCreateAccount.toggle}>
			<div
				class="bg-white text-base list-none text-left rounded shadow-lg w-96 absolute top-[58px] -translate-x-[348px] pt-3 pb-6"
			>
				<div class="px-6 py-2">
					<h2 class="font-bold ">Create an account</h2>
					<p class="text-sz">Please fill in the form below</p>
				</div>
				<form class="space-y-4 px-6" action="#" method="POST">
					<div>
						<label for="first_name" class="block text-sm font-medium text-gray-700">
							First Name
						</label>
						<div class="mt-1">
							<input
								id="first_name"
								name="first_name"
								type="text"
								autocomplete="off"
								required
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"
							/>
						</div>
					</div>
					<div>
						<label for="last_name" class="block text-sm font-medium text-gray-700">
							Last Name
						</label>
						<div class="mt-1">
							<input
								id="last_name"
								name="last_name"
								type="text"
								autocomplete="off"
								required
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"
							/>
						</div>
					</div>
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700">
							Email address
						</label>
						<div class="mt-1">
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="off"
								required
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"
							/>
						</div>
					</div>
					<div>
						<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
						<div class="mt-1">
							<input
								id="password"
								name="password"
								type="password"
								autocomplete="off"
								required
								class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pblue-500 focus:border-pblue-500 sm:text-sm"
							/>
						</div>
					</div>
					<div>
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
							>Create Account</button
						>
					</div>
					<div class="relative ">
						<div class="absolute inset-0 flex items-center" aria-hidden="true">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center">
							<span class="px-2 bg-white text-sm text-gray-500"> Already have an account?</span>
						</div>
					</div>
					<div>
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-pblue-800 hover:bg-pblue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pblue-500"
							>Sign in</button
						>
					</div>
				</form>
			</div>
		</OutClick>
	{/if}
</div>
