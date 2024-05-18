<script lang="ts">
	// Define the type for the links array
	type Link = {
		href: string;
		label: string;
		icon?: string; // icon is optional since not all links have an icon
	};

	const links: Link[] = [
		{ href: 'https://discord.gg/CeKjWbGhmf', label: 'Discord', icon: 'discord' },
		{
			href: 'https://www.youtube.com/channel/UC7361pUdOT7EKWp-K6awlGw',
			label: 'YouTube',
			icon: 'youtube'
		},
		{ href: 'https://www.twitch.tv/stillmilky', label: 'Twitch', icon: 'twitch' },
		{ href: 'https://www.tiktok.com/@iamstillmilky', label: 'TikTok', icon: 'tiktok' },
		{ href: 'https://github.com/ShawnEdgell', label: 'GitHub', icon: 'github' }
	];

	const allLinks: Link[] = [
		...links,
		{ href: 'https://skatebit.vercel.app/', label: 'Skatebit (Modding Website)' }
	];

	// Define the type for the icon parameter
	function getIconPath(icon: string): string {
		switch (icon) {
			case 'discord':
				return 'M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.445.865-.608 1.25-1.845-.276-3.68-.276-5.487 0-.164-.393-.406-.874-.618-1.25a.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.032.028C.533 9.046-.319 13.58.099 18.058a.082.082 0 00.031.056c2.053 1.505 4.041 2.423 5.993 3.03a.078.078 0 00.084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106c-.653-.248-1.274-.55-1.872-.892a.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.073.073 0 01.073-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.076.01c.12.099.246.198.373.292a.077.077 0 01-.007.128 12.299 12.299 0 01-1.873.891.077.077 0 00-.041.107c.361.698.778 1.363 1.225 1.993a.076.076 0 00.084.028c1.962-.607 3.95-1.525 6.003-3.03a.077.077 0 00.031-.055c.5-5.177-.838-9.674-3.548-13.66a.061.061 0 00-.031-.029zM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.418-2.157 2.418z';
			case 'youtube':
				return 'M19.615 3.184C21.058 3.486 22.079 4.486 22.379 5.923 22.679 7.38 22.97 9.906 22.97 12C22.97 14.094 22.679 16.62 22.379 18.077 22.079 19.514 21.058 20.514 19.615 20.816 18.173 21.117 12 21.117 12 21.117 12 21.117 5.827 21.117 4.385 20.816 2.942 20.514 1.921 19.514 1.621 18.077 1.321 16.62 1.03 14.094 1.03 12 1.03 9.906 1.321 7.38 1.621 5.923 1.921 4.486 2.942 3.486 4.385 3.184 5.827 2.883 12 2.883 12 2.883 12 2.883 18.173 2.883 19.615 3.184ZM10.27 7.998V16.002L16.634 12.006 10.27 7.998Z';
			case 'twitch':
				return 'M3 1L1 5.389V20h5.333V23h2.706l2.706-2.706H15.65L23 13.353V1H3zm16.667 11.389l-2.61 2.612H14.61l-3.055 3.056V17.78L10.555 17.78H6.333V3.278h13.334v9.11zM8.5 6.833H10.5V12.833H8.5V6.833zM14 6.833H16V12.833H14V6.833z';
			case 'tiktok':
				return 'M21,7V9a1,1,0,0,1-1,1,8,8,0,0,1-4-1.08V15.5A6.5,6.5,0,1,1,6.53,9.72a1,1,0,0,1,1.47.9v2.52a.92.92,0,0,1-.28.62,2.49,2.49,0,0,0,2,4.23A2.61,2.61,0,0,0,12,15.35V3a1,1,0,0,1,1-1h2.11a1,1,0,0,1,1,.83A4,4,0,0,0,20,6,1,1,0,0,1,21,7Z';
			case 'github':
				return 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.111.793-.258.793-.577v-2.255c-3.337.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.492.997.108-.776.419-1.305.76-1.605-2.665-.306-5.466-1.333-5.466-5.932 0-1.311.469-2.382 1.236-3.221-.123-.306-.535-1.532.117-3.191 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.403 1.02.004 2.047.137 3.006.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.659.241 2.885.118 3.191.77.839 1.234 1.91 1.234 3.221 0 4.609-2.805 5.623-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z';
			default:
				return '';
		}
	}
</script>

<title>StillMilky Links</title>

<div class="container h-full mx-auto flex flex-col justify-center max-w-sm items-center p-6">
	<img src="./Milky.webp" alt="Milky" class="rounded-full w-36" />
	<div class="flex flex-col items-center gap-2 mb-6">
		<h1 class="text-2xl text-primary-500">@stillmilky</h1>
		<p>Business Inquiries: milky.irl@gmail.com</p>
	</div>
	<div class="flex flex-col w-full gap-2">
		{#each allLinks as { href, label }}
			<a {href} class="btn btn-lg variant-filled w-full" target="_blank"><strong>{label}</strong></a
			>
		{/each}
	</div>
	<footer class="mt-8 text-center text-sm">
		<div class="flex justify-center space-x-4 mb-2">
			{#each links as { href, label, icon }}
				<a {href} target="_blank" aria-label={label}>
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d={getIconPath(icon || '')} />
					</svg>
				</a>
			{/each}
		</div>
		<p>&copy; 2024 stillmilky. All rights reserved.</p>
		<p>
			Created by <a
				href="https://github.com/ShawnEdgell/linktree-clone"
				target="_blank"
				class="text-tertiary-500">Milky</a
			>
		</p>
	</footer>
</div>
