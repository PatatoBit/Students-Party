<script>
	const logo = '/images/MainLogo.png';
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
	nav a {
		margin-left: 24px;
		color: #333;
		text-decoration: none;
		font-weight: 600;
		cursor: pointer;
	}
</style>
