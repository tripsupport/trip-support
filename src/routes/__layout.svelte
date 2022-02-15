<script>
	import '../app.css';
	import Header from '../components/header/Header.svelte';
	import Footer from '../components/footer/Footer.svelte';
	import AlertCovid from '../components/home/AlertCovid.svelte';
</script>

<div class="bg-white">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
