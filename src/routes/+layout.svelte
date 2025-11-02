<script lang="ts">
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/global.scss';

	// Vercel analytics
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();

	// Site-wide meta defaults
	const siteName = 'ณธกร รุ่งศุภกิจ (นีโอ)';
	const defaultTitle = siteName;
	const defaultDescription = 'เว็บไซต์อย่างเป็นทางการของ ณธกร รุ่งศุภกิจ (นีโอ)';
	const bannerPath = '/images/banner.png';

	// Compute absolute URLs for crawlers (uses current origin in SSR)
	const origin = $derived($page.url ? $page.url.origin : '');
	const absoluteBannerUrl = $derived(origin ? `${origin}${bannerPath}` : bannerPath);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<title>{defaultTitle}</title>
	<meta name="description" content={defaultDescription} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={defaultTitle} />
	<meta property="og:description" content={defaultDescription} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:image" content={absoluteBannerUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:type" content="image/png" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={defaultTitle} />
	<meta name="twitter:description" content={defaultDescription} />
	<meta name="twitter:image" content={absoluteBannerUrl} />
</svelte:head>

{@render children()}
