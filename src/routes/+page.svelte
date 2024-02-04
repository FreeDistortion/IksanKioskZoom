<script>
	let currId = 0;
	import mainImg1 from '$lib/images/IksanMainImg 1.png';
	import mainImg2 from '$lib/images/IksanMainImg 2.png';
	import mainImg3 from '$lib/images/IksanMainImg 3.png';
	import mainImg4 from '$lib/images/IksanMainImg 4.png';
	import mainImg5 from '$lib/images/IksanMainImg 5.png';
	import mainImg6 from '$lib/images/IksanMainImg 6.png';
	import mainImg7 from '$lib/images/IksanMainImg 7.png';
	import mainImg8 from '$lib/images/IksanMainImg 8.png';
	import mainImg9 from '$lib/images/IksanMainImg 9.png';
	import mainImg10 from '$lib/images/IksanMainImg 10.png';
	import mainImg11 from '$lib/images/IksanMainImg 11.png';
	import mainImg12 from '$lib/images/IksanMainImg 12.png';
	import backImage from '$lib/images/mainBackImg.png';
	const images = [
	  mainImg1 ,
	  mainImg2 ,
	  mainImg3 ,
	  mainImg4 ,
	  mainImg5 ,
	  mainImg6 ,
	  mainImg7 ,
	  mainImg8 ,
	  mainImg9 ,
	  mainImg10 ,
	  mainImg11 ,
	  mainImg12 ,
	];
  
  
	const imgLen = images.length;
	let positionLeft = 0;
  
	const moveSlider = () => {
	  positionLeft = currId * 100;
	};
  
	const next = () => {
	  currId = currId === imgLen - 1 ? 0 : currId + 1;
	  moveSlider();
	};
  
	const prev = () => {
	  currId = currId === 0 ? imgLen - 1 : currId - 1;
	  moveSlider();
	};
  
	const getIndex = (index) => {
	  currId = index;
	  moveSlider();
	};
  
	  let interval = setInterval(next, 3000);
  
  </script>
  
  <main>
	  <!-- svelte-ignore a11y-missing-attribute -->
	  <a href="/about" >
	  <div class="slider-container">
	<div class="container">
	  <div class="slider" style="left: -{positionLeft}%;">
		{#each images as img}
		  <img src={img} alt="" />
		{/each}
	  </div>
  <!-- 
	  <div class="arrow">
		<button on:click={prev} class="prev">Prev</button>
		<button on:click={next} class="next">Next</button>
	  </div>
	   -->
	  <div class="papagination">
		{#each images as _, i}
		  <button
			class={currId === i ? 'active' : ''}
			on:click={() => getIndex(i)}
		  />
		{/each}
	  </div>
	</div>
	</div>
  </a>
  </main>
  
  <style>
	button{
		float: unset;
		height: unset;
	}
	.slider-container{
		background-image: url('$lib/images/mainBackImg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		position: relative;
		width: 1080px;
		height: 1920px;

	}
	.container {
	  padding-top: 104px;
	  position: relative;
	  width: 100%;
	  max-width: 1038px;
	  margin: 0 auto;
	  overflow: hidden;
	}
	.slider {
	  display: flex;
	  position: relative;
	  transition: left 0.5s;
	}
	.slider img {
	  width: 100%;
	  height: auto;
	  object-fit: cover;
	  flex-shrink: 0;
	}
	.arrow {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  top: 0;
	}
	.arrow button {
	  margin-bottom: 0;
	  padding: 12px;
	  border: 0;
	  background-color: rgba(255, 255, 255, 0.7);
	  cursor: pointer;
	}

	.papagination {
	  position: absolute;
	  bottom: 0;
	  padding-bottom: 8px;
	  width: 100%;
	}

	.papagination button {
	  margin: 0 4px;
	  width: 14px;
	  height: 14px;
	  border: 0;
	  border-radius: 50%;
	  background-color: rgba(255, 255, 255, 0.8);
	  text-align: center;
	  cursor: pointer;
	}
	.papagination .active {
	  background-color: rgba(255, 0, 0, 0.8);
	}
  </style>