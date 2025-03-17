---
title: Homework 1
---

# Overview

The first homework is to construct a set of SQL queries for analyzing a dataset that will be provided to you. For this, you will look into [Paris Olympics data](https://www.kaggle.com/datasets/piterfm/paris-2024-olympic-summer-games). This homework is an opportunity to: (1) learn basic and certain advanced SQL features, and (2) get familiar with using two full-featured DBMSs, [SQLite](https://www.sqlite.org/) and [DuckDB](https://duckdb.org/), that can be useful for you in the future.

This is a single-person project that will be completed individually (i.e., no groups).

- **Release Date:** Aug 28, 2024
- **Due Date:** Sep 08, 2024 @ 11:59pm

# Specification

The homework contains 6 questions in total and is graded out of 100 points. For each question, you will need to construct a SQL query that fetches the desired data. Your answer for each question should contain only one statement. For all the questions, you are free to use either SQLite and DuckDB to solve them. It will likely take you approximately 4-6 hours to complete the questions.

## Placeholder Folder

Create the placeholder submission folder with the empty SQL files that you will use for each question:

```
$ mkdir placeholder
$ cd placeholder
$ touch q1_sample.$DBMS.sql \
        q2_successful_coaches.$DBMS.sql \
        q3_Judo_athlete_medals.$DBMS.sql \
        q4_Athletics_venue_athletes.$DBMS.sql \
        q5_top5_rank_country_per_day.$DBMS.sql \
        q6_big_progress_country_female_teams.$DBMS.sql

$DBMS = duckdb or sqlite depending on which DBMS you answered that question with

```

After filling in the queries, you can compress the folder by running the following command:

```
$ zip -j submission.zip placeholder/*.sql

```

The `-j` flag lets you compress all the SQL queries in the zip file without path information. The grading scripts will **not** work correctly unless you do this.

# Instructions

1. Download the [database dump file](https://15445.courses.cs.cmu.edu/fall2024/files/olympics-cmudb2024.db.gz):


```
$ wget https://15445.courses.cs.cmu.edu/fall2024/files/olympics-cmudb2024.db.gz
```


    Check its MD5 checksum to ensure that you have correctly downloaded the file:


```
$ md5sum olympics-cmudb2024.db.gz
23836c35e58bd31c34f6b7edb26b5fe2  olympics-cmudb2024.db.gz
```

2. Unzip the database from the provided database dump by running the following commands on your shell. Note that the database file be **4.7MB** after you decompress it.


```
$ gunzip olympics-cmudb2024.db.gz
```


    The dataset is a little different from the [original one](https://www.kaggle.com/datasets/piterfm/paris-2024-olympic-summer-games), so please **use our dataset** to finish this assignment.


Then follow the instructions below to install SQLite and DuckDB.

## SQLite

You will first need to install SQLite on your development machine.

Make sure that you are using at least SQLite version 3.25! Older releases (prior to 2019) will
**not** support the SQL features that you need to complete this assignment.

- **Ubuntu Linux:** Please follow the [instructions](https://www.tutorialspoint.com/sqlite/sqlite_installation.htm).
- **Mac OS X:** On Mac OS Leopard or later, you don't have to! It comes pre-installed. You can upgrade it, if you absolutely need to, with [Homebrew](https://brew.sh/).

Then follow these instructions to load the dataset:

1. Check if `sqlite3` is properly working by [following this tutorial](https://sqlite.org/cli.html#getting_started).


2. Check the contents of the database by running the `.tables` command on the SQLite terminal. You should see **10 tables**, and the output should look like this:


```
$ sqlite3 olympics-cmudb2024.db
SQLite version 3.40.1 2022-12-28 14:03:47
Enter ".help" for usage hints.
sqlite> .tables
athletes      countries     medal_info    results       tokyo_medals
coaches       gender        medals        teams         venues
```

3. Run a simple query to make sure the dataset is uncorrupted:


```
sqlite> select count(*) from athletes;
11110
```


## DuckDB

Please follow the [instructions](https://duckdb.org/docs/installation/?version=stable) to install DuckDB version 1.0.0 for the command line environment.

We can directly load the dataset when we start DuckDB:

```
$ duckdb olympics-cmudb2024.db
v1.0.0 1f98600c2c
Enter ".help" for usage hints.
D select count(*) from results;
┌──────────────┐
│ count_star() │
│    int64     │
├──────────────┤
│        21316 │
└──────────────┘
```

2. You can check the contents of the database by running the `.tables` command on the DuckDB terminal. You should see **10 tables**. The output should look like this:

```
D .tables
athletes      countries     medal_info    results       tokyo_medals
coaches       gender        medals        teams         venues
```

## Check the schema

The following figure illustrates the schema of these tables:
![](/img/15445/schema2024.png)**Note**: All the `discipline` and `discipline_name` fields are also linked. These links are not shown in the diagram to maintain clarity.

Get familiar with the schema (structure) of the tables (what attributes do they contain, what are the primary and foreign keys). Run the `.schema $TABLE_NAME` command on the `sqlite3` terminal for each table. The output should look like the example below for each table.

### athletes

```
sqlite> .schema athletes
CREATE TABLE athletes(code VARCHAR, "name" VARCHAR, gender BIGINT, "function" VARCHAR, country_code VARCHAR, nationality_code VARCHAR, height BIGINT, weight DOUBLE, disciplines VARCHAR, events VARCHAR, birth_date VARCHAR, occupation VARCHAR, lang VARCHAR);
CREATE INDEX ix_athletes_code ON athletes(code);

```

Contains details for an athlete. For example, this is a row from the table:

```
1532872|ALEKSANYAN Artur|0|Athlete|ARM|ARM|0|0.0|['Wrestling']|["Men's Greco-Roman 97kg"]|1991-10-21|Athlete|Armenian, English, Russian

```

### coaches

```
sqlite> .schema coaches
CREATE TABLE coaches(code BIGINT, "name" VARCHAR, gender BIGINT, "function" VARCHAR, country_code VARCHAR, discipline VARCHAR, birth_date VARCHAR);
CREATE INDEX ix_coaches_code ON coaches(code);

```

Contains details for a coach. For example, this is a row from the table:

```
1533246|PEDRERO Ofelia|1|Coach|MEX|Artistic Swimming|1988-03-28

```

### countries

```
sqlite> .schema countries
CREATE TABLE countries(code VARCHAR, country VARCHAR, country_long VARCHAR, Population BIGINT, "GDP ($ per capita)" BIGINT, Latitude DOUBLE, Longitude DOUBLE);
CREATE INDEX ix_countries_code ON countries(code);

```

Contains details for a country. For example, this is a row from the table:

```
BAR|Barbados|Barbados|279912|15700|13.193887|-59.543198

```

### gender

```
sqlite> .schema gender
CREATE TABLE gender(id BIGINT PRIMARY KEY, "name" VARCHAR);

```

Contains gender information. For example, this is a row from the table:

```
0|Male

```

### medal\_info

```
sqlite> .schema medal_info
CREATE TABLE medal_info(code BIGINT PRIMARY KEY, "name" VARCHAR);

```

Contains medal information. For example, this is a row from the table:

```
1|Gold Medal

```

### medals

```
sqlite> .schema medals
CREATE TABLE medals(medal_code BIGINT, medal_date VARCHAR, discipline VARCHAR, "event" VARCHAR, winner_code VARCHAR);
CREATE INDEX ix_medals_code ON medals(medal_code);
CREATE INDEX ix_medals_winner_code ON medals(winner_code);

```

Contains details of a medal won at the Paris Olympics, including the winner's code, medal's discipline. **Note** the `winner_code` can be the code of an athlete or a team. Also **note** each medal will only have one record in this table, which means for a team, it will not have multiple records for each team member, just one record for the whole team. For example, this is a row from the table:

```
1|2024-07-27|Cycling Road|Men's Individual Time Trial|1903136

```

### results

```
sqlite> .schema results
CREATE TABLE results(date VARCHAR, event_name VARCHAR, discipline_name VARCHAR, venue VARCHAR, participant_code VARCHAR, participant_type VARCHAR, rank BIGINT, result VARCHAR, result_type VARCHAR);

```

Contains the results for every competition at the Paris Olympics. **Note** the `participant_code` can be a code of an athlete or a team. Also **note** each rank result will only have one record in this table, which means for a team, it will not have multiple records for each team member, just one record for the whole team. For example, this is a row from the table:

```
2024-08-09|Men's 10km|Marathon Swimming|Pont Alexandre III|1909030|Person|1|1:50:52.7|TIME

```

### teams

```
sqlite> .schema teams
CREATE TABLE teams(code VARCHAR, team VARCHAR, country_code VARCHAR, discipline VARCHAR, events VARCHAR, athletes_code VARCHAR);
CREATE INDEX ix_teams_athletes_code ON teams(athletes_code);
CREATE INDEX ix_teams_code ON teams(code);

```

Contains details for a team at the Paris Olympics Game. For example, this is a row from the table:

```
ARCMTEAM3---CHN01|People's Republic of China|CHN|Archery|Men's Team|1913366

```

### tokyo\_medals

```
sqlite> .schema tokyo_medals
CREATE TABLE tokyo_medals(country_code VARCHAR, gold_medal BIGINT, silver_medal BIGINT, bronze_medal BIGINT);
CREATE INDEX ix_tokyo_medals_country_code ON tokyo_medals(country_code);

```

Contains the medals of countries that participated in the Tokyo Olympics. For example, this is a row from the table:

```
USA|39|41|33

```

### venues

```
sqlite> .schema venues
CREATE TABLE venues(venue VARCHAR, disciplines VARCHAR, date_start VARCHAR, date_end VARCHAR);
CREATE INDEX ix_venues_code ON venues(venue);

```

Contains details for a venue. For example, this is a row from the table:

```
Aquatics Centre|['Artistic Swimming', 'Diving', 'Water Polo']|2024-07-27 09:00:00|2024-08-10 20:00:00

```

## Important Clarifications

Please pay attention to these details: (Although some points have already been mentioned, we’re summarizing them again in case you missed them.)

1. The `winner_code` in the `medals` table and `participant_code` in the `result` table can be the code of an athlete or a team.


2. In `medals`/ `result` table, each medal/rank result will only have one record in this table, which means if `winner_code`/ `participant_code` is a team, it will not have multiple records for each team member, just one record for the whole team. It also means even if two records are identical, they still represent different medal or rank outcomes. (Actually in the original dataset, these “identical” records have different timestamps, which we exclude for simplicity.)


3. Assume that if a team participates in a competition, `all` team members are competing.


## Construct the SQL Queries

It's time to start constructing the SQL queries and put them into the placeholder files. You can start with using SQLite.

### Q1 \[0 points\]

The purpose of this query is to make sure that the formatting of your output matches exactly the formatting of our auto-grading script.



**File:**  `q1_sample`

**Details:**
List all medal types in alphabetical order.



**Answer**: Here's the correct SQL query and expected output:


```
sqlite> select distinct(name) from medal_info order by name;
Bronze Medal
Gold Medal
Silver Medal

```

You should put this SQL query into the appropriate file ( `q1_sample.$DBMS.sql`)
in the submission directory ( `placeholder`).

### Q2 \[20 points\]

Find all successful coaches who have won `at least one` medal. List them in descending order by medal number, then by name alphabetically.


**File:**  `q2_successful_coaches`

**Details:** A medal is credited to a coach if it shares the `same country and discipline` with the coach, regardless of the gender or event. Consider to use `winner_code` of one medal to decide its country.

Your output should look like this:


```
COACH_NAME|MEDAL_NUMBER
```

Your first row should look like this:

```
BRECKENRIDGE Grant|9
```

### Q3 \[20 points\]

Find all athletes in `Judo` discipline, and also list the number of medals they have won. Sort output in descending order by medal number first, then by name alphabetically.



**File:**  `q3_Judo_athlete_medals`

**Details:** The medals counted do not have to be from the Judo discipline, and also be sure to include any medals won as part of a team. If an athlete doesn't appear in the `athletes` table, please ignore him/her. Assume that if a team participates in a competition, `all` team members are competing.



Your output should look like this:


```
ATHLETE_NAME|MEDAL_NUMBER
```

Your first row should look like this:


```
ABE Hifumi|2
```

### Q4 \[20 points\]

For all venues that have hosted `Athletics` discipline competitions, list all athletes who have competed at these venues, and sort them by the distance from their nationality country to the country they represented in descending order, then by name alphabetically.



**File:**  `q4_Athletics_venue_athletes`

**Details:** The athletes can have any discipline and can compete as `a team member or an individual` in these venues. The distance between two countries is calculated as the sum square of the difference between their latitudes and longitudes. Only output athletes who have `valid` information. (i.e., the athletes appear in the athletes table and have non-null latitudes and longitudes for both countries.) Assume that if a team participates in a competition, `all` team members are competing.

Your output should look like this:


```
ATHLETE_NAME|REPRESENTED_COUNTRY_CODE|NATIONALITY_COUNTRY_CODE
```

Your first row should look like this:


```
GREEN Joseph|GUM|USA
```

### Q5 \[20 points\]

For each day, find the country with the highest number of appearances in the top 5 ranks (inclusive) of that day. For these countries, also list their population rank and GDP rank. Sort the output by date in ascending order.



**File:**  `q5_top5_rank_country_per_day`

**Hints:** Use the `result` table, and use the `participant_code` to get the corresponding country. If you cannot get the country information for a record in the `result` table, ignore that record.

**Details:** When counting appearances, only consider records from the `results` table where `rank` is not null. Exclude days where all `rank` values are null from the output. In case of a tie in the number of appearances, select the country that comes first alphabetically. Keep the original format of the date. Also, DON'T remove duplications from `results` table when counting appearances. (see `Important Clarifications` section).

Your output should look like this:


```
DATE|COUNTRY_CODE|TOP5_APPEARANCES|GDP_RANK|POPULATION_RANK
```

Your first row should look like this:


```
2024-07-25|KOR|7|38|22
```

### Q6 \[20 points\]

List the five countries with the greatest improvement in the number of `gold` medals compared to the Tokyo Olympics. For each of these five countries, list all their `all-female teams`. Sort the output first by the increased number of gold medals in descending order, then by country code alphabetically, and last by team code alphabetically.



**File:**  `q6_big_progress_country_female_teams`

**Details:** When calculating all-female teams, if the `athletes_code` in a record from the `teams` table is not found in the `athletes` table, please ignore this record as if it doesn't exist.

**Hints:** You might find [Lateral Joins](https://duckdb.org/docs/sql/query_syntax/from.html#lateral-joins) in DuckDB useful: find out the 5 countries with largest progress first, and then use lateral join to find their all-female reams.

Your output should look like this:


```
COUNTRY_CODE|INCREASED_GOLD_MEDAL_NUMBER|TEAM_CODE
```

Your first row should look like this:


```
KOR|7|ARCWTEAM3---KOR01
```

# Grading Rubric

Each submission will be graded based on whether the SQL queries fetch the expected sets of tuples from the database. Only one statement is allowed in each SQL query. Note that your SQL queries will be auto-graded by comparing their outputs (i.e. tuple sets) to the correct outputs. For your queries, the **order** of the output columns is important; their names are not.

# Late Policy

See the [late policy](https://15445.courses.cs.cmu.edu/fall2024/syllabus.html#late-policy) in the syllabus.

# Submission

We use the Autograder from Gradescope for grading in order to provide you with immediate feedback. After completing the homework, you can submit your compressed folder `submission.zip` (only one file) to Gradescope:

- **[https://www.gradescope.com/courses/817456](https://www.gradescope.com/courses/817456)**

**Important:** Use the Gradescope course code announced on Piazza.

We will be comparing the output files using a function similar to `diff`. You can submit your answers as many times as you like.

# Collaboration Policy

- Every student has to work individually on this assignment.
- Students are allowed to discuss high-level details about the project with others.
- Students are **not** allowed to copy the contents of a white-board after a group meeting with other students.
- Students are **not** allowed to copy the solutions from another colleague.

**WARNING:** All of the code for this project must be your own. You may not copy source code from other students or other sources that you find on the web. Plagiarism **will not** be tolerated. See CMU's [Policy on Academic Integrity](http://www.cmu.edu/policies/documents/Academic%20Integrity.htm) for additional information.

# Reference Dataset

1. Petro. (2024). Paris 2024 Olympic Summer Games. Retrieved August 21, 2024 from [https://www.kaggle.com/datasets/piterfm/paris-2024-olympic-summer-games](https://www.kaggle.com/datasets/piterfm/paris-2024-olympic-summer-games).


2. Arjun Prasad Sarkhel. (2021). 2021 Olympics in Tokyo. Retrieved August 21, 2024 from [https://www.kaggle.com/datasets/arjunprasadsarkhel/2021-olympics-in-tokyo](https://www.kaggle.com/datasets/arjunprasadsarkhel/2021-olympics-in-tokyo).


3. Fernando Lasso. (2018). Countries of the World. Retrieved August 21, 2024 from [https://www.kaggle.com/datasets/fernandol/countries-of-the-world](https://www.kaggle.com/datasets/fernandol/countries-of-the-world).


4. bohnacker. (2022). Country Longitude Latitude. Retrieved August 21, 2024 from [https://www.kaggle.com/datasets/bohnacker/country-longitude-latitude](https://www.kaggle.com/datasets/bohnacker/country-longitude-latitude).