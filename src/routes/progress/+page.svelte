<script lang="ts">
	import Topbar from '$lib/components/Topbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>ความคืบหน้า</title>
	<meta name="description" content="หน้านี้จะถูกใช้เมื่อนีโอได้เป็นประธานนักเรียน" />
</svelte:head>

<Topbar />

<main class="container progress-page">
	<h1 class="anakotmai">ความคืบหน้า</h1>
	<p class="subtitle">หน้านี้จะถูกใช้เมื่อนีโอได้รับเลือกตั้งเป็นประธานนักเรียน</p>

	<section class="board">
		<div class="column">
			<h3>ที่ต้องทำ</h3>
			<div class="card">
				<strong>ชนะการเลือกตั้ง</strong>
				<p class="muted">ความสำคัญ: สูงสุด</p>
			</div>
		</div>
	</section>

	<section class="board">
		<div class="column">
			<h3>กำลังทำ</h3>
		</div>
	</section>

	<section class="board">
		<div class="column">
			<h3>ทำเสร็จแล้ว</h3>
		</div>
	</section>
</main>

<Footer />

<style>
	.progress-page {
		padding: 24px 32px;
		min-height: 100vh;
	}
	.subtitle {
		margin-top: 6px;
		color: #555;
	}
	.board {
		margin-top: 16px;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 16px;
	}
	.column {
		background: #fff;
		border-radius: 6px;
		box-shadow: 0 8px 18px rgba(12, 18, 32, 0.06);
		padding: 16px;
	}
	.card {
		margin-top: 12px;
		background: #f9fafb;
		border: 1px solid #eef0f3;
		border-radius: 6px;
		padding: 12px;
	}
	.muted {
		margin: 6px 0 0 0;
		color: #6b7280;
		font-size: 0.9rem;
	}

	@media (min-width: 800px) {
		.board {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
</style>
