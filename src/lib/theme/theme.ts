import { writable } from "svelte/store";

type ThemeType = {
    [key: string]: {
        background: string;
        color: string;
    };
};

const initialTheme: ThemeType = {};

export const currentTheme = writable(initialTheme);