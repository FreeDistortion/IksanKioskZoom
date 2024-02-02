<script>
	import mapFull from '$lib/images/map_full.png';
  
  </script>
  
  <main>
	  <!-- svelte-ignore a11y-missing-attribute -->
	  	<div class="main-container">

			<div class="contents-container">
				<a href="/loupe">
					<div class="go-to-heaven asite">
					</div>
				</a>
				<a href="/about/bsite">
					<div class="go-to-heaven bsite">
					</div>
					</a>

					<a href="/about/csite">
				<div class="go-to-heaven csite">
				</div>
				</a>
			</div>
			<a href="/">

				<div class="come-back-home">
					
				</div>
			</a>
		</div>
  </main>
  
  <style>
	main {
	  
	  margin-left: -28px;
	  text-align: center;

	}
	.main-container{
		background-image: url('$lib/images/subBackImg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		position: relative;
		width: 1080px;
		height: 1920px;
		;
	}
	.contents-container {
		position:absolute;
		background-image: url('$lib/images/map_full_resized.png');
		/* background: hsl(239, 100%, 50%); */
		width: 1080px;
		height: 1200px;
		left: 50%;
		top: 304px;
		transform: translate(-50%,0%);
	}
	.go-to-heaven{
		position: absolute;
		background: hsl(175, 100%, 50%);
		width: 215px;
		height: 111px;
		transform: skewx(-29.45deg) rotate(19.3deg);
	}
	.asite{
		background-image: url('$lib/images/icon_fashion.png');
		background-size: 100px;
		width: 500px;
		height: 250px;
		left: 0px;
		top: 400px;
		transform: inherit translate(-50%,-50%);
	}
	.bsite{
		background-image: url('$lib/images/icon_culture.png');
		background-size: 100px;
		left: 70%;
		top: 20%;
		transform:inherit translate(-50%,-50%);
	}
	.csite{
		background-image: url('$lib/images/icon_eat.png');
		background-size: 100px;
		background-repeat: no-repeat;
		left: 812px;
		top: 419px;
		transform: inherit translate(-50%,-50%);
	}
	
	.come-back-home{
        position: absolute;
		background: #42FF00;
		width: 400px;
		height: 150px;
		left: 50%;
		top: 90%;
		transform: translate(-50%,-0%);
	}
    .prev{
        width: 200px;
        left: 15%;
        transform: translate(-50%,-0%);
    }
    .next{
        width: 200px;
        left: 85%;
        transform: translate(-50%,-0%);
    }
  </style>
  