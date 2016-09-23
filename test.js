'use strict' ;

const SmartDate = require('./smart-date') ;

console.log( 'Today: ', SmartDate.today().toLocaleString() );
console.log( 'Yesterday: ', SmartDate.yesterday().toLocaleString() );
console.log( 'Tomorrow: ', SmartDate.tomorrow().toLocaleString() );
console.log( 'This month start: ', SmartDate.thisMonth().toLocaleString() );
console.log( 'Next month start: ', SmartDate.nextMonth().toLocaleString() );

let testdate = new SmartDate( "2016-09-01T15:00:00") ;
console.log( "Adding 3 seconds: ", testdate.toLocaleString(), " => ", testdate.addSeconds(3).toLocaleString());
console.log( "Subtracting 22 seconds: ", testdate.toLocaleString(), " => ", testdate.addSeconds(-22).toLocaleString());
console.log( "Adding 5 minutes: ", testdate.toLocaleString(), " => ", testdate.addMinutes(5).toLocaleString());
console.log( "Subtracting 20 minutes: ", testdate.toLocaleString(), " => ", testdate.addMinutes(-20).toLocaleString());
console.log( "Adding 12 hours: ", testdate.toLocaleString(), " => ", testdate.addHours(12).toLocaleString());
console.log( "Subtracting 20 hours: ", testdate.toLocaleString(), " => ", testdate.addHours(-20).toLocaleString());
console.log( "Adding 24 days: ", testdate.toLocaleString(), " => ", testdate.addDays(24).toLocaleString());
console.log( "Subtracting 10 days: ", testdate.toLocaleString(), " => ", testdate.addDays(-10).toLocaleString());
console.log( "Adding 6 months: ", testdate.toLocaleString(), " => ", testdate.addMonths(6).toLocaleString());
console.log( "Subtracting 13 months: ", testdate.toLocaleString(), " => ", testdate.addMonths(-13).toLocaleString());
console.log( "Adding 2 years: ", testdate.toLocaleString(), " => ", testdate.addYears(2).toLocaleString());
console.log( "Subtracting 71 years: ", testdate.toLocaleString(), " => ", testdate.addYears(-71).toLocaleString());
console.log( "Date arithmetic test finished.\n\n");
testdate = new SmartDate() ;
console.log( `Truncating date ${testdate.toLocaleString()} using precision codes (YYYY,MM,DD,hh,mm,ss):`);
console.log( "Truncate to seconds: ", testdate.truncate('ss').toLocaleString());
console.log( "Truncate to minutes: ", testdate.truncate('mm').toLocaleString());
console.log( "Truncate to hours: ", testdate.truncate('hh').toLocaleString());
console.log( "Truncate to days: ", testdate.truncate('DD').toLocaleString());
console.log( "Truncate to months: ", testdate.truncate('MM').toLocaleString());
console.log( "Truncate to years: ", testdate.truncate('YYYY').toLocaleString());
console.log( `\nTruncating date ${testdate.toLocaleString()} using precision aliases (year,month,day,hour,minute,second):`);
console.log( "Truncate to seconds: ", testdate.truncate('second').toLocaleString());
console.log( "Truncate to minutes: ", testdate.truncate('minute').toLocaleString());
console.log( "Truncate to hours: ", testdate.truncate('hour').toLocaleString());
console.log( "Truncate to days: ", testdate.truncate('day').toLocaleString());
console.log( "Truncate to months: ", testdate.truncate('month').toLocaleString());
console.log( "Truncate to years: ", testdate.truncate('year').toLocaleString());

process.exit() ;