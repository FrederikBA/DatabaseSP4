from .redis_client import get_redis_client, get_pubsub_client

def subscribe(channel):
    pubsub = get_pubsub_client()
    pubsub.subscribe(channel)
    return pubsub

def publish(channel, message):
    r = get_redis_client()
    r.publish(channel, message)

