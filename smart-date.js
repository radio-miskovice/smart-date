'use strict';

class SmartDate extends Date {
    constructor(...params) {
        super( ...params );
    }

    static today() {
        let date = new Date() ;
        return new SmartDate( date.getFullYear(), date.getMonth(), date.getDate() );
    }
    static tomorrow() {
        let date = new Date() ;
        return new SmartDate( date.getFullYear(), date.getMonth(), date.getDate()+1 );
    }
    static yesterday() {
        let date = new Date() ;
        return new SmartDate( date.getFullYear(), date.getMonth(), date.getDate()-1 );
    }
    static thisMonth() {
        let date = new Date() ;
        return new SmartDate( date.getFullYear(), date.getMonth() );
    }
    static nextMonth() {
        let date = new Date() ;
        return new SmartDate( date.getFullYear(), date.getMonth()+1 );
    }

    truncate( precision = 'DD' ) {
        let [ YYYY, MM, DD, hh, mm, ss ] = [ this.getFullYear(), this.getMonth(), this.getDate(), 
                this.getHours(), this.getMinutes(), this.getSeconds() ] ;
        switch( precision ) {
            case 'year'  : ;
            case 'YYYY'  : MM = 0 ;
            case 'month' :
            case 'MM'    : DD = 1 ;
            case 'day'   :
            case 'DD'    : hh = 0 ;
            case 'hour'  :
            case 'hh'    : mm = 0 ;
            case 'minute' : 
            case 'mm'    : ss = 0 ;
            case 'ss'    : 
            case 'second': 
                return new SmartDate( YYYY, MM, DD, hh, mm, ss );
            default: throw new Error (`Invalid precision code in SmartDate.truncate( precision ). Precision code = "${precision}"`) ;
        }
    }

    addSeconds ( seconds ) { let newDate = new Date(this); newDate.setSeconds( newDate.getSeconds() + seconds ); return newDate ; }
    addMinutes ( minutes ) { let newDate = new Date(this); newDate.setMinutes( newDate.getMinutes() + minutes ); return newDate ; }
    addHours   ( hours )   { let newDate = new Date(this); newDate.setHours( newDate.getHours() + hours ); return newDate ; }
    addDays    ( days )    { let newDate = new Date(this); newDate.setDate( newDate.getDate() + days ); return newDate ; }
    addMonths  ( months )  { let newDate = new Date(this); newDate.setMonth( newDate.getMonth() + months ); return newDate ; }
    addYears   ( years )   { let newDate = new Date(this); newDate.setFullYear( newDate.getFullYear() + years ); return newDate ; }
    
    firstDay() {
        let result = new SmartDate( this.getFullYear(), this.getMonth(), 1 );
        return result ;
    }

    lastDay() {

    }    
}

module.exports = SmartDate ;