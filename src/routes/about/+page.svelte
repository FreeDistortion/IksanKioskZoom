<script>
	
</script>

<main>
	<!-- svelte-ignore a11y-missing-attribute -->
	<div class="main-container">
		<div class="contents-container">
			<a href="/about/asite">
				<div class="go-to-heaven asite fa"></div>
				<div class="asite icon" />
			</a>

			<a href="/about/bsite">
				<div class="go-to-heaven bsite cul"></div>
				<div class="bsite icon" />
			</a>

			<a href="/about/csite">
				<div class="go-to-heaven csite eat"></div>
				<div class="csite icon" />
			</a>
		</div>
		<a href="/">
			<div class="come-back-home"></div>
		</a>
	</div>
</main>

<style>
	
	.main-container {
		background-image: url('$lib/images/subBackImg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		position: relative;
		width: 1080px;
		height: 1920px;
	}
	.contents-container {
		background-image: url('$lib/images/map_full_resized.png');
		top: 304px;
	}
</style>
