<script>
  import { onMount } from 'svelte';
  import Chapter from '$lib/components/Chapter.svelte';

  export let guideData;
  let progress = 0;

  onMount(() => {
    // Calculate progress based on completed items
    // This is a placeholder implementation
    progress = 1;
  });
</script>

<div class="bg-white rounded-lg">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-2xl font-bold">{guideData.meta.title}</h2>
    <span class="text-sm text-gray-500">{progress}% Done</span>
  </div>
  
  {#each guideData.nodes as chapter, index}
    <Chapter {chapter} chapterNumber={index + 1} />
  {/each}
</div>