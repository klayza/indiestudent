<script>
  import Task from '$lib/components/Task.svelte';

  export let chapter;
  export let chapterNumber;
</script>

<div class="mb-6">
  <h3 class="text-xl font-semibold mb-2">
    {chapterNumber}. {chapter.title}
  </h3>
  {#if chapter.objective}
    <p class="text-sm text-gray-600 mb-2">Objective: {chapter.objective}</p>
  {/if}
  
  <ul class="space-y-2">
    {#each chapter.nodes as task, index}
      <li>
        <Task {task} taskNumber={`${chapterNumber}.${index + 1}`} />
      </li>
    {/each}
  </ul>
</div>
