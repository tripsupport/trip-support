<script>
	import '../app.css';
	// import 'flowbite/dist/flowbite.css';
	import Header from '../components/header/Header.svelte';
	import Footer from '../components/footer/Footer.svelte';
</script>

<div class="bg-white">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
