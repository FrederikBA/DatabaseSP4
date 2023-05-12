<h1 align="center">Client/Server with FastAPI and React</h1>
<p>
Here we have FastAPI server that demonstrates Configuration 1 (Redis with Retention Policy) and Configuration 5 (Redis Publish-Subscribe Pattern), as well as a React client that communicates with the server. The One.js component displays user data from Redis with a 24-hour retention policy, while the Two.js component allows you to subscribe and publish messages to Redis channels using the Publish-Subscribe pattern.
</p>

## Dependencies
```sh
pip install fastapi
```

```sh
pip install uvicorn
```

```sh
pip install pydantic
```

## Usage

### Server:
1. Navigate to /server
2. Run the server: `uvicorn main:app --reload`
3. Server URL: `http://127.0.0.1:8000`
4. Swagger API Documentation: `http://127.0.0.1:8000/docs`

### Client:
1. Navigate to /client
2. Install dependencies: `npm install`
3. Run the client: `npm start`
