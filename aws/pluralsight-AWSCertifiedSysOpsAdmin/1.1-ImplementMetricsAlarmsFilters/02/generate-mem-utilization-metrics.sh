#!/bin/bash
echo "Start time: $(date)"
stress-ng --vm 1 --vm-bytes 250M --vm-keep -t 180s
echo "End time: $(date)"
