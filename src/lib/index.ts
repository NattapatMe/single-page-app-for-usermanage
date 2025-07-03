import { writable } from 'svelte/store';

// --- Auth Store ---
const storedAuth = localStorage.getItem('auth');
const initialAuth = storedAuth ? JSON.parse(storedAuth) : { loggedIn: false };
export const auth = writable(initialAuth);
auth.subscribe(value => {
  localStorage.setItem('auth', JSON.stringify(value));
});

interface User{
  email: string;
  name: string;
  phone: string;
  id: number;
}


// --- User Store ---
const storedUsers = localStorage.getItem('users');
const initialUsers: User[] = storedUsers ? JSON.parse(storedUsers) : [];

export const users = writable(initialUsers);
users.subscribe(value => {
  localStorage.setItem('users', JSON.stringify(value));
});