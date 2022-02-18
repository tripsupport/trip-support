<script>
	import FlightsTab from './FlightsTab.svelte';
	import VacationsTab from './VacationsTab.svelte';
	import HotelsTab from './HotelsTab.svelte';
</script>

<div class="mb-0 border-b border-gray-200 dark:border-gray-700">
	<ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
		<FlightsTab />
		<VacationsTab />
		<HotelsTab />
	</ul>
</div>
