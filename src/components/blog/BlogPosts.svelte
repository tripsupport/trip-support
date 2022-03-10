<script>
	import BlogCanada from './BlogCanada.svelte';
	import BlogUsa from './BlogUsa.svelte';
	import BlogMexico from './BlogMexico.svelte';
	import BlogCaribbean from './BlogCaribbean.svelte';
	import BlogAsia from './BlogAsia.svelte';
	import BlogAirTravel from './BlogAirTravel.svelte';
	import BlogEurope from './BlogEurope.svelte';
	import BlogSouthAmerica from './BlogSouthAmerica.svelte';
	import PopularPostsCanada from './PopularPostsCanada.svelte';
	let category = 'canada';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white overflow-hidden">
	<div class="max-w-7xl mx-auto">
		<div class="grid grid-cols-12">
			<div class="col-span-12 lg:col-span-9">
				<section class="relative mb-6 px-4">
					<div class="text-left">
						<div class="sm:flex sm:items-baseline sm:justify-between">
							<h1
								class="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl"
							>
								<span class="block xl:inline">Latest Blog Posts</span>
								<!-- <span class="block text-indigo-600 xl:inline">Book Now</span> -->
							</h1>
						</div>
						<p class="my-2 text-md text-gray-500 sm:text-md sm:max-w-prose  md:text-md lg:mx-0">
							Browse blog posts by category
						</p>
					</div>
				</section>
				<div
					class="flex-1 sm:flex space-x-0 sm:space-x-6 my-2 sm:my-4 px-4 whitespace-nowrap overflow-x-scroll overflow-hidden"
				>
					<button
						on:click={() => (category = 'canada')}
						type="button"
						class="my-2 sm:my-0 inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                    {category === 'canada'
							? 'text-white bg-pblue-800 border-white shadow-none'
							: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                    "
					>
						Canada
					</button>

					<button
						on:click={() => (category = 'usa')}
						type="button"
						class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                    {category === 'usa'
							? 'text-white bg-pblue-800 border-white shadow-none'
							: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                    "
					>
						USA
					</button>

					<button
						on:click={() => (category = 'mexico')}
						type="button"
						class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                    {category === 'mexico'
							? 'text-white bg-pblue-800 border-white shadow-none'
							: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                    "
					>
						Mexico
					</button>
					<button
						on:click={() => (category = 'caribbean')}
						type="button"
						class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                    {category === 'caribbean'
							? 'text-white bg-pblue-800 border-white shadow-none'
							: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                    "
					>
						Caribbean
					</button>
					<button
						on:click={() => (category = 'asia')}
						type="button"
						class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                    {category === 'asia'
							? 'text-white bg-pblue-800 border-white shadow-none'
							: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                    "
					>
						Asia
					</button>
					<button
						on:click={() => (category = 'air-travel')}
						type="button"
						class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                    {category === 'air-travel'
							? 'text-white bg-pblue-800 border-white shadow-none'
							: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                    "
					>
						Air Travel
					</button>
					<button
						on:click={() => (category = 'europe')}
						type="button"
						class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                    {category === 'europe'
							? 'text-white bg-pblue-800 border-white shadow-none'
							: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                    "
					>
						Europe
					</button>
					<button
						on:click={() => (category = 'south-america')}
						type="button"
						class="inline-flex justify-center items-center rounded-full border font-semibold focus:outline-none px-3 py-1 text-xs focus:ring focus:ring-gray-500 focus:ring-opacity-25 
                    {category === 'south-america'
							? 'text-white bg-pblue-800 border-white shadow-none'
							: 'bg-white text-pblue-800 hover:bg-pblue-800 hover:text-white'}
                    "
					>
						South America
					</button>
				</div>
				{#if category === 'canada'}
					<BlogCanada />
				{/if}
				{#if category === 'usa'}
					<BlogUsa />
				{/if}
				{#if category === 'mexico'}
					<BlogMexico />
				{/if}
				{#if category === 'caribbean'}
					<BlogCaribbean />
				{/if}
				{#if category === 'asia'}
					<BlogAsia />
				{/if}
				{#if category === 'air-travel'}
					<BlogAirTravel />
				{/if}
				{#if category === 'europe'}
					<BlogEurope />
				{/if}
				{#if category === 'south-america'}
					<BlogSouthAmerica />
				{/if}
			</div>
			<div class="col-span-12 md:col-span-3">
				<section class="relative mt-3 px-6">
					<div class="sm:flex">
						<h1 class="text-xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl">
							<span class="block xl:inline">Popular Posts</span>
						</h1>
					</div>
					<p class="my-2 text-md text-gray-500 sm:text-md sm:max-w-prose  md:text-md lg:mx-0">
						A listo of our most popular blog posts
					</p>
					<PopularPostsCanada />
				</section>
			</div>
		</div>
	</div>
</div>
