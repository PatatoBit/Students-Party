<script>
	const heroImage = '/images/Neo_Grayscale.png';
</script>

<section class="hero">
	<div class="hero-inner container">
		<div class="hero-left">
			<img src={heroImage} alt="candidate" class="hero-photo" />
		</div>

		<div class="hero-right">
			<blockquote class="quote">“ ยกเลิกทำข้อสอบ เพราะทุกคำตอบคือเธอ “</blockquote>

			<div class="score-box">
				<img src="/images/Crossbox.png" alt="Choose number 1" />
			</div>

			<div class="name">ณธกร รุ่งศุภกิจ (นีโอ)</div>
		</div>
	</div>
</section>

<style>
	.hero {
		background: #2fb04a;
		color: #fff;
		padding-top: 20px;
	}
	.hero-inner {
		display: flex;
		align-items: center;
		gap: 36px;
	}
	.hero-left {
		flex: 0 0 260px;
		display: flex;
		justify-content: center;
	}
	.hero-photo {
		width: 260px;
		filter: grayscale(100%);
		border-radius: 6px;
	}
	.hero-right {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 18px;
	}
	.quote {
		font-size: 28px;
		font-weight: 700;
		margin: 0;
		max-width: 560px;
	}
	.score-box {
		display: flex;
		align-items: center;
		margin-top: 6px;
		border: 3px solid white;
	}
	.name {
		font-weight: 700;
		opacity: 0.95;
	}

	@media (max-width: 900px) {
		.hero-inner {
			flex-direction: column;
			text-align: center;
		}
		.hero-left {
			order: 2;
		}
		.hero-right {
			order: 1;
			align-items: center;
		}
	}
</style>
