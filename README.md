### 2. **Submit Jokes Microservice (Nest.js)**

**Filename**: `README.md`

# Submit Jokes Microservice

This microservice allows users to submit jokes via a web interface. The jokes are stored in a MongoDB database and can be accessed by other microservices.

## Technologies Used

- Nest.js
- MongoDB
- TypeScript

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB

## Installation

1. Clone the repository:

  ```bash
  git clone <repository_url>
  cd jokes-submit-microservice
  ```
2. Install dependencies:

  ```bash
  npm install
  ```

3. Set up environment variables:

Create a .env file in the root directory with the following variables:

  ```bash
  PORT=3001
  FRONTEND_APP_URL=http://localhost:3000
  BASIC_JOKE_TYPES=Knock-Knock,One-Liner,Dad-Joke
  MONGODB_URI=mongodb+srv://kalum:7U3DjJP1SWJoZfPV@dev.wcm4dwa.mongodb.net/jokes-dev?retryWrites=true&w=majority&appName=dev
  ```
## Running the Application

Start the Nest.js application:

  ```bash
  npm run start
  ```
The microservice will run at http://localhost:3001.

## API Endpoints


- POST /jokes: Submit a new joke.
- GET /jokes/random: Fetch a random joke.
- DELETE /jokes/:id: Delete a joke by id.
- PUT /jokes/:id: Update a joke by id.
- GET /jokes/types: Fetch all joke types from Deliver Joke Microservice.

## Testing

To run tests:

  ```bash
  npm run test
  ```

## Deployment

Deploy the microservice on your preferred cloud service or container platform.
