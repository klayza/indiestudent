<script>
    import UserProfile from '$lib/components/UserProfile.svelte';
    export let data; // Assuming this is passed from the page's load function
  </script>
  
  <UserProfile {data} />