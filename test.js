'use strict' ;

const SmartDate = require('./smart-date') ;

console.log( 'Today: ', SmartDate.today().toLocaleString() );
console.log( 'Yesterday: ', SmartDate.yesterday().toLocaleString() );
console.log( 'Tomorrow: ', SmartDate.tomorrow().toLocaleString() );
console.log( 'This month start: ', SmartDate.thisMonth().toLocaleString() );
console.log( 'Next month start: ', SmartDate.nextMonth().toLocaleString() );
process.exit() ;