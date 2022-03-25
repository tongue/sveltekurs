<script lang="ts">
	export let id;
	export let temperature: number;
</script>

<article
	class:hot={temperature >= 20}
	class:neutral={temperature > 0 && temperature < 20}
	class:cold={temperature <= 0}
>
	<h2>{id}</h2>
	<table>
		<tr>
			<th>Temperature</th>
			<td>{temperature}</td>
		</tr>
	</table>
</article>

<style>
	article,
	h2 {
		all: unset;
	}

	article {
		aspect-ratio: 67/24;
		display: grid;
		background-color: hotpink;
		border-radius: 2px;
	}

	.hot {
		background-color: var(--color-hot);
	}
	.neutral {
		background-color: var(--color-neutral);
	}
	.cold {
		background-color: var(--color-cold);
	}
</style>
