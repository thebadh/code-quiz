'use strict';

describe( 'karma', function() {
    describe( 'post', function() {
        before( function() {
            var requests = this.requests = [];
            $( 'body' ).html( "<form id='createUser'>" +
                "<input type='text' id='username' value='JohnDoe12345'></input>" +
                "<input type='text' id='firstName' value='John'></input>" +
                "<input type='text' id='lastName' value='Doe'></input>" +
                "<input type='text' id='email' value='john@doe.com'></input>" +
                "<input type='submit' id='submit' value='john@doe.com'></input>" +
                '</form>' );
            this.xhr = sinon.useFakeXMLHttpRequest();
            this.xhr.onCreate = function( xhr ) {
                requests.push( xhr );
            };
        });

        after( function() {
            this.xhr.restore();
        });

        it( 'should make a post request to /post and invoke the callback with the response', function() {
            var spy = sinon.spy();
            var response = {
                success: true,
                userId: '123456'
            };
            window.global.submit( spy );
            expect( this.requests.length ).to.equal( 1 );
            expect( this.requests[0].method ).to.equal( 'POST' );
            expect( this.requests[0].url ).to.equal( '/post' );
            expect( JSON.parse( this.requests[0].requestBody )).to.deep.equal({
                username: 'JohnDoe12345',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@doe.com'
            });
            this.requests[0].respond( 200, { 'Content-Type': 'application/json' }, JSON.stringify( response ));
            expect( spy ).to.have.been.calledWith( response );
        });
    });
});
