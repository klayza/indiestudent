<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<p class="">
	This is the students page. Here is where you can find new friends.
</p>

<br />
<br />

<p>
	There are currently {data.students.length} students.
</p>

<ul>
	{#each data.students as student}
		<li><a href="/{student.id}">{student.first + ' ' + student.last}</a><span class="ml-2">studies ({student.studies.join(", ")})</span></li>
	{/each}
</ul>
