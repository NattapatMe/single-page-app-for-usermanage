import { writable } from 'svelte/store';

// --- Auth Store ---
const storedAuth = localStorage.getItem('auth');
const initialAuth = storedAuth ? JSON.parse(storedAuth) : { loggedIn: false };
export const auth = writable(initialAuth);
auth.subscribe(value => {
  localStorage.setItem('auth', JSON.stringify(value));
});