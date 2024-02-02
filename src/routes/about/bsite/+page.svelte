<script>
	import ImageLoupe from '$lib/loupe/CultureLoupe.svelte';
</script>

<main>
	<!-- svelte-ignore a11y-missing-attribute -->
	<div class="main-container">
		<div class="contents-container">
			<ImageLoupe />
		</div>
		<a href="/">
			<div class="come-back-home"></div>
		</a>
		<a href="/about/asite">
			<div class="come-back-home prev"></div>
		</a>
		<a href="/about/csite">
			<div class="come-back-home next"></div>
		</a>
	</div>
</main>

<style>
	main {
		margin-left: -28px;
		text-align: center;
	}
	.main-container {
		background-image: url('$lib/images/detailBackImg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		position: relative;
		width: 1080px;
		height: 1920px;
	}
	.contents-container {
		position: absolute;
		/* background-image: url('$lib/images/map_full_resized.png'); */
		/* background: hsl(239, 100%, 50%); */
		width: 1080px;
		height: 1200px;
		left: 50%;
		top: 160px;
		transform: translate(-50%, 0%);
	}
	.come-back-home {
		background-image: url('$lib/images/iconComeBackHome.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;

		position: absolute;
		/* background: #42ff00; */
		width: 400px;
		height: 150px;
		left: 50%;
		top: 90%;
		transform: translate(-50%, -0%);
	}
	.prev {
		background-image: url('$lib/images/iconPrev.png');
		width: 350px;
		left: 18%;
		transform: translate(-50%, -0%);
	}
	.next {
		background-image: url('$lib/images/iconNext.png');
		width: 350px;
		left: 82%;
		transform: translate(-50%, -0%);
	}
</style>
