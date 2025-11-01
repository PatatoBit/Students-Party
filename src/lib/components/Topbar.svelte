<script>
	const logo = '/images/MainLogo.png';
</script>

<header class="topbar">
	<div class="container">
		<a href="/" class="home-link" aria-label="Home">
			<img src={logo} alt="logo" class="logo" />
		</a>
		<nav>
			<a href="/#policy">นโยบาย</a>
			<a href="/#platform">ความคืบหน้า</a>
			<a href="/#contact">ติดต่อ</a>
		</nav>
	</div>
</header>

<style>
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
	.home-link {
		display: inline-flex;
		align-items: center;
	}
	nav a {
		margin-left: 24px;
		color: #333;
		text-decoration: none;
		font-weight: 600;
		cursor: pointer;
	}
</style>
