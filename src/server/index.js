const mongoose = require( 'mongoose' );
const R = require( 'ramda' );
const conn = mongoose.connection;
const Schema = mongoose.Schema;

const User = mongoose.model( 'User', new Schema({
    _id: String,
    username: String,
    firstName: String,
    lastName: String,
    email: String,
}));

module.exports.User = User;

module.exports.connect = function connect() {
    return new Promise(( resolve, reject ) => {
        // assumes we're using a local unauthenticated mongo installation
        const mongoAddress = 'mongodb://localhost:27017';
        if ( conn.readyState === 1 ) {
            resolve( mongoAddress );
        }
        else {
            mongoose.connect( mongoAddress );
            conn.on( 'error', reject );
            conn.on( 'open', () => resolve( mongoAddress ));
        }
    });
};

module.exports.create = function create(properties) {
    /**
        TASK 2

        write quiz code here
        code should be written in es6 using promises

        1. create a new document in the User collection in mongo db using the properties supplied.
            Add an _id field to the properties which is a universal unique identifier.
        2. return a promise that resolves with the newly created document
    */
    const user = new User({
        _id: mongoose.Types.ObjectId(),
        email: properties.email,
        username: properties.username,
        firstName: properties.firstName,
        lastName: properties.lastName,
    });
    return user.save();
};

// accepts an id of a document to update and a newName to change it to
// returns a promise that resolves with the updated document and rejects if an error is encountered
module.exports.changeUserName = function changeUserName( id, newName ) {
    if ( typeof id !== 'string' ) return Promise.reject( new Error( 'id required' ));
    if ( typeof newName !== 'string' ) return Promise.reject( new Error( 'newName required' ));
    return User.findOneAndUpdate({ _id: id }, { username: newName }).exec();
};

module.exports.shiftUserNames = function shiftUserNames( ids ) {
    return R.reduce(
        ( queue, id ) => queue
            .then( name => module.exports.changeUserName( id, name ))
            .then( res => res.username ),
        Promise.resolve( 'Matt' ),
        ids
    );
};
