# Holberton ES6 Basic Project

This project demonstrates a basic setup for a Node.js application using ES6 features within a Docker container environment. The Docker setup is based on Ubuntu 20.04 and uses Node.js 12.x for compatibility with various ES6 features.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) must be installed on your machine.
- Basic familiarity with Docker and Node.js is recommended.

## Getting Started

### Step 1: Build the Docker Image

To build the Docker image for this project, navigate to the root directory of the project (where the `Dockerfile` is located) and run the following command:

```bash
docker build -t holberton_es6_basic .
```

### Step 2: Run the Docker Container

You can run the Docker container in interactive mode using this command:

docker run -it --rm -p 8080:8080 -v $(pwd):/usr/src/app holberton_es6_basic
Explanation of the Command:
-it: Runs the container in interactive mode with an attached terminal.
--rm: Automatically removes the container when it stops.
-p 8080:8080: Maps port 8080 of the container to port 8080 of the host machine.
-v $(pwd):/usr/src/app: Mounts the current directory to /usr/src/app inside the container for live code changes.
Step 2: Run the Docker Container
You can run the Docker container in interactive mode using this command:

docker run -it --rm -p 8080:8080 -v $(pwd):/usr/src/app holberton_es6_basic
Explanation of the Command:
-it: Runs the container in interactive mode with an attached terminal.
--rm: Automatically removes the container when it stops.
-p 8080:8080: Maps port 8080 of the container to port 8080 of the host machine.
-v $(pwd):/usr/src/app: Mounts the current directory to /usr/src/app inside the container for live code changes.

### Step 3: Access Your Application

If your application is configured to serve content on port 8080, you can access it by visiting:

http://localhost:8080
Alternative: Run in Detached Mode
If you want to run the container in the background (detached mode), use the following command:

docker run -d -p 8080:8080 holberton_es6_basic

Project Structure
The project includes the following files:

Dockerfile: Defines the Docker image configuration.
package.json: Contains the project dependencies and scripts.
babel.config.js: Babel configuration file for using ES6 syntax.
.eslintrc.js: ESLint configuration file for linting the code.

Available Scripts
Run the Project
To run the project in development mode using Babel, you can use the following command inside the container:

```bash
npm run dev <filename.js>
```

Linting the Code
To check the code with ESLint, run:

```bash
npm run lint
```

Running Tests
This project uses Jest for testing. To run the tests, execute:

```bash
npm run test
```

You can run both linting and tests with one command:

```bash
npm run full-test
```

Example Usage

Ensure that your JavaScript files (3-default-parameter.js and 3-main.js) are in the root directory. Then, inside the container, run:

```bash
npm run dev 3-main.js
```
