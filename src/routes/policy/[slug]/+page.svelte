<script lang="ts">
	import Marked from 'svelte-marked';
	import { page } from '$app/stores';
	export let data: { policy: { title: string; content: string } };
	const { policy } = data;

	const siteName = 'ณธกร รุ่งศุภกิจ (นีโอ)';
	const pageTitle = `${policy.title} — ${siteName}`;
</script>

<section class="container policy-detail">
	<a class="back" href="/policies">← กลับไปยังนโยบายทั้งหมด</a>
	<div class="content">
		<Marked source={policy.content} />
	</div>
</section>

<svelte:head>
	<title>{pageTitle}</title>
	<meta property="og:title" content={pageTitle} />
	<meta property="og:type" content="article" />
	<meta name="twitter:title" content={pageTitle} />
	<meta property="og:url" content={$page.url.href} />
</svelte:head>

<style>
	.policy-detail {
		padding: 24px 24px;
	}
	.policy-detail .back {
		text-decoration: none;
		color: #666;
		font-size: 14px;
	}
	.content {
		margin-top: 16px;
	}
	.content :global(h2) {
		margin-top: 20px;
	}
	.content :global(p) {
		line-height: 1.7;
		color: #333;
	}
	.content :global(ul),
	.content :global(ol) {
		padding-left: 20px;
	}
</style>
