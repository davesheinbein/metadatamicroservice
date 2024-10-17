// Web framework for Node.js
const express = require('express'); 
// Middleware for enabling CORS
const cors = require('cors'); 
// Middleware for handling file uploads
const multer = require('multer'); 
// Module for working with file and directory paths
const path = require('path'); 
// Loads environment variables from a .env file
require('dotenv').config(); 

// Create an Express application
const app = express(); 

// Configure multer to use a temporary storage directory for uploaded files
const upload = multer({ dest: 'uploads/' }); 

// Use CORS middleware to allow cross-origin requests
app.use(cors()); 

// Serve static files from the 'public' directory
app.use('/public', express.static(process.cwd() + '/public')); 

// Define a route for the home page
app.get('/', function (req, res) {
    // Send the index.html file as a response
    res.sendFile(process.cwd() + '/views/index.html'); 
});

// API endpoint to analyze the uploaded file
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    // Access the uploaded file from the request
    const file = req.file; 
    // Check if a file was uploaded
    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' }); // Return an error if no file was uploaded
    }

    // Prepare file metadata for the response
    const fileMetadata = {
        // Original file name
        name: file.originalname, 
        // MIME type of the file
        type: file.mimetype, 
        // Size of the file in bytes
        size: file.size 
    };

    // Respond with the file metadata as JSON
    res.json(fileMetadata); 
});

// Set the port for the server to listen on, defaulting to 3000 if not specified in environment variables
const port = process.env.PORT || 3000; 

// Start the server and log the port number to the console
app.listen(port, function () {
    console.log('Your app is listening on port ' + port); 
});
