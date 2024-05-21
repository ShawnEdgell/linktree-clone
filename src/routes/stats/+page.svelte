<script lang="ts">
	// Define the type for the links array
	type Link = {
		href: string;
		label: string;
		icon?: string; // icon is optional since not all links have an icon
		variant?: string; // variant class for the button
	};

	const links: Link[] = [
		{ href: '/', label: 'Home', variant: 'variant-filled' },
		{
			href: 'https://firebasestorage.googleapis.com/v0/b/stillmilkylive.appspot.com/o/Milky_FishyStats.zip?alt=media&token=305d8e75-3569-43f3-b074-3ad615560e4e',
			label: 'Fishy - 14 Gravity (latest)',
			variant: 'variant-filled-secondary'
		},
		{
			href: 'https://firebasestorage.googleapis.com/v0/b/stillmilkylive.appspot.com/o/Milky_SharkyStats.zip?alt=media&token=3d4abf7d-3f01-4393-8490-ae2e230ab29f',
			label: 'Sharky - 13 Gravity',
			variant: 'variant-filled-secondary'
		},
		{
			href: 'https://firebasestorage.googleapis.com/v0/b/stillmilkylive.appspot.com/o/Milky_FroggyStats.zip?alt=media&token=0179b9fd-3d9c-4c36-a487-184c64644fb0',
			label: 'Froggy - 15 Gravity',
			variant: 'variant-filled-secondary'
		}
	];
</script>

<title>StillMilky | Stats & Settings</title>

<div
	id="app"
	class="container h-full mx-auto flex flex-col justify-center max-w-sm items-center p-4"
>
	<img src="./Milky.webp" alt="Milky" class="rounded-full w-24 h-24" />
	<div class="flex flex-col items-center mb-6">
		<h1 class="text-2xl text-primary-500">Stats & Settings</h1>
		<p>For XXL 3 Mod, BonedOllieMod, Fro's Mod</p>
	</div>
	<div class="flex flex-col w-full gap-2">
		{#each links as { href, label, variant }}
			<a {href} class="btn btn-lg {variant} w-full" data-sveltekit-preload-data="hover">
				{label}
			</a>
		{/each}
	</div>
	<footer class="mt-8 text-center text-sm">
		<p>&copy; 2024 stillmilky. All rights reserved.</p>
		<p>
			Created by <a
				href="https://github.com/ShawnEdgell/linktree-clone"
				target="_blank"
				class="text-tertiary-500"
				data-sveltekit-preload-data="hover">Milky</a
			>
		</p>
	</footer>
</div>
