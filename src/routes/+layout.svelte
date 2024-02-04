<script lang="ts">
	import '../app.css';
	import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';

  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const resetTimer = (): void => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      goto('/');
    }, 600*1000); // 60초 후에 /about으로 이동
  };

  if (browser) {
    onMount(() => {
      resetTimer();
      window.addEventListener('click', resetTimer);
      window.addEventListener('keypress', resetTimer);
      window.addEventListener('mousemove', resetTimer);
      window.addEventListener('scroll', resetTimer);
    });

    onDestroy(() => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('click', resetTimer);
      window.removeEventListener('keypress', resetTimer);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('scroll', resetTimer);
    });
  }









  
</script>

<main class="min-h-[calc(100vh-3em)]">
	<div class="max-w-5xl mx-auto">
		<slot />
	</div>
</main>
