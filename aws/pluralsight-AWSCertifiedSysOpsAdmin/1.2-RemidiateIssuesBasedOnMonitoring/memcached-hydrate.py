#!/usr/bin/python3

import libmc
import random
import string

LETTERS = string.ascii_letters
KEY_PREFIX = random.choice(LETTERS)+"_"

mc = libmc.Client(['my-memcached.hezfwu.cfg.use1.cache.amazonaws.com:11211'])

for i in range(1_000_000):
    value = ''.join(random.choice(LETTERS) for i in range(1000))
    key = KEY_PREFIX + str(i)
    print(f"Adding {key}: {value}")
    mc.set(key, value)

