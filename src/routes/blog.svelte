<script>
	import BlogHeader from '../components/blog/BlogHeader.svelte';
	import BlogTop from '../components/blog/BlogTop.svelte';
	import BlogPosts from '../components/blog/BlogPosts.svelte';
	import Subscribe from '../components/home/Subscribe.svelte';
</script>

<div class="bg-white">
	<BlogHeader />
	<!-- Three important posts that will change depending on the season -->
	<BlogTop />
	<!-- Regular Blog Descending-->
	<BlogPosts />
	<Subscribe />
</div>
