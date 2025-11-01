<script>
	const placeholder = (w = 400, h = 250, t = 'Image') =>
		`https://placehold.co/${w}x${h}?text=${encodeURIComponent(t)}`;
</script>

<section class="policies" id="policy">
	<h2 class="anakotmai">นโยบาย</h2>
	<div class="cards">
		<article class="card">
			<img src={placeholder(600, 400, 'Device Support')} alt="policy" />
			<h4>เครื่องปรินท์สี</h4>
			<p>สั่งปรินท์และจ่ายบนเว็ปออนไลน์ แค่มารับของ</p>
		</article>

		<article class="card">
			<img src={placeholder(600, 400, 'Website')} alt="policy" />
			<h4>เว็ปไซต์ตามหาอาจารย์</h4>
			<p>สั่งปรินท์และจ่ายบนเว็ปออนไลน์ แค่มารับของ</p>
		</article>

		<article class="card">
			<img src={placeholder(600, 400, 'Uniforms')} alt="policy" />
			<h4>ผลักดันการใช้รองเท้า และกระเป๋าเสรี</h4>
			<p>สั่งปรินท์และจ่ายบนเว็ปออนไลน์ แค่มารับของ</p>
		</article>
	</div>

	<div class="more-policies">
		<a href="/policies">ดูเพิ่มเติม</a>
	</div>
</section>

<style>
	.policies h2 {
		color: #2b2d42;
		margin-bottom: 18px;
	}
	.policies .cards {
		display: flex;
		gap: 18px;
		margin-top: 18px;
	}
	.card {
		background: #fff;
		border-radius: 5px;
		width: 100%;
		box-shadow: 0 8px 18px rgba(12, 18, 32, 0.06);
		overflow: hidden;
	}
	.card img {
		width: 100%;
		border-radius: 0;
		display: block;
		margin-bottom: 0;
	}
	.card h4 {
		margin: 14px 14px 6px 14px;
	}
	.card p {
		color: #666;
		margin: 0;
		font-size: 14px;
		padding: 0 14px 14px 14px;
	}
	.more-policies {
		margin-top: 16px;
		text-align: center;
	}

	@media (max-width: 900px) {
		.policies .cards {
			flex-direction: column;
		}
	}
</style>
