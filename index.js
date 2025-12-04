/**
 * Express.js Server Implementation
 * 
 * Main entry point for the Node.js application.
 * Defines two GET endpoints:
 *   - GET '/' returns 'Hello world'
 *   - GET '/evening' returns 'Good evening'
 * 
 * The app is exported for testing purposes and the server
 * only starts when the file is run directly.
 */

const express = require('express');

// Initialize Express application
const app = express();

// Configure port from environment variable with fallback to 3000
const PORT = process.env.PORT || 3000;

/**
 * GET / endpoint
 * Returns a simple "Hello world" greeting
 * 
 * @route GET /
 * @returns {string} 200 - "Hello world"
 */
app.get('/', (req, res) => {
    res.send('Hello world');
});

/**
 * GET /evening endpoint
 * Returns a "Good evening" greeting
 * 
 * @route GET /evening
 * @returns {string} 200 - "Good evening"
 */
app.get('/evening', (req, res) => {
    res.send('Good evening');
});

/**
 * Conditional server startup
 * Server only starts when this file is run directly (not when imported for testing)
 * This allows the app to be imported and tested without starting the server
 */
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export the Express app for testing purposes
module.exports = app;
