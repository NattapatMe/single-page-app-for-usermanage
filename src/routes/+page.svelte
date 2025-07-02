<script>
    import { auth } from '$lib/index';
    import { goto } from '$app/navigation';

    let username = '';
    let password = '';

    $: isLoggedIn = $auth.loggedIn;

    function login() {
        if (username === 'admin' && password === 'password') {
            auth.set({ loggedIn: true });
        } else {
            alert('Invalid credentials');
        }
    }

    function logout() {
        auth.set({ loggedIn: false });
    }

    function goToUsers() {
        goto('/users');
    }
</script>

<div class="flex flex-col items-center justify-start pt-10">
    <h1 class="text-2xl font-bold mb-6">Please Login</h1>

    <form class="space-y-4">
        <input bind:value={username} placeholder="Username" class="w-full p-2 border rounded" />
        <input bind:value={password} type="password" placeholder="Password" class="w-full p-2 border rounded" />
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">Login</button>
    </form>
</div>