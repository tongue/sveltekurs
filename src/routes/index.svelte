<script lang="ts">
	import { weather } from '$lib/weather';
	import WeatherCard from './_components/WeatherCard.svelte';
	import CloseButton from '$lib/CloseButton.svelte';
</script>

<ol>
	{#each $weather as { id, temperature }}
		<li>
			<WeatherCard {id} {temperature} />
			<form>
				<CloseButton />
			</form>
		</li>
	{/each}
</ol>

<style>
	ol,
	li {
		all: unset;
	}

	ol {
		display: grid;
		grid-template-columns: repeat(auto-fill, 380px);
		gap: var(--gap);
		justify-content: center;
	}

	li {
		position: relative;
	}

	form {
		position: absolute;
		top: 0.625rem;
		right: 0.625rem;
	}
</style>
