<script>
    import { users } from '$lib/index';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { get } from 'svelte/store';

    // Get the user ID from the URL
    const id = Number($page.params.id);

    // Find the original user with type hint on parameter
    const userList = get(users);
    const userData = userList.find(
        /** @param {{ id: number }} u */ u => u.id === id
    );

    let name = '';
    let email = '';
    let phone = '';
    let isEditing = false;
</script>

<div class="bg-gray-50">
<div class="min-h-screen p-6 max-w-md">
    <h1 class="text-2xl font-bold mb-4">User Detail</h1>

    <div class="space-y-3">
        <div>
            <label for="name" class="block font-semibold">Name:</label>
            <input id="name" class="w-full p-2 border rounded" bind:value={name} readonly={!isEditing} />
        </div>

        <div>
            <label for="email" class="block font-semibold">Email:</label>
            <input id="email" class="w-full p-2 border rounded" bind:value={email} readonly={!isEditing} />
        </div>

        <div>
            <label for="phone" class="block font-semibold">Phone:</label>
            <input id="phone" class="w-full p-2 border rounded" bind:value={phone} readonly={!isEditing} />
        </div>

        <button class="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
        <div class="space-x-2 hidden">
            <button class="bg-green-500 text-white px-4 py-2 rounded">Save</button>
            <button class="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
        </div>

        <button class="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Back</button>
    </div>
</div>
</div>