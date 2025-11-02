<script lang="ts">
	import Topbar from '$lib/components/Topbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { getPolicies } from '$lib/content/policies';
	import { writable, derived } from 'svelte/store';

	const policies = getPolicies();

	const searchQuery = writable('');

	const selectedTags = writable<string[]>([]);

	const allTags: string[] = Array.from(new Set(policies.flatMap((p) => p.tags || []))).sort(
		(a, b) => a.localeCompare(b, 'th')
	);

	function toggleTag(tag: string) {
		selectedTags.update((cur) =>
			cur.includes(tag) ? cur.filter((t) => t !== tag) : [...cur, tag]
		);
	}

	const filteredPolicies = derived([searchQuery, selectedTags], ([$searchQuery, $selectedTags]) => {
		const q = $searchQuery.trim().toLowerCase();
		return policies.filter((p) => {
			const matchesQuery = !q
				? true
				: p.title.toLowerCase().includes(q) || excerpt(p.content).toLowerCase().includes(q);
			const matchesTags =
				$selectedTags.length === 0 || $selectedTags.every((t) => p.tags?.includes(t));
			return matchesQuery && matchesTags;
		});
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

	<!-- Tag filter chips -->
	{#if allTags.length}
		<div class="tags-filter" aria-label="ตัวกรองตามแท็ก">
			{#each allTags as tag}
				<button
					type="button"
					class="tag-chip {$selectedTags.includes(tag) ? 'selected' : ''}"
					on:click={() => toggleTag(tag)}
					aria-pressed={$selectedTags.includes(tag)}
				>
					{tag}
				</button>
			{/each}
		</div>
	{/if}

	<ul class="policy-list">
		{#each $filteredPolicies as p}
			<a class="title" href={`/policy/${p.slug}`}>
				<li class="policy-item">
					<h3>{p.title}</h3>
					<p class="summary">{excerpt(p.content)}</p>
					{#if p.tags?.length}
						<div class="policy-tags">
							{#each p.tags as tag}
								<span class="tag-pill">{tag}</span>
							{/each}
						</div>
					{/if}
				</li>
			</a>
		{/each}
	</ul>

	<a href="https://forms.gle/QfS6JQTB5V8y1r1F9" target="_blank" class="suggest-policy-button">
		<button> เสนอนโยบายเพิ่มเติม </button>
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

	.tags-filter {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 12px;
	}

	.tag-chip {
		border: 1px solid #e0e0e0;
		background: #fafafa;
		color: #333;
		border-radius: 999px;
		padding: 6px 10px;
		font-size: 14px;
		cursor: pointer;
	}

	.tag-chip.selected {
		background: #111827;
		border-color: #111827;
		color: #fff;
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

	.policy-tags {
		margin-top: 10px;
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.tag-pill {
		background: #f1f5f9;
		color: #334155;
		border-radius: 999px;
		padding: 3px 8px;
		font-size: 12px;
	}

	.suggest-policy-button {
		margin-top: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		text-align: center;
		transition: background-color 0.3s;
	}

	.suggest-policy-button .icon {
		margin-right: 8px;
		font-size: 18px;
	}
</style>
