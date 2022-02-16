<script>
	import CovidAlert from '../header/CovidAlert.svelte';
	import Nav from './Nav.svelte';
	import HeaderHero from './hero/HeaderHero.svelte';
	import HeaderHeroAlt from './hero/HeaderHeroAlt.svelte';
	import FlightHero from './hero/FlightHero.svelte';
	import NewNav from './NewNav.svelte';
	import AlertCovid from '../home/AlertCovid.svelte';
</script>

<header class="relative overflow-hidden">
	<!-- Top covid alert -->
	<CovidAlert />
	<!-- Main nav -->
	<!-- <Nav /> -->
	<NewNav />
	<!-- <AlertCovid /> -->
	<!-- <HeaderHero /> -->
	<HeaderHeroAlt />
	<!-- <FlightHero /> -->
</header>
