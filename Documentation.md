# shiftUserNames(*Array[String]*)

*Renames every username within a list of users to the original username of the previous user in the list*

Ramda's `R.reduce` will iterate over each member of a given array of ID strings, executing the `changeUserName`
function on each ID.  Given the initial accumulator value of "Matt", `changeUserName` modifies the username of 
the first user object referenced in the array of IDs.  Only the final username string is returned.

### Dependent Behavior
The behavior of the `shiftUserNames` function is dependent on the return behavior of `changeUserName`.

If `changeUserName` returns the *modified* user object, then "Matt" will continuously be passed through the accumlator to the next iteration, resulting in every user referenced in the IDs array being given the username "Matt".

If `changeUserName` returns the *original* user object, then only the first user object referenced in the IDs 
array will become "Matt".  After each iteration, the *original* username will be passed through the `reduce` 
accumulator to the next user object referenced in the array.  Thus, within the given array of user IDs, each 
user object's username effectively shifts to the "right" by one.

    /* Modified user object is returned: */
    function changeUserName( id, newName ) {
        ...
        return User.findOneAndUpdate({ _id: id }, {$set: { username: newName }}, { new: true }).exec();
    };
    
    /* Original user object is returned: */
    function changeUserName( id, newName ) {
        ...
        return User.findOneAndUpdate({ _id: id }, {$set: { username: newName }}, { new: false }).exec();
    };
    

`accepts` **Array[String]** `returns` **String**
------------------------------------------------
*see [Ramda docs](http://ramdajs.com/0.19.1/docs/#reduce) for more information on `R.reduce`*
