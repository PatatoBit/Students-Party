<script>
	const heroImage = '/images/Neo_Grayscale.png';
	const logo = '/images/MainLogo.png';
	const placeholder = (w = 400, h = 250, t = 'Image') =>
		`https://placehold.co/${w}x${h}?text=${encodeURIComponent(t)}`;
</script>

<header class="topbar">
	<div class="container">
		<img src={logo} alt="logo" class="logo" />
		<nav>
			<a href="#policy">นโยบาย</a>
			<a href="#platform">ความคืบหน้า</a>
			<a href="#contact">ติดต่อ</a>
		</nav>
	</div>
</header>

<section class="hero">
	<div class="hero-inner container">
		<div class="hero-left">
			<img src={heroImage} alt="candidate" class="hero-photo" />
		</div>

		<div class="hero-right">
			<blockquote class="quote">“ ยกเลิกทำข้อสอบ เพราะทุกคำตอบคือเธอ “</blockquote>

			<div class="score-box">
				<div class="mul">×</div>
				<div class="n">1</div>
			</div>

			<div class="name">ณธกร รุ่งศุภกิจ (นีโอ)</div>
		</div>
	</div>
</section>

<main class="container main">
	<section class="profile">
		<h2 class="anakotmai">นีโอเป็นใคร</h2>
		<div class="profile-content">
			<div class="profile-image">
				<img src={placeholder(300, 400, 'Neo')} alt="profile" />
			</div>
			<div class="profile-info">
				<h3>ณธกร รุ่งศุภกิจ (นีโอ)</h3>
				<p>นักเรียนชั้นมัธยมศึกษาปีที่ 5 โรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒ ปทุมวัน</p>

				<h4>ผลงาน</h4>
				<ul>
					<li>หัวหน้าห้อง 131 และ 161</li>
					<li>รางวัลเรียนดี 2567</li>
					<li>โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี) เกรดเฉลี่ย 3.87</li>
					<li>สาธิต ปทุมวัน ม.4 เกรดเฉลี่ย 3.95</li>
				</ul>

				<div class="social-links">
					<h4>ติดตามได้ที่</h4>
					<div class="social-icons">
						<!-- svelte-ignore a11y_consider_explicit_label -->
						<a href="/https://www.instagram.com/nxthxkxrnr001/" target="_blank" class="social-btn">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
								<path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="policies">
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
</main>

<footer class="footer">
	<div class="container footer-inner">
		<div class="contact">
			<h3>ติดต่อ</h3>
			<p>ห้อง 161</p>
			<p>22197@satitpatumwan.ac.th</p>
			<p>lineid_here</p>
		</div>

		<div class="footer-brand">
			<img src="/images/MainLogo_White.png" alt="party logo" />
		</div>
	</div>
</footer>

<style>
	:global(body) {
		margin: 0;
		font-family: Inter, system-ui, Arial, sans-serif;
		color: #222;
		background: #f2f2f2;
	}
	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 20px;
	}

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
	nav a {
		margin-left: 24px;
		color: #333;
		text-decoration: none;
		font-weight: 600;
		cursor: pointer;
	}

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
		gap: 12px;
		margin-top: 6px;
	}
	.score-box .mul {
		font-size: 44px;
		font-weight: 700;
	}
	.score-box .n {
		width: 72px;
		height: 72px;
		background: #fff;
		color: #2fb04a;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		border-radius: 6px;
		font-size: 34px;
	}
	.name {
		font-weight: 700;
		opacity: 0.95;
	}

	.main {
		padding-top: 40px;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
	.profile h2,
	.policies h2 {
		color: #2b2d42;
		margin-bottom: 18px;
	}

	.profile-content {
		display: flex;
		gap: 24px;
		margin-top: 16px;
	}
	.profile-image {
		flex: 0 0 300px;
		display: flex;
		justify-content: center;
	}
	.profile-image img {
		width: 100%;
		border-radius: 8px;
	}
	.profile-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.profile-info h3 {
		margin: 0;
		font-size: 22px;
		font-weight: 700;
	}
	.profile-info p {
		margin: 0;
		color: #555;
		line-height: 1.6;
	}
	.profile-info h4 {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
		color: #2b2d42;
	}
	.profile-info ul {
		margin: 0;
		padding-left: 20px;
		color: #555;
		font-size: 14px;
	}
	.profile-info ul li {
		margin-bottom: 8px;
	}

	.social-links {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.social-icons {
		display: flex;
		gap: 12px;
	}
	.social-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		background: #fff;
		color: #2fb04a;
		border-radius: 50%;
		transition:
			background 0.3s,
			transform 0.3s;
	}
	.social-btn:hover {
		background: #2fb04a;
		color: #fff;
		transform: translateY(-2px);
	}
	.social-btn svg {
		width: 18px;
		height: 18px;
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

	.footer {
		background: #2f2f46;
		color: #fff;
		padding: 36px 0;
		margin-top: 40px;
	}
	.footer-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.contact h3 {
		margin: 0 0 8px 0;
	}
	.footer-brand {
		text-align: center;
	}
	.footer-brand img {
		height: 46px;
		display: block;
		margin-bottom: 8px;
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

		.profile_content {
			flex-direction: column;
			align-items: center;
		}
		.profile-image {
			order: 1;
			flex: 0 0 250px;
		}
		.profile-info {
			order: 2;
			width: 100%;
		}

		.policies .cards {
			flex-direction: column;
		}
		.footer-inner {
			flex-direction: column;
			gap: 18px;
		}
	}
</style>
