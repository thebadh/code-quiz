const chai = require( 'chai' );
const expect = chai.expect;
const chaiaspromised = require( 'chai-as-promised' );
chai.use( chaiaspromised );
const server = require( '../../src/server/index' );

describe( 'create', function() {
    before( function() {
        return server.connect();
    });

    afterEach( function() {
        return server.User.remove({}).exec();
    });

    it( 'should create user JohnDoe12345 and return a promise the resolves with the document', function() {
        return server.create({
            username: 'JohnDoe12345',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
        })
        .then( res => {
            expect( res.email ).to.equal( 'john@doe.com' );
            expect( res.firstName ).to.equal( 'John' );
            expect( res.lastName ).to.equal( 'Doe' );
            expect( res.username ).to.equal( 'JohnDoe12345' );
            return server.User.findOne({ _id: res._id });
        })
        .then( res => {
            expect( res.email ).to.equal( 'john@doe.com' );
            expect( res.firstName ).to.equal( 'John' );
            expect( res.lastName ).to.equal( 'Doe' );
            expect( res.username ).to.equal( 'JohnDoe12345' );
        });
    });
});

describe( 'changeUserName', function() {
    /**
        TASK 3

        write quiz code here

        Write tests for server.changeUserName that demonstrate functionality and basic edge cases.
        You don't have to use mocha and chai, but they may make things easier. Simply demonstrating
        the functionality is enough.
    */
    before( function() {
        return server.connect();
    });

    afterEach( function() {
        return server.User.remove({}).exec();
    });

    it('should reject IDs that are not in string format', function () {
       return expect(server.changeUserName( 0, 'newName' )).to.be.rejectedWith( 'id required' );
    });

    it('should reject new names that are not in string format', function () {
       return expect(server.changeUserName( 'id', 0 )).to.be.rejectedWith( 'newName required' );
    });

    it('should return user object when IDs and new names are in string format', function () {
        return server.create({
            username: 'JohnDoe12345',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
        })
        .then( res => {
            return server.changeUserName( res._id, 'JohnDoe12345' );
        })
        .then( res => {
            expect( res.email ).to.equal( 'john@doe.com' );
            expect( res.firstName ).to.equal( 'John' );
            expect( res.lastName ).to.equal( 'Doe' );
            expect( res.username ).to.equal( 'JohnDoe12345' );
            return server.User.findOne({ _id: res._id });
        })
        .then( res => {
            expect( res.email ).to.equal( 'john@doe.com' );
            expect( res.firstName ).to.equal( 'John' );
            expect( res.lastName ).to.equal( 'Doe' );
            expect( res.username ).to.equal( 'JohnDoe12345' );
        });
    });

    it('should update username matching given user ID to new username', function () {
        return server.create({
            username: 'JohnDoe12345',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
        })
        .then( res => {
            return server.changeUserName( res._id, 'JaneDoe12345' );
        })
        .then( res => {
            expect( res.username ).to.equal( 'JaneDoe12345' );
        });
    });
});
