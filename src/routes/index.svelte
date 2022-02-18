<script lang="ts">
	import { weather } from '$lib/weather';
</script>

<ol>
	{#each $weather as { id, temperature }}
		<li>
			<article>
				<h2>{id}</h2>
				<table>
					<tr>
						<th>Temperature</th>
						<td>{temperature}</td>
					</tr>
				</table>
			</article>
			<form>
				<button>Close</button>
			</form>
		</li>
	{/each}
</ol>

<style>
	div {
		color: red;
	}
</style>
