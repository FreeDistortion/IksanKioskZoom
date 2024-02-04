<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	let array: string[] = [];

	if (browser) {
		onMount(async () => {
			try {
				const response = await fetch('/testFetch.txt');
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const text = await response.text();
				console.log(text);
				array = (text || '')
					.split('\n')
					.map((line) => line.trim())
					.filter((line) => line);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		});
	}
</script>

<main>
	<div>{array}</div>
	{#each array as item}
  <div>{item}</div>
{/each}
</main>
