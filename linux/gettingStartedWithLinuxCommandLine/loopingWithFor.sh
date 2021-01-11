#!/bin/bash
for i in {0..10..2}
  do
     echo "We've been through this $i times already!"
  done

##################################

#!/bin/bash
for filename in file1 file2 file3
  do
	echo "Important stuff" >> $filename
  done