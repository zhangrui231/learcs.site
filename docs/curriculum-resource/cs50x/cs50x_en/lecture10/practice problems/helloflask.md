---
sidebar_position: 1
description: cs50x practice problem  helloflask
title: helloflask
---

# Hello, Flask - CS50x 2023

## [Learning Goals](#learning-goals)

-   Build a simple flask app to gain an understanding of how to use this framework
-   Become familiar with Jinja, a templating language used with Flask

![FlaskLogo](/img/cs50/flask-logo.png )

## [Background](#background)

[Flask](https://flask.palletsprojects.com/), a [microframework](https://en.wikipedia.org/wiki/Microframework) used for web development, can be confusing when starting out. There are multiple files of different types, and they must reside in specific folders. In this problem, we’ll start with the absolute minimum—a single Python file. From there we will move on to create your first full-fledged web app!

## [Getting Started](#getting-started)

1.  Log into [cs50.dev](https://cs50.dev/) using your GitHub account.
2.  Click inside the terminal window and execute `cd`.
3.  Execute `wget https://cdn.cs50.net/2022/fall/labs/9/helloflask.zip` followed by Enter in order to download a zip called `helloflask.zip` in your codespace. Take care not to overlook the space between `wget` and the following URL, or any other character for that matter!
4.  Now execute `unzip helloflask.zip` to create a folder called `helloflask`.
5.  You no longer need the ZIP file, so you can execute `rm helloflask.zip` and respond with “y” followed by Enter at the prompt.

## [Implementation Details](#implementation-details)

The most simple Flask app uses just one file, `app.py`. This will create an html page and say hello. Add the following into `app.py` to get started.

```
from flask import Flask

app = Flask(__name__)


@app.route("/")
def index():
    return "Hello, World!"

```

This bit of code starts by importing `Flask` from the `flask` library. Though we don’t need to get too far into the weeds here, `Flask` is what programmers call a “[class](https://cs50.harvard.edu/python/2022/notes/8/#classes)”. Suffice to say for now, it’s like a template for the application we’ll be building. The line `app = Flask(__name__)` tells Python to create a particular app, henceforth called “app”, from the template. To create the particular application, we give the `Flask` class the name of the current Python file (represented by `__name__`), which allows our application to find other files we might later add to it. In this case, the name of the file is also “app” for consistency.

The most mysterious line in the application you’ve written is probably the one where you wrote:

This kind of function is called a decorator. Decorators allow you to take a basic function, like `app.route`, and extend its functionality with something custom: the function you write after the decorator. You can [read more](https://realpython.com/primer-on-python-decorators/) about decorators if you want, or you can just keep using them for now.

This line tells Flask that if an HTTP request comes in for “/”, the `index` function should be run. Note that, if we renamed the function to be `homepage`, this line would tell Flask that—every time it receives an HTTP request for “/”—it should run the `homepage` function.

Notice that the `index` function returns a piece of text, “Hello, World!”. This text is what Flask will render to the user when their request to the “/” route is complete. The returned text could be (and often is!) the text of an entire HTML file, which the browser then renders accordingly. But it’s just a piece of text for now, for brevity’s sake.

To run your app, type `flask run` into the terminal, and you will get a link to click, similar to when you run `http-server`. You’ve written a Flask app! Try returning different text, like `<h1>Hello, World!</h1>`. How does this change what you see?

### [Templates](#templates)

Instead of putting HTML code right into our Python programs, it’s best to move our HTML into separate files, to keep separate concerns separate. Since our app will likely include a number of similar HTML files, we can create one `layout.html` file which all our HTML files “extend”. “Extending” an HTML file means to keep all of the content of that HTML file while also adding some custom content, specific to a particular page.

By convention, Flask puts all HTML files inside of a `templates` folder. Inside the `helloflask` folder, make a folder called `templates` using `mkdir templates`. All your HTML files will go in this `templates` folder.

Inside `templates`, create a `layout.html` file that looks like this:

```
<!DOCTYPE html>

<html lang="en">
    <head>
        <title>Hello, Flask</title>
    </head>
    <body>
        <h1>Hello, Flask</h1>
        {% block body %}{% endblock %}
    </body>
</html>

```

The `{% block body %}{% endblock %}` syntax comes from [Jinja](https://palletsprojects.com/p/jinja/), which is a “template engine” for Python. The line with `{% block body %}{% endblock %}` is what makes this a layout file. If another HTML file extends `layout.html` and defines a block called “body”, we’ll insert that block into this section of the `layout.html`. A layout file can contain as many blocks as you want. Just give each one a different name.

Now create `index.html` so that it extends the template `layout.html`, like this:

```
{% extends "layout.html" %}

{% block body %}
    <p>Next we'll put a form here and get some POST action!</p>
{% endblock %}

```

Finally, we’ll go back to `app.py` to see these changes come to life. In the initial import, we’ll need a few more functions from Flask (as shown below). Then, replace the direct return of text with a call to Flask’s `render_template` function. The purpose of the `render_template` function is to preprocess `index.html` such that, when we give it to the browser, it also includes the HTML it “inherits” from `layout.html`.

```
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

```

When you run your application now (type `flask run`!), you’ll get a little more out of your app. But it isn’t really interactive yet!

### [Forms](#forms)

HTML forms allow the user to enter data into input fields and send the data to the server, often using the POST method of the HTTP protocol. You can learn more about HTML Forms [here](https://www.w3schools.com/html/html_forms.asp).

Add a form to `index.html` so that it looks like this:

```
{% extends "layout.html" %}

{% block body %}
    <form action="/" method="post">
        What is your favorite color?
        <select name="color">
            <option value="red">Harvard Crimson</option>
            <option value="blue">Yale Blue</option>
        </select>
        <button type="submit">Submit</button>
    </form>
{% endblock %}

```

Note that each form element has both a _name_ and a _value_. The name an element is what we’ll use to refer to that element. Its value is the value submitted by the form. Each get passed into `app.py` for our use when the form is submitted.

Run your app, visit the `/` route, and submit the form. Oops! You should see the message “Method not allowed”. So we’ll first need to make sure Flask allows the use of the POST method on `/`.

### [POST](#post)

In `app.py`, we need to adjust our route to handle the POST request. Here is what our new `app.py` looks like.

```
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    else:
        print("Form submitted!")
        color = request.form.get("color")
        return render_template("color.html", color=color)

```

This example has some logic in it: if the user submits a GET request, we’ll show them the basic `index.html` with a form to submit. If, though, they submit a POST request, we’ll do a few different things:

-   `print` “Form submitted!” to the terminal, for debugging’s sake. We should later remove this once we’re satisfied our program works as intended.
-   Store the _value_ of the “color” input in a variable also called `color`, as via `color = request.form.get("color")`.
-   Render a new HTML file, `color.html`, and pass the value of the `color` variable into the file under the very same name, `color`.

Let’s create `color.html` for our application to work:

```
{% extends "layout.html" %}

{% block body %}
    <p style="color: {{ color }}">Your favorite color is {{ color }}.</p>
{% endblock %}

```

Notice how we can insert the value of `color` anywhere in our HTML we’d like—whether as text in a sentence, or as a placeholder for the value of some CSS property.

We’ll likely want to add some additional input validation, however, instead of simply trusting our users to send only the values “blue” or “red” via POST. What additional code could you add to ensure the colors we receive are valid colors?

## [How to Test Your Code](#how-to-test-your-code)

Your program should behave as per the examples above.

No `check50` for this one!

## [How to Submit](#how-to-submit)

No need to submit. This is a practice problem!