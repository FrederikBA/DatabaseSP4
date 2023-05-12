import redis

def get_redis_client():
    return redis.Redis(host='localhost', port=6379, decode_responses=True)


def get_pubsub_client():
    return get_redis_client().pubsub()
