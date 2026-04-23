// Write your code here!

// Create Function to Display Posts
function displayPosts(posts) {
//Target the unorder list by its ID
const postList = document.getElementById('post-list');

//loop through the posts list 
posts.forEach(post => {
    //Create elements
    const l1= document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    //Add the title and body as textContent 
    h1.textContent = post.title;
    p.textContent = post.body;
    
    //Append the h1 and p to the l1
    l1.appendChild(h1);
    l1.appendChild(p);

    //Append l1 to the ul
    postList.appendChild(l1);
});
}

// Refactor with Async/Await:Create function to house fetch 
async function fetchAndDisplayPosts() {
    try {
        //Apply await to fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        //Ensure the response is successful proceeding 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        //Parse the JSON data 
        const posts = await response.json();

        //Call displayPosts () function after fetch
        displayPosts(posts);
    } catch (error) {
        //Error handling for developer tools 
        console.error('Error fetching posts:', error);
    }
}
//Execute the asynchronous function
fetchAndDisplayPosts();