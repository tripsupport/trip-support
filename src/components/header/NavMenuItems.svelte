<script>
	const pages = [
		{ title: 'Flights', link: '/flights' },
		{ title: 'Vacations', link: '/vacations' },
		{ title: 'Hotels', link: '/hotels' }
	];

	let selected = pages[0];
	let iSelected = 0;

	function changePage(e) {
		selected = pages[e.srcElement.id];
		iSelected = e.srcElement.id;
	}
</script>

<!-- Nav menu items -->
<div class="hidden md:ml-6 lg:flex md:space-x-8">
	{#each pages as page, i}
		<a
			href={page.link}
			class="text-tiny inline-flex items-center px-1 pt-1 sm:ml-4 
			{iSelected == i + 1
				? 'text-rose-600 font-semibold'
				: 'text-gray-900 font-medium hover:text-pblue-900'}
		"
			on:click={changePage}
			id={i + 1}
		>
			{page.title}
		</a>
	{/each}
</div>
