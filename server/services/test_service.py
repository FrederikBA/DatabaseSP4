from .redis_client import get_redis_client

def get_data():
    r = get_redis_client()
    r.set('user_data', 'This is user data', ex=86400)  # Set a 24-hour retention policy
    return {"Data": r.get('user_data')}
