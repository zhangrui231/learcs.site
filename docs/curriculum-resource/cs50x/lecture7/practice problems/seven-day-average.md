---
sidebar_position: 4
description: cs50x practice problem  seven-day-average
title: seven-day-average
---

# Seven Day Averages - CS50x 2023

## [Learning Goals](#learning-goals)

-   Work with live data
-   Get practice with CSV files and `csv.DictReader`
-   Practice using dictionaries, lists and exceptions

![sevendaysavg](/img/cs50/seven-day-averages.png )

## [Background](#background)

A popular way to track COVID cases is using a 7-day average. Some states only record cases once a week, so using a 7-day average is much more accurate than daily numbers. In this program, you will be using a [New York Times repository](https://github.com/nytimes/covid-19-data) of live, cumulative COVID data to calculate new daily cases, create a 7-day average, and compare this week’s average to the previous week.

## [Getting Started](#getting-started)

1.  Log into [cs50.dev](https://cs50.dev/) using your GitHub account.
2.  Click inside the terminal window and execute `cd`.
3.  Execute `wget https://cdn.cs50.net/2022/fall/labs/6/seven-day-average.zip` followed by Enter in order to download a zip called `seven-day-average.zip` in your codespace. Take care not to overlook the space between `wget` and the following URL, or any other character for that matter!
4.  Now execute `unzip seven-day-average.zip` to create a folder called `seven-day-average`.
5.  You no longer need the ZIP file, so you can execute `rm seven-day-average.zip` and respond with “y” followed by Enter at the prompt.

## [Implementation Details](#implementation-details)

The distribution code for this problem uses the python `requests` library to access the New York Times data stored in an accessible GitHub repository. This is stored as a CSV file. The program then uses `DictReader` to read the CSV file. It then creates a `states` list to use selected states for calculations.

You will be completing two functions, `calculate` and `comparative_averages`.

### [`calculate`](#calculate)

In `calculate`, you’ll be creating a dictionary, `new_cases`, which will keep track of 14 days of new COVID cases for each state. Keys in this `dict` will be the names of states, and the values for each of those keys will be the most recent 14 days of new cases. Since the data from the New York Times is cumulative, each day’s new cases must be calculated by subtracting the previous day’s cases. To do this, you may want to create a second dictionary, `previous_cases`, that keeps track of each day’s new cases as it’s calculated.

-   Hint
    
    -   You can store 14 values in the list for each state by appending each new day’s data to end of the list and when the length of the list is greater than 14, removing the first element from the list.
    

Your `calculate` function should ultimately return the `new_cases` dictionary.

### [`comparative_averages`](#comparative_averages)

Since your `new_cases` dictionary is passed to this function, you can calculate this week’s 7-day average by summing up the _last_ 7 elements in the list for a selected state, then dividing this by 7. You can create a 7-day average for the previous week by doing the same with the _first_ 7 elements in that same list.

-   Hint
    
    -   Check out python list slicing to easily access a range of elements in a list. For example, `values[3:5]` will return the 3rd through 4th indexed elements in the list `values`. Note that the second index is _not_ inclusive.
    

You can then calculate the percent increase or decrease, by taking the difference of the two 7-day averages and dividing by last week’s average.

-   Hint
    
    -   Note that you can detect division by zero by handling a `ZeroDivisionError` with a `try` and `except` block. For example:
    
    ```
    try:
        numerator / denominator
    except ZeroDivisionError:
        ...
    
    ```
    
    Take a look at Week 3 in [CS50P](https://cs50.harvard.edu/python/2022/weeks/3/) for more on exceptions in Python.
    

## [Thought Question](#thought-question)

Why do you think some websites, such as [The Washington Post](https://www.washingtonpost.com/graphics/2020/national/coronavirus-us-cases-deaths/?state=US) post different values than your program generates for “Average daily new cases” and “Change in avg. daily cases in last 7 days” for some states, and the same values for others?

## [How to Test Your Code](#how-to-test-your-code)

Your program should behave per the examples below.

```
seven-day-average/ $ python seven-day-average.py
Choose one or more states to view average COVID cases.
Press enter when done.

State: Massachusetts
State: New York
State: 

Seven-Day Averages
Massachusetts had a 7-day average of 1646 and an increase of 46%.
New York had a 7-day average of 7502 and a decrease of 1%.

```

```
seven-day-average/ $ python seven-day-average.py
Choose one or more states to view average COVID cases.
Press enter when done.

State: Maine
State: California
State: 

Seven-Day Averages
California had a 7-day average of 20461 and a decrease of 8%.
Maine had a 7-day average of 196 and a decrease of 10%.

```

Do note that the numbers will vary each day, since the data you are using is updated daily.

No `check50` for this one!

To evaluate that the style of your code, type in the following at the `$` prompt.

```
style50 seven-day-average.py

```

## [How to Submit](#how-to-submit)

No need to submit! This is a practice problem.