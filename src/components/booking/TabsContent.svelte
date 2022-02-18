<script>
	import FlightsTabContent from './FlightsTabContent.svelte';
	import VacationsTabContent from './VacationsTabContent.svelte';
	import HotelsTabContent from './HotelsTabContent.svelte';
	import TopTabFlights from './TopTabFlights.svelte';
	import TopTabVacations from './TopTabVacations.svelte';
	import TopTabHotels from './TopTabHotels.svelte';
</script>

<div id="myTabContent">
	<!-- Flights tab content -->
	<div class="bg-white" id="flights" role="tabpanel" aria-labelledby="flights-tab">
		<TopTabFlights />
		<FlightsTabContent />
	</div>
	<!-- Vacations tab content -->
	<div class="hidden bg-white" id="vacations" role="tabpanel" aria-labelledby="vacations-tab">
		<TopTabVacations />
		<VacationsTabContent />
	</div>
	<!-- Hotels tab content -->
	<div class="hidden bg-white" id="hotels" role="tabpanel" aria-labelledby="hotels-tab">
		<TopTabHotels />
		<HotelsTabContent />
	</div>
</div>
