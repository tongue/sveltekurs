<slot />

<style>
	:root {
		--outer-gap: 1rem;
		--gap: 1.25rem;

		--color-base-pale: #eeeeee;
		--color-base-black: #000000;
		--color-base-white: #ffffff;
		--color-brand-yellow: #fac710;
		--color-brand-red: #f24726;
		--color-brand-blue: #2d9bf0;
		--color-brand-blue-sky: #75d5ee;
		--color-brand-green: #8fd14f;

		--color-foreground: var(--color-base-black);
		--color-background: var(--color-base-pale);
		--color-negative: var(--color-base-white);
		--color-highlight: var(--color-brand-blue-sky);
		--color-alert: var(--color-brand-red);
		--color-cold: var(--color-brand-blue);
		--color-neutral: var(--color-brand-yellow);
		--color-hot: var(--color-brand-red);
	}

	@media (min-width: 51.5em) {
		:root {
			--gap: 1.875rem;
		}
	}

	:global(body) {
		display: grid;
		grid-template-columns:
			minmax(var(--outer-gap), auto) minmax(
				calc(20rem - (var(--outer-gap) * 2)),
				1280px
			)
			minmax(var(--outer-gap), auto);
	}

	:global(#svelte) {
		grid-column-start: 2;
		grid-column-end: 3;
	}

	:global(.fullWidth) {
		grid-column-start: 1;
		grid-column-end: 4;
	}

	:global(.visually-hidden) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
</style>
