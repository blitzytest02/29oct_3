# Express.js Hello World Server

A simple Express.js server that demonstrates basic REST API endpoints, returning greeting messages.

## Description

This project is a lightweight Node.js application built with Express.js 5.2.1 that provides two simple GET endpoints:
- A root endpoint (`/`) that returns "Hello world"
- An evening endpoint (`/evening`) that returns "Good evening"

This serves as a foundational example of setting up an Express.js server with proper project structure, testing, and documentation.

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 18.x+ | Runtime environment |
| Express.js | ^5.2.1 | Web framework |
| Jest | ^30.2.0 | Testing framework |
| Supertest | ^7.1.4 | HTTP assertions |

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Starting the Server

To start the server in production mode:
```bash
npm start
```

The server will start on port 3000 by default. You can customize the port by setting the `PORT` environment variable:
```bash
PORT=8080 npm start
```

### Testing the Endpoints

Once the server is running, you can test the endpoints using curl or any HTTP client:

```bash
# Test the root endpoint
curl http://localhost:3000/

# Test the evening endpoint
curl http://localhost:3000/evening
```

## API Reference

### GET /

Returns a "Hello world" greeting message.

**Request:**
```
GET /
```

**Response:**
- Status: `200 OK`
- Content-Type: `text/html; charset=utf-8`
- Body: `Hello world`

**Example:**
```bash
curl http://localhost:3000/
# Output: Hello world
```

---

### GET /evening

Returns a "Good evening" greeting message.

**Request:**
```
GET /evening
```

**Response:**
- Status: `200 OK`
- Content-Type: `text/html; charset=utf-8`
- Body: `Good evening`

**Example:**
```bash
curl http://localhost:3000/evening
# Output: Good evening
```

## Testing

This project uses Jest and Supertest for unit testing. The test suite includes 9 comprehensive test cases covering:

- Response status codes
- Response content validation
- Content-type headers
- 404 handling for non-existent routes
- Edge cases (trailing slashes, case variations)
- HTTP method validation

### Running Tests

To run the test suite:
```bash
npm test
```

### Expected Test Output

```
PASS ./index.test.js
  Express Server Endpoints
    GET /
      ✓ should return "Hello world" with status 200
      ✓ should return content-type as text/html
    GET /evening
      ✓ should return "Good evening" with status 200
      ✓ should return content-type as text/html
    GET /nonexistent
      ✓ should return 404 for non-existent routes
    Edge Cases
      ✓ should handle trailing slash on root
      ✓ should handle case variations for /evening endpoint
      ✓ should return 404 for POST requests on GET-only routes
      ✓ should return 404 for POST requests on /evening

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
```

## Project Structure

```
project-root/
├── index.js           # Main Express server entry point
├── index.test.js      # Unit test suite
├── package.json       # Project configuration and dependencies
├── package-lock.json  # Dependency lock file
├── README.md          # Project documentation (this file)
└── node_modules/      # Installed dependencies
```

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| start | `npm start` | Starts the Express server |
| test | `npm test` | Runs the Jest test suite |

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| PORT | 3000 | The port number the server listens on |

## License

ISC
