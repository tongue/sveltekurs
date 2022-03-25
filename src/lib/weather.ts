import {derived} from "svelte/store";
import {cities} from "./cities";

const getWeather = (name: string) => {
	if (name === "Stockholm") {
		return -6;
	}
	if (name === "Amsterdam") {
		return 16;
	}
	if (name === "Rio") {
		return 26;
	}
	return 0;
}

export const weather = derived(cities, ($cities, set) => {
	const data = $cities.map((city) => ({id: city.name, temperature: getWeather(city.name)}));
	set(data);
}, []); 
