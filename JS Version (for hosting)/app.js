
/* 
    In this JavaScript file, we've used the fetch function to make an API request to NASA's API endpoint, 
    then we've extracted the URL of the photo from the JSON data returned by the API. 
    Finally, we've updated the src attribute of the img element to display the photo.
*/
/* 
    This code will make a request to the NASA API every time the page is loaded in a web browser. 
    The browser sends an HTTP GET request to the API endpoint to retrieve the JSON data, which is then parsed and displayed on the page.

    There is no built-in mechanism in the code to refresh the data periodically or at certain intervals. 
    If you want to refresh the data automatically, you can use JavaScript's setInterval() function to make periodic requests to the API endpoint 
    and update the page with new data. 
    
    Doing this will still refresh the data every time the page is loaded, but it will also refresh the data at a declared interval in the event someone keeps the page open

    There is a way to code it such that it makes an api request every 24 hours, regardless of whether the page was ever loaded,
    cache the data, and use the cached data whenever someone loads the page, so that it doesnt need to make a request every time someone loads the page.
    This method would make the msot sense if I had regular daily traffic to my site and didnt want to make a bunch of api requests every day.
    It doesnt really make sense for this project though, because I could go months without anyone accessing the site, so i wouldnt need it to keep making api requests during that time
*/
const apiKey = 'api_key=vmq7SyshdUvHyl9B2XsUj0C3N1fNSH34c1mvG4fu';
const apiUrl = `https://api.nasa.gov/planetary/apod?${apiKey}`; // concattonate the api url with my key

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
