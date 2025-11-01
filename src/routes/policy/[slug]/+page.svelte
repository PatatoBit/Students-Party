<script lang="ts">
	import Marked from 'svelte-marked';
	export let data: { policy: { title: string; content: string } };
	const { policy } = data;
</script>

<section class="container policy-detail">
	<a class="back" href="/policies">← กลับไปยังนโยบายทั้งหมด</a>
	<div class="content">
		<Marked source={policy.content} />
	</div>
</section>

<style>
	.policy-detail {
		padding: 24px 0 48px;
	}
	.policy-detail .back {
		text-decoration: none;
		color: #666;
		font-size: 14px;
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
