<script lang="ts">
    import { users } from '$lib';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { get } from 'svelte/store';

    // Get the user ID from the URL
    const id = Number($page.params.id);

    // Find the original user with type hint on parameter
    const userList = get(users);
    const userData = userList.find(u => u.id === id
    );

    // Handle if not found
    if (!userData) {
        alert('User not found');
        goto('/login');
        throw new Error('redirect'); 
    }

    let {name, email, phone} = userData;

    // let name = userData.name;
    // let email = userData.email;
    // let phone = userData.phone;
    let isEditing = false;

    function save() {
        if(!name.trim() || !email.trim() || !phone.trim()){
            alert('Please fill in every field');
            return;
        }

        users.update(list =>
            list.map(
            user => user.id === id ? { ...user, name, email, phone } : user
            )
        );
        isEditing = false;
    }

    function cancel() {
        name = userData!.name;
        email = userData!.email;
        phone = userData!.phone;
        isEditing = false;
    }

    function goBack() {
        goto('/users');
    }
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

    {#if isEditing}
        <div class="space-x-2">
            <button class="bg-green-500 text-white px-4 py-2 rounded" on:click={save}>Save</button>
            <button class="bg-gray-400 text-white px-4 py-2 rounded" on:click={cancel}>Cancel</button>
        </div>
    {:else}
        <button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={() => isEditing = true}>Edit</button>
    {/if}

    <button class="mt-4 bg-gray-500 text-white px-4 py-2 rounded" on:click={goBack}>Back</button>
    </div>
</div>
</div>