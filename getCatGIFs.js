// This if for Practical Task 2
// Create an empty variable to store a result
let catGIF = [];

// Create an async function
const getCatGIFs = async () => {
  try {
    // Fetch cat GIFs from the API
    const response = await fetch(
      "http://thecatapi.com/api/images/get?format=src&type=gif"
    );
    if (response.ok) { // returns true if HTTP request is ok (HTTP status code 200-299)
      // Extract the image URL from the response
      catGIF = response.url;
      console.log(catGIF);
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    // Handle any errors that occur during fetching
    console.error(error);
  }
};

getCatGIFs();
