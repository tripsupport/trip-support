<script>
	// Only import what you need!
	import { Icon, User } from 'svelte-hero-icons';
	import MobileTabDropdown from './MobileTabDropdown.svelte';
	// import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
	// Tabs
	import FlightsTab from './VacationsTab.svelte';
	import VacationsTab from './FlightsTab.svelte';
	import HotelsTab from './HotelsTab.svelte';
	import HotelFlightTab from './HotelFlightTab.svelte';
	// Tab Content
	import FlightsTabContent from './VacationsTabContent.svelte';
	import VacationsTabContent from './FlightsTabContent.svelte';
	import HotelsTabContent from './HotelsTabContent.svelte';
	import HotelFlightTabContent from './HotelFlightTabContent.svelte';
</script>

<div>
	<!-- <MobileTabDropdown /> -->

	<div class="mb-2 border-b border-gray-200 dark:border-gray-700">
		<ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
			<li class="mr-3" role="presentation">
				<VacationsTab />
			</li>
			<li class="mr-3" role="presentation">
				<FlightsTab />
			</li>
			<li class="mr-3" role="presentation">
				<HotelsTab />
			</li>
			<li class="mr-3" role="presentation">
				<HotelFlightTab />
			</li>
		</ul>
	</div>
	<div id="myTabContent">
		<FlightsTabContent />
		<VacationsTabContent />
		<HotelsTabContent />
		<HotelFlightTabContent />
	</div>
</div>
