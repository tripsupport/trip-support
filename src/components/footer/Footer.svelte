<script>
	import FooterLogos from '../../components/footer/FooterLogos.svelte';
	import Copyright from '../../components/footer/Copyright.svelte';
	import FooterLinks from '../../components/footer/FooterLinks.svelte';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<footer class="border-t bg-white px-4" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<FooterLinks />
	<FooterLogos />
	<Copyright />
</footer>
