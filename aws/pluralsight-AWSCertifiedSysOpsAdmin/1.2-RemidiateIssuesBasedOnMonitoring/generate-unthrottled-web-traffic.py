#!/bin/python3
import random
import urllib.request

#URLS=["http://my-alb-1408203040.us-east-1.elb.amazonaws.com/icons/apache_pb2.gif"]
URLS=["http://my-alb-1408203040.us-east-1.elb.amazonaws.com/error500", "http://my-alb-1408203040.us-east-1.elb.amazonaws.com/icons/apache_pb2.gif", "http://my-alb-1408203040.us-east-1.elb.amazonaws.com/404"]


def main():
    while True:
        try:
            h1 = urllib.request.urlopen(random.choice(URLS))
            print(h1.status)
        except Exception as e:
            print(e)


if __name__ == '__main__':
    main()
