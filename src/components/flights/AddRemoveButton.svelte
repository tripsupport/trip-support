<script>
	export let count = 2;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<span class="relative z-0 inline-flex shadow-sm rounded-md">
	<button
		type="button"
		class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-red-700 hover:bg-gray-50 "
		disabled={count === 1}
		on:click={() => (count = count - 1)}
	>
		<span class="sr-only">Remove</span>
		<!-- Heroicon name: solid/chevron-left -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4 text-pred-700"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
		Remove trip
	</button>
	<button
		type="button"
		class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-pblue-700 hover:bg-gray-50 "
		on:click={() => (count = count + 1)}
	>
		<span class="sr-only">Add</span>
		Add trip
		<!-- Heroicon name: solid/chevron-right -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4 text-pblue-700"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>
</span>
