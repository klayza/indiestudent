<script>
  export let data;
  console.log(data);
</script>

<div class="overlay" style="background-color: {data.project.bgcolor};"></div>

<main style="z-index: 3; position: relative; color: {data.project.color}; font-family: {data.project.font}">

  <!-- Cover Image -->
  {#if data.project.coverimg}
      <div class="cover-image">
          <img src="/uploads/{data.project.coverimg}" alt="{data.project.title}">
      </div>
  {/if}

  <!-- Title -->
  <p class="text-3xl text-center my-8">{data.project.title}</p>


  <!-- About Section -->
  <section class="about-section">
      <p>{data.project.description}</p>
  </section>

  <!-- Gallery Section -->
  {#if data.project.galleryimgs.length > 0}
      <section class="gallery">
          {#each data.project.galleryimgs as img}
              <img src=/uploads/{img} alt="Gallery image">
          {/each}
      </section>
  {/if}
</main>

<style>
  .overlay {
      /* position: absolute; */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1; /* Below the header and main content */
  }

  main {  
      padding: 20px;
  }

  .cover-image img {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
  }

  .about-section {
      margin: 20px 0;
  }

  .gallery {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
  }

  .gallery img {
      width: 100%;
      height: auto;
      border: 1px solid #ccc;
  }
</style>
