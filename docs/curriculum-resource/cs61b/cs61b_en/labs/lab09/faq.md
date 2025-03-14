---
title: FAQ
---

### I'm on a Windows laptop and the saving test is not working. 

If you’re on Windows, the character(s) to represent a new line are a little different compared 
to how it might be done on Mac and Linux. We’ve updated the skeleton to fix issues that that might 
arise from this. You can run git pull skeleton main to pull in the new changes.

### I'm failing tests 1.4 and 1.6 on the autograder. 

It may be difficult to pinpoint the problem from the error messages. To circumvent this, try writing or modifying a test to save, load, and save again (it doesn't matter if it passes or fails), and manually open `src/save.txt` to inspect the output to see how it differs from what you expect.

Be sure you're using `[x][y]` coordinates with (0, 0) as the bottom-left corner of the board! The orientation of the tiles should stay the same under this coordinate scheme when saving to and loading from the file.

Be sure you're actually modifying the tiles and dimensions of the `GameOfLife` object in `loadBoard`.

Some common things to look out for are to ensure that you're reading in the width and height back in from the 
file in `loadBoard` and to set the instance variables, so that `width` and `height` are initialized properly.
In addition, since the bottom left is (0. 0), keep in mind that when you load back in the board, 
you might be reading the file from top to bottom, so ensure that the orientation is read back in correctly 
when "populating" the board (when you split the file into an array, the top row of the board is read 
in first as the first row and the bottom row is read in last, so when loading it back into the board, 
make sure that the top row corresponds the top row of the board).
