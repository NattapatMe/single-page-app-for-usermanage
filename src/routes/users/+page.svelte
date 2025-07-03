<script>
    import { users } from '$lib';
    import { goto } from '$app/navigation';

    let name = '';
    let email = '';
    let phone = '';
    let showForm = false;

    function addUser() {
        const newUser = {
            id: Date.now(),
            name,
            email,
            phone
    };

    users.update(u => [newUser, ...u]);

    // Reset form
    name = '';
    email = '';
    phone = '';
    showForm = false;
  }

    /** @param {*} id */
    function confirmDelete(id) {
        if (confirm('Are you sure you want to delete this user?')) {
            users.update(u =>
            u.filter(
            /** @param {{ id: number }} user */ user => user.id !== id
            )
        );
        }
    }
    /** @param {*} id */
    function viewUser(id) {
        goto(`/users/${id}`);
    }

    function goBack() {
      goto('/');
    }
</script>

<div class="min-h-screen bg-gray-50 p-6">
    <h1 class="text-2xl font-bold mb-4">User List</h1>

    <button class="mb-4 bg-blue-500 text-white px-4 py-2 rounded" on:click={() => showForm = !showForm}>
        {showForm ? 'Cancel' : 'Add User'}
    </button>

    {#if showForm}
        <div class="mb-6 space-y-2 max-w-md">
            <input bind:value={name} placeholder="Name" class="w-full p-2 border rounded" />
            <input bind:value={email} placeholder="Email" class="w-full p-2 border rounded" />
            <input bind:value={phone} placeholder="Phone" class="w-full p-2 border rounded" />
            <button on:click={addUser} class="w-full bg-green-500 text-white p-2 rounded">Save User</button>
        </div>
    {/if}

    <ul class="space-y-2">
        {#each $users as user}
            <li class="flex justify-between items-center bg-white shadow p-3 rounded">
                <span>{user.name}</span>
                <div class="space-x-2">
                    <button on:click={() => viewUser(user.id)} class="bg-blue-400 text-white px-3 py-1 rounded">View</button>
                    <button on:click={() => confirmDelete(user.id)} class="bg-red-400 text-white px-3 py-1 rounded">Delete</button>
                </div>
            </li>
        {/each}
    </ul>

    <button on:click={goBack} class="mt-6 bg-gray-500 text-white px-4 py-2 rounded">
        Back
    </button>
</div>
