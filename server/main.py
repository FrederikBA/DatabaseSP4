from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi import BackgroundTasks
import asyncio


from services import test_service
from models import dtos
from services import pubsub_service
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return test_service.get_data()

class PublishRequest(BaseModel):
    message: str


@app.get("/listen/{channel}")
def listen(channel: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(listen_to_channel, channel)
    return {"message": f"Listening to {channel}"}

async def listen_to_channel(channel: str):
    pubsub = pubsub_service.subscribe(channel)
    
    while True:
        message = pubsub.get_message()
        if message and message["type"] == "message":
            print(f"Received message: {message['data']} from channel {message['channel']}")
        await asyncio.sleep(1)

@app.post("/subscribe/{channel}")
def subscribe(channel: str):
    pubsub = pubsub_service.subscribe(channel)
    return {"message": f"Subscribed to {channel}"}

@app.post("/publish/{channel}")
def publish(channel: str, request: PublishRequest):
    pubsub_service.publish(channel, request.message)
    return {"message": f"Published message to {channel}"}

