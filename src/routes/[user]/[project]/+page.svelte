<script>
    import ProjectPage from '$lib/components/ProjectPage.svelte';
    export let data; // Assuming this is passed from the page's load function
    // let project = data.project
    // console.log(project)
 </script>

<ProjectPage {data} />