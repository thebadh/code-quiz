> coding challenge

There are 4 tasks to complete this coding challenge:

1. Write a function that passes the tests written in test/create.js
1. Write a function that passes the tests written in test/post.js
1. Write a test for the code written in src/read.js
1. Write a human-readable description of the code in src/

# Basics

1. Install node + npm 5.3 or higher: https://nodejs.org/en/
1. Install gulp: `$ npm i -g gulp`
1. Install and run mongodb: https://www.mongodb.org/
1. Fork this project on github
1. Clone your fork locally
1. Run `$ npm i`
1. Complete 4 tasks (Hint: Run tests with `$ npm test`)
1. Submit a pull request when done

# Task instructions

## Task 1 - Client Side POST request

test/client/index.js contains a functional test with several expectations.
It relies on code that has yet to be written in the function `post` in src/client/index.js.
Your job is to write code within that function to pass the tests.

## Task 2 - Server Side Mongo Query

test/server/index.js contains a functional test with several expectations.
It relies on code that has yet to be written in the function `create` in src/server/index.js.
Your job is to write code within that function to pass the tests.

## Task 3 - Server Side Testing

src/server/index.js contains a function `changeUserName`.
Write code in test/server/index.js that test and demonstrate the functionality and basic edge cases
of `changeUserName`.

## Task 4 - FP analysis

src/server/index.js contains a function `shiftUserNames`.
This function uses the function reduce from the library ramda: http://ramdajs.com/0.19.1/docs/#reduce.
Add a file Documentation.md and explain using well-formatted markdown, in readable, plain english
what this function does and how it achieves the result.
