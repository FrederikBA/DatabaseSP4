import redis


def get_data():
    users = []
    # Establish a connection to Redis
    r = redis.Redis(host='localhost', port=6379,
                    db=0)

    for x in range(1, 4):
        users.append(r.hgetall(f'user:{x}'))

    return users
