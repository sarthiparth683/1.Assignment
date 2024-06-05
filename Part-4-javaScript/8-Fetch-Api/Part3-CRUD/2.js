//---------------------------------------------------------------------------------
// Introduction to Drag and Drop in GitHub

// expand_less
// The lecture begins by discussing the ability to manage files and folders in a GitHub repository through drag and drop. This includes creating files and folders and uploading content directly into GitHub's interface.

// Example Dragging files directly into the GitHub repository interface allows for quick updates and file management without needing to use the command line.
//---------------------------------------------------------------------------------
// Creating a Repository Structure

// expand_less
// The instructor outlines the process of structuring a repository on GitHub, including the creation of folders and files within the GitHub interface.

// Example

// - Project Folder/
//   - index.html
//   - styles/
//     - main.css
//   - scripts/
//     - app.js
//---------------------------------------------------------------------------------
// Understanding JSON Server

// expand_less
// The lecture covers the JSON Server package as a tool to set up a fake REST API with JSON data. It's used for front-end development to mimic a server for testing and development purposes.

// Example

// npm install -g json-server
// json-server --watch db.json
// This command installs JSON Server globally and runs it with a db.json file, creating a full fake REST API.
//---------------------------------------------------------------------------------
// CRUD Operations on JSON Server

// expand_less
// CRUCritical operations such as Create, Read, Update, and Delete (CRUD) are demonstrated using JSON Server. The students are shown how to manipulate data using different HTTP methods like GET, POST, PATCH, and DELETE.

// Example
// Create (POST)
fetch('http://localhost:3000/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({title: 'json-server', author: 'typicode'})
})

// Read (GET)
fetch('http://localhost:3000/posts')

// Update (PATCH)
fetch('http://localhost:3000/posts/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({title: 'updated title'})
})

// Delete (DELETE)
fetch('http://localhost:3000/posts/1', { method: 'DELETE' })

//---------------------------------------------------------------------------------
// Deploying Front-end and Back-end Separately

// expand_less
// The instructor explains the benefit and process of deploying the front-end and back-end parts of an application separately for better management and scalability.

// Example There isn't a specific code example provided for this concept, but the approach involves using tools like GitHub for the front-end and services like Heroku or Netlify for the back-end.
//---------------------------------------------------------------------------------
// Importance of README Files

// expand_less
// The importance of README files in GitHub repositories is discussed. A README file acts as the first point of documentation for anyone who encounters the repository, providing essential information about the project.

// Example A README might include project instructions, installation steps, and usage examples:

// # Project Title

// ## Description

// Brief description of the project.

// ## Installation

// Instructions for installing the project.

// ## Usage

// Examples of how to use the project.
// This snippet provides a basic structure for a README file.
//---------------------------------------------------------------------------------
// Batch Requests and PUT vs PATCH

// expand_less
// Finally, the instructor touches on the concept of batch requests in APIs and differentiates between the PUT and PATCH methods in the context of updating data on a server.

// Example PUT is used to update an entire resource, whereas PATCH is used for partial updates. For example, if you have an object: { name: 'John', email: 'john@example.com' } and send a PATCH request with { email: 'newemail@example.com' }, only the email will be updated without affecting other fields.
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
