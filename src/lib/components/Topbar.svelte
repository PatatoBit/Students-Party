<script>
	const logo = '/images/MainLogo.png';

	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let showMenu = false;
	let isMobile = false;

	function toggleMenu() {
		showMenu = !showMenu;
	}

	function handleResize() {
		isMobile = window.innerWidth <= 768;
		if (!isMobile) showMenu = false;
	}

	onMount(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<header class="topbar">
	<div class="container">
		<a href="/" class="home-link" aria-label="Home">
			<img src={logo} alt="logo" class="logo" />
		</a>
		{#if isMobile}
			<button class="hamburger" class:open={showMenu} aria-label="Open menu" on:click={toggleMenu}>
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</button>
			{#if showMenu}
				<nav class="mobile-nav" transition:slide={{ duration: 220 }}>
					<a href="/policies">นโยบาย</a>
					<a href="/#platform">ความคืบหน้า</a>
					<a href="/#contact">ติดต่อ</a>
				</nav>
			{/if}
		{:else}
			<nav>
				<a href="/policies">นโยบาย</a>
				<a href="/#platform">ความคืบหน้า</a>
				<a href="/#contact">ติดต่อ</a>
			</nav>
		{/if}
	</div>
</header>

<style>
	.topbar {
		background: #fff;
		border-bottom: 1px solid #e6e6e6;
	}
	.topbar .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 72px;
	}
	.logo {
		height: 52px;
	}
	.home-link {
		display: inline-flex;
		align-items: center;
	}
	nav a {
		margin-left: 24px;
		color: #333;
		text-decoration: none;
		font-weight: 600;
		cursor: pointer;
	}
	@media (max-width: 768px) {
		nav {
			display: none;
		}
		.hamburger {
			display: flex;
		}
	}
	@media (min-width: 769px) {
		.hamburger {
			display: none;
		}
		nav {
			display: flex;
		}
		.mobile-nav {
			display: none !important;
		}
	}

	.hamburger {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		z-index: 1001;
	}
	.hamburger .bar {
		width: 28px;
		height: 4px;
		background: #333;
		margin: 4px 0;
		border-radius: 2px;
		transition:
			transform 0.25s ease,
			opacity 0.2s ease,
			background 0.2s ease;
	}
	/* Hamburger -> X animation */
	.hamburger.open .bar:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}
	.hamburger.open .bar:nth-child(2) {
		opacity: 0;
	}
	.hamburger.open .bar:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}
	.mobile-nav {
		position: absolute;
		top: 72px;
		left: 0;
		width: 100vw;
		background: #fff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 24px 0;
		z-index: 1000;
	}
	.mobile-nav a {
		margin: 12px 0;
		font-size: 1.2rem;
		color: #333;
		text-decoration: none;
		font-weight: 600;
	}
</style>
