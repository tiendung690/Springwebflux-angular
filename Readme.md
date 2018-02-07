# Build Reactive Rest APIs with Spring WebFlux , Reactive MongoDB and Angular5

## Requirements

1. Java - 1.8.x

2. Maven - 3.x.x

3. MongoDB - 3.x.x

## Steps to Setup

mvn spring-boot:run

The server will start at <http://localhost:8080>.

![Alt text](https://drive.google.com/file/d/1fhpyRNy9YRtcJh-viTH0M0oMM9BQlz-C/view)

## Exploring the Rest APIs

The application defines following REST APIs

```
1. GET /tweets - Get All Tweets

2. POST /tweets - Create a new Tweet

3. GET /tweets/{id} - Retrieve a Tweet by Id

3. PUT /tweets/{id} - Update a Tweet

4. DELETE /tweets/{id} - Delete a Tweet

4. GET /stream/tweets - Stream tweets to a browser as Server-Sent Events
```

## Running integration tests

The project also contains integration tests for all the Rest APIs.
For running the integration tests, go to the root directory of the project and type `mvn test` in your terminal.