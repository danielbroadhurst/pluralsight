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
            time.sleep(1)


if __name__ == '__main__':
    main()
