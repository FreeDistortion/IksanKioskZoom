<script lang="ts">
import ImageLoupe from '$lib/loupe/FashionLoupe.svelte';


  // 이 함수는 일반 배열 T[]를 받아 페이지 사이즈에 맞게 T[][] 형태로 분할합니다.

//   export function paginate<T>(array: T[], pageSize: number): T[][] {
//   return array.reduce((acc: T[][], curr: T, idx: number) => {
//     const pageIndex = Math.floor(idx / pageSize);
//     if (!acc[pageIndex]) {
//       acc[pageIndex] = [];
//     }
//     acc[pageIndex].push(curr);
//     return acc;
//   }, []);
// }
// const array: string[] = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9']; // ... 이어짐
// const n: number = 3; // 한 행의 아이템 수
// const m: number = 2; // 한 페이지에 표시할 행 수
// const pageSize: number = n * m; // 한 페이지에 표시할 아이템 수
// let paginatedArray: string[][] = paginate(array, pageSize);
// let currentPage: number = 0;

// 페이지네이션 함수는 이제 m x n 행렬을 반환합니다.
export function paginate<T>(array: T[], pageSize: number, itemsPerRow: number): T[][][] {
  // 전체 페이지 수 계산
  const numOfPages = Math.ceil(array.length / pageSize);

  return Array.from({ length: numOfPages }, (_, pageIndex) => {
    // 각 페이지의 시작점을 계산합니다.
    const start = pageIndex * pageSize;
    // 현재 페이지의 아이템을 슬라이스합니다.
    const pageItems = array.slice(start, start + pageSize);

    // 페이지 내에서 m 행을 생성합니다.
    return Array.from({ length: Math.ceil(pageItems.length / itemsPerRow) }, (_, rowIndex) => {
      // 각 행의 시작점을 계산합니다.
      const rowStart = rowIndex * itemsPerRow;
      // 현재 행의 아이템을 슬라이스합니다.
      return pageItems.slice(rowStart, rowStart + itemsPerRow);
    });
  });
}
const array: string[] = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9']; // ... 이어짐
  const n: number = 3; // 한 행의 아이템 수
  const m: number = 2; // 한 페이지에 표시할 행 수
  const pageSize: number = n * m; // 한 페이지에 표시할 아이템 수
  let paginatedArray: string[][][] = paginate(array, pageSize, n);
  let currentPage: number = 0;



  </script>


  <main>
  <div class="main-container">
	<div class="contents-container">
		<ImageLoupe />
		<div class="store-container">
		
			{#each paginatedArray[currentPage] as row (row)}
		  <div class="row" >
			{#each row as item (item)}
			  <div class="item">{item}</div>
			{/each}
		  </div>
		{/each}
		
		<button on:click={() => currentPage = (currentPage + 1) % paginatedArray.length}>
		  Next Page
		</button>
		<button on:click={() => currentPage = (currentPage - 1 + paginatedArray.length) % paginatedArray.length}>
		  Previous Page
		</button>
		
		</div>
	</div>
	<a href="/">
		<div class="come-back-home"></div>
	</a>
	<a href="/about/csite">
		<div class="come-back-home prev"></div>
	</a>
	<a href="/about/bsite">
		<div class="come-back-home next"></div>
	</a>
</div>
  </main>
  <style>
	  main {
		  margin-left: -28px;
		  text-align: center;
		  /* overflow: hidden; */
	  }
	.row {
	  display: flex;
	}
	.item {
	  width: calc(100% / 3); /* 한 행의 아이템 수 n에 따라 조정 */
	  padding: 10px;
	  box-sizing: border-box;
	}
	.store-container{
		background-color: red;
	}
	.item{
		background-color: blue;
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
  