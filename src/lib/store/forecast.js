import {writable} from "svelte/store"

export const weather = writable([])
export const cities = writable([])
export const position = writable([])
export const detail = writable({})
export const getCoords = writable({})