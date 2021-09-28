#!/bin/bash
echo "Start time: $(date)"
stress-ng -c 2 -t 180s
echo "End time: $(date)"
