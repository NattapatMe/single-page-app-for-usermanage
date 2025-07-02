<script>
    let name = '';
    let email = '';
    let phone = '';
    let showForm = false;
</script>

<div class="min-h-screen bg-gray-50 p-6">
    <h1 class="text-2xl font-bold mb-4">User List</h1>

    <button class="mb-4 bg-blue-500 text-white px-4 py-2 rounded" on:click={() => showForm = !showForm}>
        {showForm ? 'Cancel' : 'Add User'}
    </button>

    <button class="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
        Add User
    </button>

    {#if showForm}
        <div class="mb-6 space-y-2 max-w-md">
            <input placeholder="Name" class="w-full p-2 border rounded" />
            <input placeholder="Email" class="w-full p-2 border rounded" />
            <input placeholder="Phone" class="w-full p-2 border rounded" />
            <button class="w-full bg-green-500 text-white p-2 rounded">Save User</button>
        </div>
    {/if}

  <!-- Placeholder for list -->
    <ul class="space-y-2">
        <li class="flex justify-between items-center bg-white shadow p-3 rounded">
        <span>User Name</span>
        <div class="space-x-2">
            <button class="bg-blue-400 text-white px-3 py-1 rounded">View</button>
            <button class="bg-red-400 text-white px-3 py-1 rounded">Delete</button>
        </div>
        </li>
    </ul>

    <button class="mt-6 bg-gray-500 text-white px-4 py-2 rounded">
        Back
    </button>
</div>
