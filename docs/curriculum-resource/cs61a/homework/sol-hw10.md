# Homework 10 Solutions | CS 61A Spring 2024

## Homework 10 Solutions

-   [hw10.zip](/resource/cs61a/hw10.zip)

## Solution Files

You can find the solutions in the [hw10.sql](https://cs61a.org//hw/sol-hw10/hw10.sql) file.

To check your progress, you can run `sqlite3` directly by running:

```
python3 sqlite_shell.py --init hw10.sql
```

You should also check your work using `ok`:

```
python3 ok
```

## Required Questions

## Getting Started Videos

These videos may provide some helpful direction for tackling the coding problems on this assignment.

> To see these videos, you should be logged into your berkeley.edu email.

[YouTube link](https://youtu.be/playlist?list=PLx38hZJ5RLZdu9gX9JS-nvtf4ELt9Vtnm)

## SQL

### Dog Data

In each question below, you will define a new table based on the following tables.

```
CREATE TABLE parents AS
  SELECT "abraham" AS parent, "barack" AS child UNION
  SELECT "abraham"          , "clinton"         UNION
  SELECT "delano"           , "herbert"         UNION
  SELECT "fillmore"         , "abraham"         UNION
  SELECT "fillmore"         , "delano"          UNION
  SELECT "fillmore"         , "grover"          UNION
  SELECT "eisenhower"       , "fillmore";

CREATE TABLE dogs AS
  SELECT "abraham" AS name, "long" AS fur, 26 AS height UNION
  SELECT "barack"         , "short"      , 52           UNION
  SELECT "clinton"        , "long"       , 47           UNION
  SELECT "delano"         , "long"       , 46           UNION
  SELECT "eisenhower"     , "short"      , 35           UNION
  SELECT "fillmore"       , "curly"      , 32           UNION
  SELECT "grover"         , "short"      , 28           UNION
  SELECT "herbert"        , "curly"      , 31;

CREATE TABLE sizes AS
  SELECT "toy" AS size, 24 AS min, 28 AS max UNION
  SELECT "mini"       , 28       , 35        UNION
  SELECT "medium"     , 35       , 45        UNION
  SELECT "standard"   , 45       , 60;
```

Your tables should still perform correctly even if the values in these tables change. For example, if you are asked to list all dogs with a name that starts with h, you should write:

```
SELECT name FROM dogs WHERE "h" <= name AND name < "i";
```

Instead of assuming that the `dogs` table has only the data above and writing

```
SELECT "herbert";
```

The former query would still be correct if the name `grover` were changed to `hoover` or a row was added with the name `harry`.

### Q1: By Parent Height

Create a table `by_parent_height` that has a column of the names of all dogs that have a `parent`, ordered by the height of the parent dog from tallest parent to shortest parent.

```
-- All dogs with parents ordered by decreasing height of their parent
CREATE TABLE by_parent_height AS
SELECT child FROM parents, dogs WHERE name = parent ORDER BY height desc;
```

For example, `fillmore` has a parent `eisenhower` with height 35, and so should appear before `grover` who has a parent `fillmore` with height 32. The names of dogs with parents of the same height should appear together in any order. For example, `barack` and `clinton` should both appear at the end, but either one can come before the other.

```
sqlite> select * from by_parent_height;
herbert
fillmore
abraham
delano
grover
barack
clinton
```

Use Ok to test your code:

```
python3 ok -q by_parent_height
```

  

We need information from both the `parents` and the `dogs` table. This time, the only rows that make sense are the ones where a child is matched up with their parent. Finally, we order the result by descending height.

### Q2: Size of Dogs

The Fédération Cynologique Internationale classifies a standard poodle as over 45 cm and up to 60 cm. The `sizes` table describes this and other such classifications, where a dog must be over the `min` and less than or equal to the `max` in `height` to qualify as `size`.

Create a `size_of_dogs` table with two columns, one for each dog's `name` and another for its `size`.

```
-- The size of each dog
CREATE TABLE size_of_dogs AS
SELECT name, size FROM dogs, sizes
    WHERE height > min AND height <= max;
```

The output should look like the following:

```
sqlite> select * from size_of_dogs;
abraham|toy
barack|standard
clinton|standard
delano|standard
eisenhower|mini
fillmore|mini
grover|toy
herbert|mini
```

Use Ok to test your code:

```
python3 ok -q size_of_dogs
```

  

We know that at a minimum, we need information from both the `dogs` and `sizes` table. Finally, we filter and keep only the rows that make sense: a size that corresponds to the size of the dog we're currently considering.

### Q3: Sentences

There are two pairs of siblings that have the same size. Create a table that contains a row with a string for each of these pairs. Each string should be a sentence describing the siblings by their size.

```
-- Filling out this helper table is optional
CREATE TABLE siblings AS
SELECT a.child AS first, b.child AS second FROM parents AS a, parents AS b
    WHERE a.parent = b.parent AND a.child < b.child;
-- Sentences about siblings that are the same size
CREATE TABLE sentences AS
SELECT "The two siblings, " || first || " and " || second || ", have the same size: " || a.size
    FROM siblings, size_of_dogs AS a, size_of_dogs AS b
    WHERE a.size = b.size AND a.name = first AND b.name = second;
```

Each sibling pair should appear only once in the output, and siblings should be listed in alphabetical order (e.g. `"barack and clinton..."` instead of `"clinton and barack..."`), as follows:

```
sqlite> select * from sentences;
The two siblings, barack and clinton, have the same size: standard
The two siblings, abraham and grover, have the same size: toy
```

> **Hint**: First, create a helper table containing each pair of siblings. This will make comparing the sizes of siblings when constructing the main table easier.
> 
> **Hint**: If you join a table with itself, use `AS` within the `FROM` clause to give each table an alias.
> 
> **Hint**: In order to concatenate two strings into one, use the `||` operator.

Use Ok to test your code:

```
python3 ok -q sentences
```

  

Roughly speaking, there are two tasks we need to solve here:

**Figure out which dogs are siblings**

A sibling is someone you share a parent with. This will probably involve the `parents` table.

It might be tempting to join this with `dogs`, but there isn't any extra information provided by a dogs table that we need at this time. Furthermore, we still need information on sibling for a given dog, since the `parents` table just associates each dog to a parent.

The next step, therefore, is to match all children to all other children by joining the parents table to itself. The only rows here that make sense are the rows that represent sibling relationships since they share the same parent.

Remember that we want to avoid duplicates! If dog A and B are siblings, we don't want both A/B and B/A to appear in the final result. We also definitely don't want A/A to be a sibling pair. Enforcing ordering on the sibling names ensures that we don't have either issue.

**Construct sentences based on sibling information**

After determining the siblings, constructing the sentences just requires us to get the size of each sibling. We could join on the `dogs` and `sizes` tables as we did in an earlier problem, but there's no need to redo that work. Instead, we'll reuse our `size_of_dogs` table to figure out the size of each sibling in each pair.

### Q4: Low Variance

We want to create a table that contains the height range (difference between maximum and minimum height) of all dogs that share a fur type. However, we'll only consider fur types where each dog with that fur type is within 30% of the average height of all dogs with that fur type.

For example, if the average height for short-haired dogs is 10, then in order to be included in our output, all dogs with short hair must have a height of at most 13 and at least 7.

To achieve this, we can use `MIN`, `MAX`, and `AVG`. For this problem, we'll want to find the average height and make sure that:

-   There are no heights smaller than 0.7 of the average.
-   There are no heights greater than 1.3 of the average.

Your output should first include the fur type and then the height range for the fur types that meet this criteria.

```
-- Height range for each fur type where all of the heights differ by no more than 30% from the average height
CREATE TABLE low_variance AS
SELECT fur, MAX(height) - MIN(height) FROM dogs GROUP BY fur
      HAVING MIN(height) >= .7 * AVG(height) AND MAX(height) <= 1.3 * AVG(height);
-- Example:
SELECT * FROM low_variance;
-- Expected output:
-- curly|1
```

_Explanation_: The average height of long-haired dogs is 39.7, so the low variance criterion requires the height of each long-haired dog to be between 27.8 and 51.6. However, `abraham` is a long-haired dog with height 26, which is outside this range. For short-haired dogs, `barack` falls outside the valid range (check!). Thus, neither short nor long haired dogs are included in the output. There are two curly haired dogs: `fillmore` with height 32 and `herbert` with height 31. This gives a height range of 1.

Use Ok to test your code:

```
python3 ok -q low_variance
```

  

## Submit

Submit this assignment by uploading any files you've edited **to the appropriate Gradescope assignment.** [Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) has detailed instructions.

Make sure to submit `hw10.sql` to the autograder!

## Exam Practice

The following are some SQL exam problems from previous semesters that you may find useful as additional exam practice.

1.  [Fall 2019 Final, Question 10: Big Game](https://cs61a.org/exam/fa19/final/61a-fa19-final.pdf#page=11)
2.  [Summer 2019 Final, Question 8: The Big SQL](https://cs61a.org/exam/su19/final/61a-su19-final.pdf#page=11)
3.  [Fall 2018 Final, Question 7: SQL of Course](https://inst.eecs.berkeley.edu/~cs61a/fa18/assets/pdfs/61a-fa18-final.pdf#page=9)