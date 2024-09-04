<script>
	export let task;
	export let taskNumber;

	function getBookCoverUrl(isbn) {
		return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
	}
</script>

<div class="pl-4 border-l-2 border-gray-200">
	<h4 class="text-lg font-medium">
		<span class="text-blue-500">{taskNumber}</span>
		{task.title}
	</h4>

	{#if task.objective}
		<p class="text-sm text-gray-600 mt-1">Objective: {task.objective}</p>
	{/if}

	{#if task.type === 'book'}
		<div class="mt-2">
			<img src={getBookCoverUrl(task.data.isbn)} alt="Book cover" class="w-24 h-auto shadow-md" />
		</div>
	{/if}

	{#if task.description}
		<p class="text-sm mt-2 whitespace-pre-line">{task.description}</p>
	{/if}
</div>
