<script>
  import { slide } from 'svelte/transition';
  import LearningGuide from './LearningGuide.svelte';

  export let data;
  let selectedPathId = Object.keys(data.paths)[0]; // Default to first path

  function selectPath(pathId) {
    selectedPathId = pathId;
  }
</script>

<div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
  <h1 class="text-3xl font-bold mb-4">{data.user.first + " " + data.user.last}</h1>
  
  <div class="grid grid-cols-3 gap-4 mb-6 text-center">
    <div>
      <p class="font-semibold">Following</p>
      <p>{data.user.following.length}</p>
    </div>
    <div>
      <p class="font-semibold">Followers</p>
      <p>{data.user.followers.length}</p>
    </div>
    <div>
      <p class="font-semibold">Studies</p>
      <p>{data.user.studies.join(", ")}</p>
    </div>
  </div>

  <div class="mb-6">
    <h2 class="text-2xl font-semibold mb-2">Learning Paths</h2>
    <div class="flex space-x-2 overflow-x-auto pb-2">
      {#each Object.entries(data.paths) as [pathId, path]}
        <button
          class="px-4 py-2 rounded-full transition-colors duration-200 focus:outline-none"
          class:bg-blue-500={selectedPathId === pathId}
          class:text-white={selectedPathId === pathId}
          class:bg-gray-200={selectedPathId !== pathId}
          on:click={() => selectPath(pathId)}
        >
          {path.meta.title}
        </button>
      {/each}
    </div>
  </div>

  {#key selectedPathId}
    <div transition:slide>
      <LearningGuide guideData={data.paths[selectedPathId]} />
    </div>
  {/key}
</div>