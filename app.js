
/* 
    In this JavaScript file, we've used the fetch function to make an API request to NASA's API endpoint, 
    then we've extracted the URL of the photo from the JSON data returned by the API. 
    Finally, we've updated the src attribute of the img element to display the photo.
*/
const apiKey = 'api_key=vmq7SyshdUvHyl9B2XsUj0C3N1fNSH34c1mvG4fu';
const apiUrl = `https://api.nasa.gov/planetary/apod?${apiKey}`; // concattonate the api url with the key

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data); // output the data recieved to the console

        // get the image url
        const imageUrl = data.url;
        const imageElement = document.getElementById('nasa-image');
        if (imageElement !== null) { // if you're not on the image page, it will be trying to set a null element and it will break
            imageElement.src = imageUrl;
        }

        // get the title
        const title = data.title;
        const titleElement = document.getElementById('title');
        if (titleElement !== null) {
            titleElement.innerText = title;
        }

        // get the description
        const description = data.explanation;
        const descriptionElement = document.getElementById('description');
        if (titleElement !== null) {
            descriptionElement.innerText = description;
        }
    })
    .catch(error => console.error(error));
