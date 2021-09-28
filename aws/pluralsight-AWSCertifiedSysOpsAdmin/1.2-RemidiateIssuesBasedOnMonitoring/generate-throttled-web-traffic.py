#!/bin/python3
import random
import urllib.request
import time

URLS=["http://localhost/icons/apache_pb2.gif", "http://localhost", "http://localhost/404"]


def main():
    while True:
        try:
            h1 = urllib.request.urlopen(random.choice(URLS))
            print(h1.status)
        except Exception as e:
            print(e)
        finally:
            sleep_time = random.choice([x/10 for x in range(0,10)])
            print(f"sleep: {sleep_time}")
            time.sleep(sleep_time)


if __name__ == '__main__':
    main()
