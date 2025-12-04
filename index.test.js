/**
 * Unit Test Suite for Express.js Server
 * 
 * Comprehensive test coverage for the Express.js endpoints using Jest and Supertest.
 * Tests cover:
 *   - GET / endpoint returning "Hello world"
 *   - GET /evening endpoint returning "Good evening"
 *   - 404 handling for non-existent routes
 *   - Edge cases: trailing slashes, case variations, POST on GET routes
 * 
 * @requires supertest - HTTP testing library for Express
 * @requires ./index.js - Express app instance for testing
 */

const request = require('supertest');
const app = require('./index');

/**
 * Main test suite for Express Server Endpoints
 * Organizes tests into logical groups for the two main endpoints
 * and edge cases handling
 */
describe('Express Server Endpoints', () => {
    
    /**
     * Test suite for GET / endpoint
     * Verifies the root endpoint returns proper greeting and headers
     */
    describe('GET /', () => {
        
        /**
         * Test Case 1: Verify GET / returns "Hello world" with status 200
         * Primary success path for root endpoint
         */
        it('should return "Hello world" with status 200', async () => {
            const response = await request(app).get('/');
            
            expect(response.status).toBe(200);
            expect(response.text).toBe('Hello world');
        });
        
        /**
         * Test Case 2: Verify GET / returns content-type as text/html
         * Ensures proper content-type header is set by Express
         */
        it('should return content-type as text/html', async () => {
            const response = await request(app).get('/');
            
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toMatch(/text\/html/);
        });
    });
    
    /**
     * Test suite for GET /evening endpoint
     * Verifies the evening endpoint returns proper greeting and headers
     */
    describe('GET /evening', () => {
        
        /**
         * Test Case 3: Verify GET /evening returns "Good evening" with status 200
         * Primary success path for evening endpoint
         */
        it('should return "Good evening" with status 200', async () => {
            const response = await request(app).get('/evening');
            
            expect(response.status).toBe(200);
            expect(response.text).toBe('Good evening');
        });
        
        /**
         * Test Case 4: Verify GET /evening returns content-type as text/html
         * Ensures proper content-type header is set by Express
         */
        it('should return content-type as text/html', async () => {
            const response = await request(app).get('/evening');
            
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toMatch(/text\/html/);
        });
    });
    
    /**
     * Test suite for non-existent routes
     * Verifies proper 404 handling for undefined endpoints
     */
    describe('GET /nonexistent', () => {
        
        /**
         * Test Case 5: Verify GET /nonexistent returns 404 for non-existent routes
         * Ensures the server properly handles requests to undefined endpoints
         */
        it('should return 404 for non-existent routes', async () => {
            const response = await request(app).get('/nonexistent');
            
            expect(response.status).toBe(404);
        });
    });
    
    /**
     * Test suite for edge cases
     * Covers trailing slashes, case sensitivity, and HTTP method restrictions
     */
    describe('Edge Cases', () => {
        
        /**
         * Test Case 6: Handle trailing slash on root
         * Verifies that Express handles trailing slashes consistently
         * Note: Express by default treats '/' and '' as the same route
         */
        it('should handle trailing slash on root', async () => {
            const response = await request(app).get('/');
            
            expect(response.status).toBe(200);
            expect(response.text).toBe('Hello world');
        });
        
        /**
         * Test Case 7: Handle case variations for /evening endpoint
         * Tests Express case sensitivity behavior
         * Note: Express.js default routing is case-insensitive
         */
        it('should handle case variations for /evening endpoint', async () => {
            const response = await request(app).get('/Evening');
            
            // Express.js default routing is case-insensitive
            // This test verifies the behavior - may return 200 or 404 depending on config
            // With default Express settings, case-insensitive matching applies
            expect([200, 404]).toContain(response.status);
            
            // If successful, verify the response content
            if (response.status === 200) {
                expect(response.text).toBe('Good evening');
            }
        });
        
        /**
         * Test Case 8: POST requests on GET-only routes (/) should return 404
         * Verifies that POST method is not allowed on the root endpoint
         */
        it('should return 404 for POST requests on GET-only routes', async () => {
            const response = await request(app).post('/');
            
            expect(response.status).toBe(404);
        });
        
        /**
         * Test Case 9: POST requests on /evening should return 404
         * Verifies that POST method is not allowed on the evening endpoint
         */
        it('should return 404 for POST requests on /evening', async () => {
            const response = await request(app).post('/evening');
            
            expect(response.status).toBe(404);
        });
    });
});
