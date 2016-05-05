# R.reduce(*Function*, *Number*, *Array*)

*Consolidates an array into a single returned item by means of a specified function.*

`reduce` will iterate over each member of a given array, executing a given function.
With each iteration, the given function's output will be carried over to the following iteration.  Thus, an overall value accumulates with each execution of the given function.  Ultimately, the output of the given function over the final member of the given array yields the result returned by `reduce`.

    var array = [1, 2, 3],
        input = 5,
        multiply = (a, b) => a * b;
        
    R.reduce(multiply, input, array);

In example, the above code, with an initial input of 5 produces a mathematical output equivalent to 30, as described in the table below.

| Iteration |  Array Value | Mathematical Operation | Function Output |
|:---------:|:------------:|:----------------------:|:---------------:|
|     1     | array[0] = 1 |          1 * 5         |        5        |
|     2     | array[1] = 2 |          2 * 5         |        10       |
|     3     | array[2] = 3 |         3 * 10         |        30       |


## Notes:

* Empty or undefined indices will *not* be skipped

`accepts` **Array** `returns` **Number**
----------------------------------------
*see [Ramda docs](http://ramdajs.com/0.19.1/docs/#reduce) for more information*
