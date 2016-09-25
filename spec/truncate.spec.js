'use strict' ;

const DateEnhanced = require('../date-enhanced');

describe("Truncate method, using truncate codes (ss, mm, hh, DD, MM, YYYY)", () => {
    let testDate = new DateEnhanced( 2016, 2, 4, 22, 16, 33, 128 ) ;
    it( "should correctly truncate to seconds", () => {
        let dt1 = new DateEnhanced( testDate );
        dt1.truncate('ss');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-03-04 22:16:33.0");
    });
    it( "should correctly truncate to minutes", () => {
        let dt1 = new DateEnhanced( testDate );
        dt1.truncate('mm');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-03-04 22:16:00.0");
    });
    it( "should correctly truncate to hours", () => {
        let dt1 = new DateEnhanced( testDate );
        dt1.truncate('hh');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-03-04 22:00:00.0");
    });
    it( "should correctly truncate to days", () => {
        let dt1 = new DateEnhanced( testDate );
        dt1.truncate('DD');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-03-04 00:00:00.0");
    });
    it( "should truncate to days when precision parameter is undefined", () => {
        let dt1 = new DateEnhanced( testDate );
        dt1.truncate();
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-03-04 00:00:00.0");
    });
    it( "should correctly truncate to months", () => {
        let dt1 = new DateEnhanced( testDate );
        dt1.truncate('MM');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-03-01 00:00:00.0");
    });
    it( "should correctly truncate to years", () => {
        let dt1 = new DateEnhanced( testDate );
        dt1.truncate('YYYY');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-01-01 00:00:00.0");
    });
    it("should return the same object", () => {
        let dt1 = new DateEnhanced( testDate );
        expect( dt1.truncate() ).toBe( dt1 );
    }); 
} ) ;

describe("Truncate method, using truncate aliases (second, minute, hour, day, month, year)", () => {
  let testDate = new DateEnhanced( 2016, 2, 4, 22, 16, 33, 128 ) ;
  let dt1 = new DateEnhanced( testDate );
    it( "should correctly truncate to seconds", () => {
        dt1.truncate('second');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-03-04 22:16:33.0");
    });
    dt1 = new DateEnhanced( testDate );
    it( "should correctly truncate to minutes", () => {
        dt1.truncate('minute');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-03-04 22:16:00.0");
    });
    dt1 = new DateEnhanced( testDate );
    it( "should correctly truncate to hours", () => {
        dt1.truncate('hour');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-03-04 22:00:00.0");
    });
    dt1 = new DateEnhanced( testDate );
    it( "should correctly truncate to days", () => {
        dt1.truncate('day');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-03-04 00:00:00.0");
    });
    dt1 = new DateEnhanced( testDate );
    it( "should correctly truncate to months", () => {
        dt1.truncate('month');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-03-01 00:00:00.0");
    });
    it( "should correctly truncate to years", () => {
        dt1.truncate('year');
        expect( dt1.toLocaleString() + '.' + dt1.getMilliseconds().toString() ).toBe("2016-01-01 00:00:00.0");
    });
} ) ;