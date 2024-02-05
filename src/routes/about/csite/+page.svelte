<script lang="ts">
	import ImageLoupe from '$lib/loupe/EatLoupe.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	export function paginate<T>(
		array: T[],
		pageSize: number,
		itemsPerRow: number,
		rowsPerPage: number
	): T[][][] {
		const pages: T[][][] = [];
		const totalItems = array.length;
		const totalRows = Math.ceil(totalItems / itemsPerRow);
		const totalPages = Math.ceil(totalRows / rowsPerPage);

		for (let p = 0; p < totalPages; p++) {
			const page: T[][] = [];
			for (let r = 0; r < rowsPerPage; r++) {
				const sliceStart = p * pageSize + r * itemsPerRow;
				const sliceEnd = sliceStart + itemsPerRow;
				const row = array.slice(sliceStart, sliceEnd);

				// 빈 칸을 null로 채움
				while (row.length < itemsPerRow) {
					row.push(null);
				}
				page.push(row);
			}
			pages.push(page);
		}

		return pages;
	}

	let array: string[] = [];
	let paginatedArray: string[][][] = [];
	if (browser) {
		onMount(async () => {
			try {
				const response = await fetch('/eatList.txt');
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const text = await response.text();
				console.log(text);
				array = (text || '')
					.split('\n')
					.map((line) => line.trim())
					.filter((line) => line);

				paginatedArray=paginate(array, pageSize, n, m);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		});
	}
	const n: number = 3; // 한 행의 아이템 수
	const m: number = 5; // 한 페이지에 표시할 행 수
	const pageSize: number = n * m; // 한 페이지에 표시할 아이템 수
	
	// let paginatedArray: string[][][] = paginate(array, pageSize, n, m);
	let currentPage: number = 0;
	// "Next Page" 버튼 클릭 시 호출될 함수
	function goToNextPage() {
		currentPage = (currentPage + 1) % paginatedArray.length;
	}

	// "Previous Page" 버튼 클릭 시 호출될 함수
	function goToPreviousPage() {
		currentPage = currentPage - 1 < 0 ? paginatedArray.length - 1 : currentPage - 1;
	}
</script>

<main>
	<div class="main-container detail-main-container">
		<div class="contents-container">
			<ImageLoupe />

			<div class="store-container">
				<div class="pagination-controls">
					<button  on:click={goToPreviousPage} type="button">
						<div class="prev-store">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
					</button>
					<div class="item-container">
						{#if paginatedArray.length > 0 && paginatedArray[currentPage]}

						{#each paginatedArray[currentPage] as row, rowIndex}
							<div class="row">
								{#each row as item, itemIndex}
									<div class="item">{item || ''}</div>
								{/each}
							</div>
						{/each}
						{/if} 
					</div>
					<button  on:click={goToNextPage}>
						<div class="next-store">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</div>
					</button>
				</div>
			</div>

		</div>

		<a href="/">
			<div class="come-back-home"></div>
		</a>
		<a href="/about/bsite">
			<div class="come-back-home prev"></div>
		</a>
		<a href="/about/asite">
			<div class="come-back-home next"></div>
		</a>
	</div>
</main>

<style>
	
</style>
