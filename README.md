# File Metadata Microservice

## Overview
This project is a simple API that allows users to upload a file and receive metadata about the file, such as its name, type, and size.

## Dependencies
- `express`: A web framework for Node.js
- `cors`: A middleware for enabling CORS (Cross-Origin Resource Sharing)
- `multer`: A middleware for handling multipart/form-data, which is primarily used for uploading files
- `path`: A module for working with file and directory paths
- `dotenv`: A module to load environment variables from a `.env` file

## Usage
1. Set up your environment variables in a `.env` file if necessary.
2. Install the required dependencies by running `npm install`.
3. Start the server using `npm run start`.
4. Access the API at `http://localhost:3000` and use the `/api/fileanalyse` endpoint to upload a file.
