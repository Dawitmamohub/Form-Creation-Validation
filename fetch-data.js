// fetch-data.js

// Wait for the DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
    // Define the asynchronous function to fetch and display user data
    async function fetchUserData() {
        // Step 1: Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        // Step 2: Select the data container element
        const dataContainer = document.getElementById('api-data');
        
        try {
            // Step 3: Fetch data from the API
            const response = await fetch(apiUrl);
            
            // Check if the request was successful
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            // Parse the JSON response
            const users = await response.json();
            
            // Step 4: Clear the loading message
            dataContainer.innerHTML = '';
            
            // Step 5: Create an unordered list element
            const userList = document.createElement('ul');
            
            // Process each user and add to the list
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
            
            // Add the user list to the container
            dataContainer.appendChild(userList);
            
        } catch (error) {
            // Step 6: Handle any errors that occur during fetching
            console.error('Error fetching user data:', error);
            dataContainer.innerHTML = '';
            dataContainer.textContent = 'Failed to load user data.';
        }
    }

    // Execute the fetch function
    fetchUserData();
});