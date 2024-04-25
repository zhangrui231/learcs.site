---
sidebar_position: 4
description: lecture8 HTML,CSS,JavaScript Lab | 实验
title: Lab
---

# Lab 8: Trivia - CS50x 2023

Write a webpage that lets users answer trivia questions.

![screenshot of trivia questions](/img/cs50/questions.png )

## Getting Started

Open [VS Code](https://cs50.dev/).

Start by clicking inside your terminal window, then execute `cd` by itself. You should find that its “prompt” resembles the below.

Click inside of that terminal window and then execute

```
wget https://cdn.cs50.net/2022/fall/labs/8/trivia.zip

```

followed by Enter in order to download a ZIP called `trivia.zip` in your codespace. Take care not to overlook the space between `wget` and the following URL, or any other character for that matter!

Now execute

to create a folder called `trivia`. You no longer need the ZIP file, so you can execute

and respond with “y” followed by Enter at the prompt to remove the ZIP file you downloaded.

Now type

followed by Enter to move yourself into (i.e., open) that directory. Your prompt should now resemble the below.

If all was successful, you should execute

and you should see an `index.html` file and a `styles.css` file.

If you run into any trouble, follow these same steps again and see if you can determine where you went wrong!

## Implementation Details

Design a webpage using HTML, CSS, and JavaScript to let users answer trivia questions.

-   In `index.html`, add beneath “Part 1” a multiple-choice trivia question of your choosing with HTML.
    -   You should use an `h3` heading for the text of your question.
    -   You should have one `button` for each of the possible answer choices. There should be at least three answer choices, of which exactly one should be correct.
-   Using JavaScript, add logic so that the buttons change colors when a user clicks on them.
    -   If a user clicks on a button with an incorrect answer, the button should turn red and text should appear beneath the question that says “Incorrect”.
    -   If a user clicks on a button with the correct answer, the button should turn green and text should appear beneath the question that says “Correct!”.
-   In `index.html`, add beneath “Part 2” a text-based free response question of your choosing with HTML.
    -   You should use an `h3` heading for the text of your question.
    -   You should use an `input` field to let the user type a response.
    -   You should use a `button` to let the user confirm their answer.
-   Using JavaScript, add logic so that the text field changes color when a user confirms their answer.
    -   If the user types an incorrect answer and presses the confirmation button, the text field should turn red and text should appear beneath the question that says “Incorrect”.
    -   If the user types the correct answer and presses the confirmation button, the input field should turn green and text should appear beneath the question that says “Correct!”.

Optionally, you may also:

-   Edit `styles.css` to change the CSS of your webpage!
-   Add additional trivia questions to your trivia quiz if you would like!

### Walkthrough

### Hints

-   Use [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) to query for a single HTML element.
-   Use [`document.querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) to query for multiple HTML elements that match a query. The function returns an array of all matching elements.

Not sure how to solve?

### Testing

No `check50` for this lab, as implementations will vary based on your questions! But be sure to test both incorrect and correct responses for each of your questions to ensure that your webpage responds appropriately.

Run `http-server` in your terminal while in your `lab8` directory to start a web server that serves your webpage.

## How to Submit

In your terminal, execute the below to submit your work.

```
submit50 cs50/labs/2023/x/trivia

```
