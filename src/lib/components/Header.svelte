<script>
	import { page } from '$app/stores';
</script>

<header class="border-b-black">
	<nav class="p-4">
		<ul class="gap-4">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="text-center text-black no-underline hover:no-underline hover:text-green-500 text-2xl font-bold"
					>Indie Student</a>
			</li>
			<li aria-current={$page.url.pathname === '/students' ? 'page' : undefined}>
				<a href="/students" class="text-center text-black no-underline hover:no-underline hover:text-green-500 text-2xl font-bold"
					>Students</a>
			</li>
			<!-- <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li> -->
		</ul>
	</nav>
</header>

<style>
	header {
		z-index: 2; 
		position: relative;
		width: 100%;
		display: flex;
		background-color: white;
		color: black;
		/* justify-content: space-between; */
	}

	nav {
		width: 100%;
		display: flex;
		/* justify-content: center; */
		--background: white;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		gap: 20px;
	}

	li {
		position: relative;
		height: 100%;
	}
</style>
