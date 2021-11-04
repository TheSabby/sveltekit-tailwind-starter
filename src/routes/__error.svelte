<script context="module">
	export function load({ error, status }) {
		let title;
		switch(status) {
			case 404:
				title = '404: Page not found'
				break;
			default:
				title = 'An error occurred'
				break;
		}

		return {
			props: {
				title,
				status
			}
		};
	}
</script>

<script>
	export let title;
	/** @type { number } */
	export let status;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="h-[calc(100vh-185px)] w-screen bg-gray-100 flex items-center">
	<div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
		<div class="max-w-lg">
			<div class="text-5xl font-dark font-bold">{status || 'Error'}</div>
			{#if status === 404}
			<p class="text-2xl md:text-3xl font-light leading-normal">Sorry we couldn't find this page.</p>
			{/if}
		</div>
	</div>
</div>
