---
title: FAQ - Project 1A Linked List Deque 61B
description: Project 1A FAQ.
---

### I'm getting a "Required Type is Deque61B but provided is ..."

There are two possible issues. Make sure you haven't accidentally imported java.util.\* (or java.util.LinkedList or
java.util.ArrayList). The other possible issue comes with an issue in your class signature.

### Intellij is telling me "The method ... of type LinkedListDeque61B has the same erasure as ... of type Deque61B but does not override it."

You probably forgot the generic `T` in the implements line of your class signature (i.e. you wrote
`implements Deque61B` instead of `implements Deque61B<T>`). If you used something other than `T` for your generic type
parameter, use that instead.

### Q: How do I make my arrows point to particular fields of a data structure?

In your diagram from lecture it looked like the arrows were able to point to the middle of an array or at specific
fields of a node.

A: Any time I drew an arrow in class that pointed at an object, the pointer was to the ENTIRE object, not a particular
field of an object. In fact it is impossible for a reference to point to the fields of an object in Java.

### Q: What does OOB stand for?

Out of bounds.

### Q: My tests pass locally but Gradescope is telling me "NullPointerException: Cannot invoke java.lang.Iterable.iterator() because this.actual is null"

This may be caused by returning null in your `toList` method. Make sure that toList always returns an `ArrayList`, even if the Deque is empty.

### Q: I am receiving style error saying: "Class member field 'val' may not be public"

Try using `class ClassName` instead of `public class ClassName`

### Make sure to use your `Deque61B` interface rather than `java.util.Deque`
