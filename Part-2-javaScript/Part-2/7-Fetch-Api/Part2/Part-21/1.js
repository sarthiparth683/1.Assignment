
// Pagination:
// Pagination involves dividing a large dataset into smaller, discrete pages. It allows users to navigate through the data gradually, typically through page numbers, previous/next buttons, or other navigation controls.

// Fetching with API (Brief Recap):
// Fetching with API involves retrieving data from a server using the Fetch API in JavaScript. It's the foundation for dynamic loading of data from external sources.
//-----------------------------------------------------------------------------------------
// Assuming data is fetched from the API
const pageSize = 10;
let currentPage = 1;
function fetchPage(page) {
  fetch(`https://api.example.com/products?page=${page}&pageSize=${pageSize}`)
    .then(response => response.json())
    .then(data => {
      console.log(`Page ${page}:`, data);
    })
    .catch(error => console.error('Error:', error));
};
// Fetch the first page
fetchPage(currentPage);
// Simulate navigating to the next page
currentPage++;
fetchPage(currentPage);
//----------------------------------------------------------------------------------------------
// Code Implementation | Examples
// Rendering buttons from an Array [Pagination task-1]
// Problem:

// You’ve got the following data:
let primary_buttons = [
  { text: '1', 'data-id': 1 },
  { text: '2', 'data-id': 2 },
  { text: '3', 'data-id': 3 },
  { text: '4', 'data-id': 4 },
  { text: '5', 'data-id': 5 },
  { text: '6', 'data-id': 6 },
];
//----------------------------------------------------------------------------------------