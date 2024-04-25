---
sidebar_position: 2
description: cs50x practice problem  prophecy
title: prophecy
---

# Hall of Prophecy - CS50x 2023

## [Learning Goals](#learning-goals)

-   “Refactor” a `SQL` database to eliminate redundancies
-   Use `SELECT`, `CREATE`, and `INSERT` statements to reorganize data
-   Write Python to load new `SQL` tables

![Hall of Prophecy](/img/cs50/prophecy.jpg )

## [Background](#background)

The keeper of the Hall of Prophecy, whose job entailed labelling records and keeping them up to date, decided to create a SQL database of Hogwarts students. Unfortunately the database was poorly designed! The database, `roster.db`, contains only one table, `students`, with the name and head of each of the four Hogwarts Houses.

Stumbling upon this database, you decide it could be better designed. Take a look at `roster.db` and notice how the name and head of each house repeats over and over. A better design would contain a students table (for _only_ students), a houses table (for _only_ houses), and a table that codifies the relationship between students and houses. This process of changing the “schema” of a database is known as [refactoring](https://en.wikipedia.org/wiki/Database_refactoring).

-   Hint
    
    -   You can view the data in the Hall of Prophecy’s table by executing `sqlite3 roster.db`, followed by `.schema` in your `sqlite3` prompt. This will output the `CREATE TABLE` statement that was used to generate the `students` table.
    -   You can then use `SELECT` statements to view the contents of this table.
    

## [Getting Started](#getting-started)

1.  Log into [cs50.dev](https://cs50.dev/) using your GitHub account.
2.  Click inside the terminal window and execute `cd`.
3.  Execute `wget https://cdn.cs50.net/2022/fall/labs/7/prophecy.zip` followed by Enter in order to download a zip called `prophecy.zip` in your codespace. Take care not to overlook the space between `wget` and the following URL, or any other character for that matter!
4.  Now execute `unzip prophecy.zip` to create a folder called `prophecy`.
5.  You no longer need the ZIP file, so you can execute `rm prophecy.zip` and respond with “y” followed by Enter at the prompt.

## [Implementation Details](#implementation-details)

You will use the existing data in `roster.db` to create a new database, one with a table for students, a table for houses, and a table for house assignments. You can do this with individual `SQL` queries, though we recommend ultimately writing your own Python program to automate the process! Notice we’ve given you the data from the `students` table of `roster.db` in CSV format, `students.csv`, for your convenience.

### [Developing a Schema](#developing-a-schema)

First, let’s develop a new schema for the database. In `schema.sql`, document the three `CREATE TABLE` commands you’ll need to create your three new tables.

Keep in mind you’ll want each table to represent a single entity: that is, your students table should represent _only_ students, your houses table should represent only _houses_, and your house assignments table should represent _only_ house assignments. You might find it helpful to first consider the pieces of information you’ll need in each table, and then about which SQLite data type best represents that information. For example, this was the `CREATE TABLE` command for `students`:

```
CREATE TABLE students (
    id INTEGER,
    student_name TEXT,
    house TEXT,
    head TEXT,
    PRIMARY KEY(id)
);

```

Keep in mind that every table should have a primary key: a column that uniquely identifies every row in the table. Some tables may be best designed with foreign keys: columns that reference the primary keys of another table.

When you’re ready to configure your database with your new schema, run your three new `CREATE TABLE` queries. Type `.schema` to see your results.

### [Inserting Data](#inserting-data)

After you’ve configured your database with your new schema, you can begin inserting data into your new database (using your new schema!). It’s best to write a Python program here, which can save you the trouble of writing many `INSERT` queries. Keep in mind that you have `students.csv`, which contains the data from the previous database’s `students` table.

## [Thought Question](#thought-question)

-   Why do you think it’s considered better design not to repeat information like houses and heads for each student?

## [How to Test Your Code](#how-to-test-your-code)

You’ll likely find the following commands helpful for testing your code:

-   `.schema` to check the schema of your database
-   `SELECT * FROM table;` where `table` is the name of the table you’d like to see data from

No `check50` for this one!

## [How to Submit](#how-to-submit)

No need to submit. This is a practice problem!