<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Indie Student</title>
	<meta
		name="description"
		content="Indie Student - Find and connect with independent students from around the world."
	/>
</svelte:head>

<section>
	<h1 class="text-green-600 text-8xl mt-48">Indie Student</h1>
	<h1 class="m-8">Find and connect with independent students from around the world.</h1>
	<div class="pt-8 border rounded-lg p-8 w-full text-center bg-white">
		<!-- Add a  -->
		<h2 class="text-xl bg-white">Over 300,000 students are working and learning together here.</h2>

		<div class="mt-6 text-xl border bg-green-600 w-fit m-auto rounded-lg px-8 py-2">
			<a href="/signup" class="bg-green-600 text-white hover:no-underline w-min">Join Now!</a>
		</div>
	</div>
</section>

<div class="content mt-24">
	<!-- A community of motivated and curious people who come together to work and share on the things that matter most to them. -->
	<p></p>

	<div class="benefits">
		<ul class="flex flex-col gap-8 justify-evenly p-12">
			<li class="border rounded-xl bg-white p-8">
				<h2 class="text-3xl mb-4 font-bold">Get advice in any field</h2>
				<p class="text-lg">
					With over 3,901 topics ranging from practicing the guitar to quantum mechanics, there is
					something here for everyone. Chat and meetup with anyone.
				</p>
				<div class="flex flex-row w-full mt-8 gap-2">
					<div
						class="border cursor-pointer bg-gray-100 hover:bg-gray-100 rounded-full bg-white p-2 text-gray-600 italic"
					>
						Computer Science
					</div>
					<div
						class="border cursor-pointer hover:bg-gray-100 rounded-full bg-white p-2 text-gray-600 italic"
					>
						Meteorology
					</div>
					<div
						class="border cursor-pointer hover:bg-gray-100 rounded-full bg-white p-2 text-gray-600 italic"
					>
						Robotics
					</div>
					<div
						class="border cursor-pointer hover:bg-gray-100 rounded-full bg-white p-2 text-gray-600 italic"
					>
						Mathematics
					</div>
				</div>
				<div class="profiles mt-8">
					<div class="border p-4">
						<h2 class="inline text-lg font-bold">Clayton Wieberg</h2>
						<span class="ml-2 text-lg p-2">|</span><span class=" text-red-700 text-lg p-2"
							>full-time</span
						>
						<p class="mt-2 text-gray-600">Studies mathematics, neuruscience, computer science</p>
						<p></p>
					</div>
					<div class="border p-4">
						<h2 class="inline text-lg font-bold">Taylor Allen</h2>
						<span class="ml-2 text-lg p-2">|</span><span class=" text-lg p-2">part-time</span>
						<p class="mt-2 text-gray-600">Studies computer science, drawing, drift cars</p>
						<p></p>
					</div>
				</div>
				<!-- <p class="italic text-right mt-2">+901 more users </p> -->
			</li>
			<li class="border rounded-xl bg-white p-8">
				<h2 class="text-3xl mb-4 font-bold">Track your progress and stay focused</h2>
				<p class="text-lg">
					The hardest part about learning something new is sticking with it! Make friends and
					motivate each other, never lose sight of your goals.
				</p>
				<div class="">
					<!-- here be goals demo. 
					
					there will be donut progress bar with things like a weekly goal such as: 
					'Finish lectures on general relativity... 3 days remaining.'
					'Finish reading chapter 12 of Planetary Bodies... 28 days remaining.'
					'Write blog post on marketing 101 ... 31 days remaining'
					
					
					To make sure, if you fail to meet it everyone will be able to see it!
					-->

					<!-- the picture is for the long term goals, kind of like the github commit history -->
					<img aria="progress" width="300px" class="m-auto my-8" src="/img/progress.png" />
				</div>
			</li>
			<li class="border rounded-xl bg-white p-8">
				<h2 class="text-3xl mb-4 font-bold">Share goals and get motivated</h2>
				<p class="text-lg"></p>
				<div>
					<!-- here be a section for  -->
				</div>
			</li>
		</ul>
	</div>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.benefits {
		background-image: radial-gradient(gray 1px, rgba(244, 244, 244, 0) 1px);
		background-color: white;
		background-size: 20px 20px;
		border-top: 1px solid black;
		border-bottom: 1px solid black;
	}
</style>
