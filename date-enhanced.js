'use strict';

class DateEnhanced extends Date {
    constructor(...params) {
        super( ...params );
    }

    static today() {
        let date = new Date() ;
        return new DateEnhanced( date.getFullYear(), date.getMonth(), date.getDate() );
    }
    static tomorrow() {
        let date = new Date() ;
        return new DateEnhanced( date.getFullYear(), date.getMonth(), date.getDate()+1 );
    }
    static yesterday() {
        let date = new Date() ;
        return new DateEnhanced( date.getFullYear(), date.getMonth(), date.getDate()-1 );
    }
    static thisMonth() {
        let date = new Date() ;
        return new DateEnhanced( date.getFullYear(), date.getMonth() );
    }
    static nextMonth() {
        let date = new Date() ;
        return new DateEnhanced( date.getFullYear(), date.getMonth()+1 );
    }

    truncate( precision = 'DD' ) {
        switch( precision ) {
            case 'year'  : ;
            case 'YYYY'  : this.setMonth(0) ;
            case 'month' :
            case 'MM'    : this.setDate(1) ;
            case 'day'   :
            case 'DD'    : this.setHours(0) ;
            case 'hour'  :
            case 'hh'    : this.setMinutes(0) ;
            case 'minute' : 
            case 'mm'    : this.setSeconds(0) ;
            case 'ss'    : 
            case 'second': this.setMilliseconds(0);
                return this ;
            default: throw new Error (`Invalid precision code in DateEnhanced.truncate( precision ). Precision code = "${precision}"`) ;
        }
    }

    truncated( precision ) {
        return (new DateEnhanced( this )).truncate( precision );
    }

    addSeconds ( seconds ) { let newDate = new Date(this); newDate.setSeconds( newDate.getSeconds() + seconds ); return newDate ; }
    addMinutes ( minutes ) { let newDate = new Date(this); newDate.setMinutes( newDate.getMinutes() + minutes ); return newDate ; }
    addHours   ( hours )   { let newDate = new Date(this); newDate.setHours( newDate.getHours() + hours ); return newDate ; }
    addDays    ( days )    { let newDate = new Date(this); newDate.setDate( newDate.getDate() + days ); return newDate ; }
    addMonths  ( months )  { let newDate = new Date(this); newDate.setMonth( newDate.getMonth() + months ); return newDate ; }
    addYears   ( years )   { let newDate = new Date(this); newDate.setFullYear( newDate.getFullYear() + years ); return newDate ; }
    
}

module.exports = DateEnhanced ;