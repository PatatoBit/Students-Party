<script lang="ts">
	import Topbar from '$lib/components/Topbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { getPolicies } from '$lib/content/policies';
	import { writable, derived } from 'svelte/store';

	const policies = getPolicies();

	const searchQuery = writable('');

	const filteredPolicies = derived([searchQuery], ([$searchQuery]) => {
		return policies.filter(
			(p) =>
				p.title.toLowerCase().includes($searchQuery.toLowerCase()) ||
				excerpt(p.content).toLowerCase().includes($searchQuery.toLowerCase())
		);
	});

	function excerpt(md: string, max = 160) {
		const text = md
			.replace(/^#.*$/m, '') // drop title line
			.replace(/```[\s\S]*?```/g, '') // remove code blocks
			.replace(/`[^`]*`/g, '') // remove inline code
			.replace(/\[(.*?)\]\((.*?)\)/g, '$1') // links
			.replace(/[>*_#\-]+/g, ' ') // md chars
			.replace(/\s+/g, ' ')
			.trim();
		return text.length > max ? text.slice(0, max - 1) + '…' : text;
	}
</script>

<Topbar />

<main class="container policies-page">
	<h1 class="anakotmai">นโยบายทั้งหมด</h1>

	<input type="text" placeholder="ค้นหานโยบาย..." bind:value={$searchQuery} class="search-box" />

	<ul class="policy-list">
		{#each $filteredPolicies as p}
			<a class="title" href={`/policy/${p.slug}`}>
				<li class="policy-item">
					<h3>{p.title}</h3>
					<p class="summary">{excerpt(p.content)}</p>
				</li>
			</a>
		{/each}
	</ul>

	<a href="https://forms.gle/QfS6JQTB5V8y1r1F9" target="_blank" class="suggest-policy-button">
		<span class="icon">💡</span> เสนอนโยบาย
	</a>
</main>

<Footer />

<style>
	a {
		text-decoration: none;
	}

	.container {
		min-height: 100vh;
	}

	.policies-page {
		padding: 24px 24px 32px;
	}
	.policy-list {
		list-style: none;
		margin: 0;
		padding: 0;
		padding-top: 16px;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 18px;
	}
	@media (min-width: 800px) {
		.policy-list {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	.policy-item {
		background: #fff;
		border-radius: 5px;
		box-shadow: 0 8px 18px rgba(12, 18, 32, 0.06);
		padding: 16px;
	}

	.policy-item .summary {
		margin: 8px 0 0 0;
		color: #666;
		font-size: 14px;
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.search-box {
		width: 100%;
		padding: 12px;
		margin-bottom: 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 16px;
	}

	.suggest-policy-button {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 16px auto 0;
		padding: 12px 24px;
		background-color: #28a745; /* Green color */
		color: #fff;
		text-decoration: none;
		border-radius: 4px;
		font-size: 16px;
		text-align: center;
		transition: background-color 0.3s;
		width: fit-content;
	}

	.suggest-policy-button .icon {
		margin-right: 8px;
		font-size: 18px;
	}

	.suggest-policy-button:hover {
		background-color: #218838; /* Darker green on hover */
	}
</style>
