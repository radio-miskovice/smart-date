*This document is work in progress, not yet completed*

# date-enhanced

Smarter Date class than the default javascript Date

# Introduction

DateEnhanced extends Date class by adding several convenience methods, both static and instance.

## Compatibility

This module uses ES6 syntax including spread operator. Therefore it will run in NodeJS version 6 and above.

## Installation

    npm install date-enhanced

## How to Use

    const DateEnhanced = require('date-enhanced');

Use the same way you would use Date.

# Static Methods

## DateEnhanced.today()

Returns DateEnhanced object set to current local date, 00:00:00 local time. Since version 1.

## DateEnhanced.yesterday()

Returns DateEnhanced object set to current local date minus one day, 00:00:00 local time. Since version 1.

## DateEnhanced.tomorrow()

Returns DateEnhanced object set to current local date plus one day, 00:00:00 local time. Since version 1.

## DateEnhanced.thisMonth()

Returns DateEnhanced object set to the first day of the current month, 00:00:00 local time. Since version 1.

## DateEnhanced.nextMonth()

Returns DateEnhanced object set to the first day of the next month, 00:00:00 local time. Since version 1.

# Instance Methods

## truncate( precision = 'DD' )

Truncates instance value to the units indicated in parameter _precision_ and returns the original instance, i.e. it is a chainable
method. Precision units are:

  - 'ss' or 'second'
    Truncates to seconds, i.e. set milliseconds to zero.
  - 'mm' or 'minute'
    Truncates to minute, set seconds and milliseconds to zero. 
  - 'hh' or 'hour'
    Truncates to hour, set minutes, seconds and milliseconds to zero.
  - 'DD' or 'day'
    Truncates to day, i.e. set local time to zero.
  - 'MM' or 'month'
    Truncates to month, i.e. sets local time to zero and day of month to 1
  - 'YYYY' or 'year'
    Truncates to the first day of the year, local time 00:00:00.000

Please note that this method modifies the instance itself.

## truncated( precision = 'DD' )

This method does the same job as truncate() except that it returns a new, truncated instance 
and leaves the original instance unmodified.

## addSeconds ( seconds ) 

Returns a new instance with value changed by the amount of seconds specified (both positive or negative).

## addMinutes ( minutes )

Returns a new instance with value changed by the amount of minutes specified (both positive or negative).

## addHours   ( hours )  

Returns a new instance with value changed by the amount of hours specified (both positive or negative).

## addDays    ( days )   

Returns a new instance with value changed by the amount of days specified (both positive or negative).

## addMonths  ( months ) 

Returns a new instance with value changed by the amount of months specified (both positive or negative).

## addYears   ( years )  

Returns a new instance with value changed by the amount of years specified (both positive or negative).
