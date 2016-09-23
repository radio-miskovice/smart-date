const DateEnhanced = require('../date-enhanced');

describe("Static function", () => {
  let currentDate = new Date() ;
  let [ yyyy, MM, dd, hh, mm, ss ] = [ 
      currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(),
      currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds()
  ] ;
  let todayDate = new Date( yyyy, MM, dd );
  let tomorrowDate = new Date( yyyy, MM, dd+1 );
  let yesterdayDate = new Date( yyyy, MM, dd - 1 );
  it( "today() should equal current date at 00:00:00 local time.", () => {
      let today = todayDate.valueOf() ;
      expect( DateEnhanced.today().valueOf() ).toBe( today );
  } );
  it( "tomorrow() should equal current date +1 at 00:00:00 local time.", () => {
      let tomorrow = tomorrowDate.valueOf() ;
      expect( DateEnhanced.tomorrow().valueOf() ).toBe( tomorrow );
  } );
  it( "yesterday() should equal current date -1 at 00:00:00 local time.", () => {
      let yesterday = yesterdayDate.valueOf() ;
      expect( DateEnhanced.yesterday().valueOf() ).toBe( yesterday );
  } );
  it("thisMonth() should equal 1st day of current month at 00:00:00 local time.", () => {
      let firstDayThisMonth = (new Date( yyyy, MM, 1 )).valueOf() ;
      expect( DateEnhanced.thisMonth().valueOf() ).toBe( firstDayThisMonth );
  } );
  it("nextMonth() should equal 1st day of the next month at 00:00:00 local time.", () => {
      let firstDayNextMonth = (new Date( yyyy, MM+1, 1 )).valueOf() ;
      expect( DateEnhanced.nextMonth().valueOf() ).toBe( firstDayNextMonth );
  } );
});

describe ( "Date arithmetic methods" , () => {
    let testDate = new DateEnhanced( 2016, 8, 1 );
    it( "should correctly add years", () => {
        expect( testDate.addYears(1).toLocaleString() ).toBe("2017-09-01 00:00:00");
    })
    it( "should correctly subtract years", () => {
        expect( testDate.addYears(-3).toLocaleString() ).toBe("2013-09-01 00:00:00");
    })
    it( "should correctly add months", () => {
        expect( testDate.addMonths(4).toLocaleString() ).toBe("2017-01-01 00:00:00");
    })
    it( "should correctly subtract months", () => {
        expect( testDate.addMonths(-11).toLocaleString() ).toBe("2015-10-01 00:00:00");
    })
    it( "should correctly add days", () => {
        expect( testDate.addDays(31).toLocaleString() ).toBe("2016-10-02 00:00:00");
    })
    it( "should correctly subtract days", () => {
        expect( testDate.addDays(-3).toLocaleString() ).toBe("2016-08-29 00:00:00");
    })
    it( "should correctly add years", () => {
        expect( testDate.addYears(1).toLocaleString() ).toBe("2017-09-01 00:00:00");
    })
    it( "should correctly subtract years", () => {
        expect( testDate.addYears(-3).toLocaleString() ).toBe("2013-09-01 00:00:00");
    })
} ) ;