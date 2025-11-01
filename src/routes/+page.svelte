<script>
	import Topbar from '$lib/components/Topbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Profile from '$lib/components/Profile.svelte';
	import Policies from '$lib/components/Policies.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Topbar />
<Hero />

<main class="container main">
	<Profile />
	<Policies />
</main>

<Footer />

<style>
	.main {
		padding-top: 40px;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
</style>
