'use strict' ;

const DateEnhanced = require('../date-enhanced');

describe("truncated() method ", () => {
    let testDate = new DateEnhanced(2016, 2, 3, 4, 5, 6, 333 ) ;
    let originalString = testDate.toISOString() ;
    let truncDate = testDate.truncated();
    it( " should return a new object, not the same one ", () => {
        expect( truncDate ).not.toBe( testDate )
    });
    it( "should leave the original DateEnhanced object value unchanged", () => {
        expect( testDate.toISOString() ).toEqual( originalString );
    });
});
