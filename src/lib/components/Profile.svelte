<script>
	const placeholder = (w = 400, h = 250, t = 'Image') =>
		`https://placehold.co/${w}x${h}?text=${encodeURIComponent(t)}`;

	const portfolioImages = [
		{ src: '/images/profiles/ClassLeader.jpg', title: 'หัวหน้าห้องห้อง 131 และ 161' },
		{ src: '/images/profiles/MonkAssistant.jpg', title: 'อาสาตัวแทนศิษย์พระ' },
		{
			src: '/images/profiles/SportsFestivalDonation.jpg',
			title: 'บริจาคเครื่องดื่มและขนมงานกีฬาสี'
		},
		{ src: "/images/profiles/Teacher's day.jpg", title: 'ตัวแทนถือพานไหว้ครู' },
		{ src: '/images/profiles/WellBehavedStudentAward.jpg', title: 'รางวัลนักเรียนประพฤติดี' },
		{ src: '/images/profiles/MathTopScorer.jpg', title: 'คะแนนคณิตศาสตร์เพิ่มเติมสูงสุด' }
	];
</script>

<section class="profile">
	<h2 class="anakotmai">นีโอเป็นใคร</h2>
	<div class="profile-content">
		<div class="profile-image">
			<img src="/images/NeoBio.jpg" alt="profile" />
		</div>
		<div class="profile-info">
			<h3>ณธกร รุ่งศุภกิจ (นีโอ)</h3>
			<p>นักเรียนชั้นมัธยมศึกษาปีที่ 5 โรงเรียนสาธิตมหาวิทยาลัยศรีนครินทรวิโรฒ ปทุมวัน</p>

			<h4>ผลงาน</h4>
			<ul>
				<li>หัวหน้าห้อง 131 และ 161</li>
				<li>รางวัลเรียนดี 2567</li>
				<li>โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี) เกรดเฉลี่ย 3.87</li>
				<li>โรงเรียนสาธิต มศว ปทุมวัน ม.4 เกรดเฉลี่ย 3.95</li>
			</ul>

			<div class="social-links">
				<h4>ติดตามได้ที่</h4>
				<div class="social-icons">
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<a
						href="https://www.instagram.com/nxthxkxrnr001/"
						target="_blank"
						class="social-btn"
						aria-label="Instagram"
					>
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

	<div class="portfolio-section">
		<h3 class="anakotmai">ผลงาน</h3>
		<div class="portfolio-gallery">
			{#each portfolioImages as image}
				<div class="portfolio-item">
					<img src={image.src} alt={image.title} />
					<div class="portfolio-caption">
						<p>{image.title}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.profile h2 {
		color: #2b2d42;
		margin-bottom: 18px;
	}
	.profile-content {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 24px;
		margin-top: 16px;
	}
	.profile-image {
		flex: 0 0 300px;
		display: flex;
		justify-content: center;

		img {
			object-fit: cover;
		}
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

	.portfolio-section {
		margin-top: 48px;
	}

	.portfolio-section h3 {
		color: #2b2d42;
		margin-bottom: 24px;
		font-size: 24px;
		font-weight: 700;
	}

	.portfolio-gallery {
		display: column;
		column-count: 3;
		column-gap: 16px;
	}

	.portfolio-item {
		break-inside: avoid;
		margin-bottom: 16px;
		border-radius: 12px;
		overflow: hidden;
		background: #fff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.portfolio-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
	}

	.portfolio-item img {
		width: 100%;
		height: auto;
		display: block;
	}

	.portfolio-caption {
		padding: 12px 16px;
		background: #fff;
	}

	.portfolio-caption p {
		margin: 0;
		font-size: 14px;
		font-weight: 600;
		color: #2b2d42;
		text-align: center;
	}

	@media (max-width: 900px) {
		.profile-image {
			order: 1;
			flex: 0 0 250px;
			margin-inline: auto;
		}
		.profile-info {
			order: 2;
			width: 100%;
		}

		.social-links {
			text-align: center;
		}

		.social-icons {
			justify-content: center;
		}

		.portfolio-gallery {
			column-count: 2;
		}
	}

	@media (max-width: 600px) {
		.portfolio-gallery {
			column-count: 1;
		}
	}
</style>
