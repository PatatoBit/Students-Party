<script>
	const placeholder = (w = 400, h = 250, t = 'Image') =>
		`https://placehold.co/${w}x${h}?text=${encodeURIComponent(t)}`;
</script>

<section class="policies" id="policy">
	<h2 class="anakotmai">นโยบาย</h2>
	<div class="cards">
		<a href="/policy/device-printing">
			<article class="card">
				<img src="/images/PolicyPreviews/printer.png" alt="Printer" />
				<h4>เครื่องปรินท์สี</h4>
				<p>สั่งปรินท์และจ่ายบนเว็ปออนไลน์ แค่มารับของ</p>
			</article>
		</a>

		<a href="/policy/free-shoes-and-bag">
			<article class="card">
				<img src="/images/PolicyPreviews/office.png" alt="Teacher office" />
				<h4>เว็บไซต์ตามหาอาจารย์</h4>
				<p>ตามหาห้องของอาจารย์ เพียงแค่กรอกชื่อ</p>
			</article>
		</a>

		<a href="/policy/find-lecturer">
			<article class="card">
				<img src="/images/PolicyPreviews/bags.png" alt="Students" />
				<h4>ผลักดันการใช้รองเท้า และกระเป๋าเสรี</h4>
				<p>สนับสนุนให้นักเรียนให้สามารถใช้รองเท้าและกระเป๋าอิสระ</p>
			</article>
		</a>
	</div>

	<div class="more-policies">
		<a href="/policies">ดูเพิ่มเติม</a>
	</div>
</section>

<style>
	a {
		text-decoration: none;
	}

	.more-policies a {
		font-weight: 600;
		text-decoration: underline;
	}

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
