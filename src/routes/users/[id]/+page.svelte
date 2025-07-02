<div class="bg-gray-50">
<div class="min-h-screen p-6 max-w-md">
    <h1 class="text-2xl font-bold mb-4">User Detail</h1>

    <div class="space-y-3">
        <div>
            <label for="name" class="block font-semibold">Name:</label>
            <input id="name" class="w-full p-2 border rounded" value="John Doe" readonly />
        </div>

        <div>
            <label for="email" class="block font-semibold">Email:</label>
            <input id="email" class="w-full p-2 border rounded" value="john@example.com" readonly />
        </div>

        <div>
            <label for="phone" class="block font-semibold">Phone:</label>
            <input id="phone" class="w-full p-2 border rounded" value="1234567890" readonly />
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