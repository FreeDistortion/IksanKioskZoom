<script>
	import mapFull from '$lib/images/map_full.png';
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
	main {
		margin-left: -28px;
		text-align: center;
	}
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
		position: absolute;
		background-image: url('$lib/images/map_full_resized.png');
		/* background: hsl(239, 100%, 50%); */
		width: 1080px;
		height: 1200px;
		left: 50%;
		top: 304px;
		transform: translate(-50%, 0%);
	}
	.go-to-heaven {
		position: absolute;
		background: hsl(175, 100%, 50%);
		/* background: red; */
		width: 100px;
		height: 100px;
		/* transform: rotate(24deg) skewx(-16deg); */
		background-size: 0;
	}
	.asite {
		background-image: url('$lib/images/icon_fashion.png');
		background-color: rgba(255, 36, 156, 0.3);
		width: 577px;
		height: 437px;
		left: 0px;
		top: 295px;
		transform: inherit translate(-50%, -50%);

		clip-path: polygon(35.3% 0, 100% 39.9%, 59.4% 100%, 0 62.5%, 0 47%);
	}
	.bsite {
		background-image: url('$lib/images/icon_culture.png');
		background-color: rgba(157, 44, 255, 0.3);
		height: 330px;
		width: 380px;
		left: 350px;
		top: 469px;
		transform: inherit translate(-50%, -50%);

		clip-path: polygon(61.4% 0, 100% 20.3%, 38% 100%, 0 80%);
	}

	.csite {
		background-image: url('$lib/images/icon_eat.png');
		background-color: rgba(255, 59, 44, 0.3);
		height: 428px;
		width: 580px;
		right: 0px;
		top: 510px;
		transform: inherit translate(-50%, -50%);
		clip-path: polygon(45% 0, 100% 31%, 100% 38.7%, 59.2% 100%, 0 66.5%);
	}
	.icon {
		background-size: 100px;
		background-repeat: no-repeat;
		background-position: center;
		position: absolute;
	}
	.icon::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: white;
		opacity: 0; /* 시작은 투명하게 */
		z-index: 1; /* 요소 위에 표시 */
		animation: sparkling-animation 3s infinite; /* 애니메이션 지속 시간과 반복 설정 */
	}

	@keyframes sparkling-animation {
		0%,
		100% {
			opacity: 0.1; /* 애니메이션 시작과 끝에서는 투명하게 */
		}
		50% {
			opacity: 0.4; /* 애니메이션 중간에서 최대 밝기 */
		}
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
		width: 200px;
		left: 15%;
		transform: translate(-50%, -0%);
	}
	.next {
		width: 200px;
		left: 85%;
		transform: translate(-50%, -0%);
	}
</style>
