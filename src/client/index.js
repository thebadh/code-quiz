'use strict';

window.global = ( function createGlobal() {
    return {
        submit: function submit( callback ) {
            /**
                TASK 1

                write quiz code here
                you have access to jquery in the global namespace $
                the body of you html looks like the following:

                <form id='createUser'>
                    <input type='text' id='username' value='JohnDoe12345'></input>
                    <input type='text' id='firstName' value='John'></input>
                    <input type='text' id='lastName' value='Doe'></input>
                    <input type='text' id='email' value='john@doe.com'></input>
                    <input type='submit' id='submit' value='john@doe.com'></input>
                </form>

                code should be written in es5

                1. make a post request to '/post' with this data as the body:
                2. invoke the callback with the json returned by the server
            */
        }
    };
}());
