import {writable} from "svelte/store";

type Location = {name: string};

const createCities = () => {
	const {subscribe, update} = writable<Location[]>([{name: "Stockholm"}, {name: "Amsterdam"}, {name: "Rio De Janeiro"}]);

	return {
		subscribe,
		add: (name: string) => update((cities) => [...cities, {name}]),
		remove: (name: string) => update((cities) => cities.filter((city) => city.name !== name)),
	}
}

export const cities = createCities();
