<script context="module">
	import { generateClient } from '$utils/apollo';

	export function load({ fetch }) {
		const client = generateClient(fetch);

		return {
			stuff: {
				client,
			},
		};
	}
</script>

<script>
	import '$styles/main.css';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<Header />

<div class="bg-gray-50 relative">
	<slot />
</div>

<Footer />
